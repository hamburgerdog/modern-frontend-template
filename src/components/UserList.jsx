import {
  Alert,
  Button,
  Input,
  Space,
  Table,
  Tag,
  Typography
} from 'antd'
import { useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'
import { useUsers } from '@/hooks/useUsers'
import {
  ReloadOutlined,
  SearchOutlined,
  UserOutlined
} from '@ant-design/icons'

const { Search } = Input
const { Title } = Typography

/**
 * 用户列表组件
 * 展示 TanStack Query 和 API 请求的使用
 */
export const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  const { 
    data: users, 
    isLoading, 
    error, 
    refetch,
    isFetching 
  } = useUsers()

  // 过滤用户数据
  const filteredUsers = users?.filter(user => 
    user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  ) || []

  // 表格列配置
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <Space>
          <UserOutlined />
          {name}
        </Space>
      ),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '网站',
      dataIndex: 'website',
      key: 'website',
      render: (website) => (
        <a 
          href={`https://${website}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {website}
        </a>
      ),
    },
    {
      title: '公司',
      dataIndex: ['company', 'name'],
      key: 'company',
      render: (company) => <Tag color="blue">{company}</Tag>,
    },
  ]

  // 错误状态
  if (error) {
    return (
      <Alert
        message="数据加载失败"
        description={error.message}
        type="error"
        showIcon
        action={
          <Button size="small" onClick={() => refetch()}>
            重试
          </Button>
        }
      />
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Title level={5} className="mb-0">
          用户列表 {users && `(${filteredUsers.length}/${users.length})`}
        </Title>
        
        <Space>
          <Search
            placeholder="搜索用户名或邮箱"
            allowClear
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 250 }}
            prefix={<SearchOutlined />}
          />
          
          <Button 
            icon={<ReloadOutlined />}
            onClick={() => refetch()}
            loading={isFetching}
          >
            刷新
          </Button>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        loading={isLoading}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showQuickJumper: true,
          showTotal: (total, range) => 
            `显示 ${range[0]}-${range[1]} 条，共 ${total} 条`,
        }}
        size="small"
      />

      {debouncedSearchTerm && (
        <div className="mt-2 text-gray-500 text-sm">
          搜索关键词: "{debouncedSearchTerm}" (防抖延迟: 500ms)
        </div>
      )}
    </div>
  )
}
