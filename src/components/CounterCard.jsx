import { Button, Space, Spin, Typography } from 'antd'
import { useState } from 'react'

import { useCounterStore } from '@/stores/useCounterStore'
import { MinusOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons'

const { Title } = Typography

/**
 * 计数器卡片组件
 * 展示 Zustand 状态管理的使用
 */
export const CounterCard = () => {
  const { count, increment, decrement, reset, incrementAsync } = useCounterStore()
  const [asyncLoading, setAsyncLoading] = useState(false)

  // 异步增加处理
  const handleAsyncIncrement = async () => {
    setAsyncLoading(true)
    try {
      await incrementAsync()
    } finally {
      setAsyncLoading(false)
    }
  }

  return (
    <div className="text-center">
      <Title level={5}>Zustand 状态管理演示</Title>
      
      <div className="my-4">
        <div className="text-3xl font-bold text-blue-600 mb-4">
          {count}
        </div>
        
        <Space wrap>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={increment}
          >
            增加
          </Button>
          
          <Button 
            icon={<MinusOutlined />}
            onClick={decrement}
          >
            减少
          </Button>
          
          <Button 
            icon={<ReloadOutlined />}
            onClick={reset}
          >
            重置
          </Button>
          
          <Button 
            type="dashed"
            loading={asyncLoading}
            onClick={handleAsyncIncrement}
            icon={!asyncLoading && <PlusOutlined />}
          >
            {asyncLoading ? '异步增加中...' : '异步增加'}
          </Button>
        </Space>
      </div>
    </div>
  )
}
