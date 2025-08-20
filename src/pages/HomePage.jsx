import {
  Button,
  Card,
  Col,
  Row,
  Space,
  Tag,
  Typography,
  notification
} from 'antd'
import { useState } from 'react'
import { useCounter } from 'react-use'

import { CounterCard } from '@/components/CounterCard'
import { UserList } from '@/components/UserList'
import { useCounterStore } from '@/stores/useCounterStore'
import { useUserStore } from '@/stores/useUserStore'
import styled from '@emotion/styled'
import { Link } from '@tanstack/react-router'

const { Title, Paragraph } = Typography

// 使用 emotion 的 styled components
const StyledCard = styled(Card)`
  .ant-card-head {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    .ant-card-head-title {
      color: white;
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`

/**
 * 首页组件
 * 展示项目的主要功能和技术栈
 */
export const HomePage = () => {
  const [localCount, { inc: incLocal, dec: decLocal, reset: resetLocal }] = useCounter(0)
  const { user, isAuthenticated, login } = useUserStore()
  
  // 演示登录功能
  const handleLogin = async () => {
    const result = await login({ username: 'demo' })
    if (result.success) {
      notification.success({
        message: '登录成功',
        description: '欢迎使用  Label 项目！',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 头部标题 */}
      <div className="text-center mb-12">
        <Title level={1} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
           Label 项目
        </Title>
        <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
          基于现代技术栈构建的 React 应用程序，集成了 Vite、TanStack Router、Zustand、
          TanStack Query、Antd v5、TailwindCSS 等技术
        </Paragraph>
      </div>

      {/* 技术栈标签 */}
      <div className="text-center mb-8">
        <Space wrap>
          <Tag color="blue">Vite</Tag>
          <Tag color="cyan">React 19</Tag>
          <Tag color="purple">TanStack Router</Tag>
          <Tag color="green">Zustand</Tag>
          <Tag color="orange">TanStack Query</Tag>
          <Tag color="red">Antd v5</Tag>
          <Tag color="indigo">TailwindCSS</Tag>
          <Tag color="pink">Emotion</Tag>
          <Tag color="yellow">Axios</Tag>
          <Tag color="lime">React Use</Tag>
        </Space>
      </div>

      {/* 功能演示区域 */}
      <Row gutter={[24, 24]}>
        {/* 状态管理演示 */}
        <Col xs={24} lg={12}>
          <StyledCard title="状态管理演示" className="h-full">
            <Space direction="vertical" className="w-full">
              <CounterCard />
              
              <div className="border-t pt-4">
                <Title level={5}>React Use Hook 演示</Title>
                <div className="flex items-center gap-4">
                  <span>本地计数: {localCount}</span>
                  <Button size="small" onClick={incLocal}>+</Button>
                  <Button size="small" onClick={decLocal}>-</Button>
                  <Button size="small" onClick={resetLocal}>重置</Button>
                </div>
              </div>
            </Space>
          </StyledCard>
        </Col>

        {/* 用户管理演示 */}
        <Col xs={24} lg={12}>
          <StyledCard title="用户认证演示" className="h-full">
            <Space direction="vertical" className="w-full">
              {isAuthenticated ? (
                <div>
                  <p>欢迎, <strong>{user?.name}</strong>!</p>
                  <p>邮箱: {user?.email}</p>
                </div>
              ) : (
                <div>
                  <p>您尚未登录</p>
                  <Button type="primary" onClick={handleLogin}>
                    模拟登录
                  </Button>
                </div>
              )}
            </Space>
          </StyledCard>
        </Col>

        {/* API 请求演示 */}
        <Col xs={24}>
          <StyledCard title="API 请求演示 (TanStack Query + Axios)">
            <UserList />
          </StyledCard>
        </Col>

        {/* 路由演示 */}
        <Col xs={24}>
          <Card title="路由演示">
            <Space>
              <Link to="/about">
                <Button type="link">关于页面</Button>
              </Link>
              <span className="text-gray-500">
                (点击查看 TanStack Router 路由跳转)
              </span>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
