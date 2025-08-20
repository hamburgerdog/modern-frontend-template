import {
  Button,
  Card,
  Divider,
  Space,
  Timeline,
  Typography
} from 'antd'

import {
  ArrowLeftOutlined,
  CodeOutlined,
  GithubOutlined,
  RocketOutlined
} from '@ant-design/icons'
import { Link } from '@tanstack/react-router'

const { Title, Paragraph, Text } = Typography

/**
 * 关于页面组件
 * 展示项目信息和技术栈详情
 */
export const AboutPage = () => {
  const techStack = [
    {
      title: '前端框架',
      items: ['React 19', 'Vite', 'JavaScript ES6+']
    },
    {
      title: '路由管理',
      items: ['TanStack Router (文件系统路由)']
    },
    {
      title: '状态管理',
      items: ['Zustand (轻量级状态管理)', 'Zod (数据验证)']
    },
    {
      title: 'API 管理',
      items: ['TanStack Query (数据获取)', 'Axios (HTTP 客户端)']
    },
    {
      title: 'UI 框架',
      items: ['Ant Design v5', 'TailwindCSS', 'Emotion (CSS-in-JS)']
    },
    {
      title: '开发工具',
      items: ['React Use (Hook 工具库)', 'pnpm (包管理器)']
    }
  ]

  const features = [
    '🚀 基于 Vite 的快速开发体验',
    '📱 响应式设计，支持移动端',
    '🎨 现代化 UI 设计，支持主题定制',
    '⚡ 组件化开发，易于维护',
    '🔄 完整的状态管理方案',
    '🌐 RESTful API 集成',
    '📊 数据获取和缓存优化',
    '🧪 代码质量保证',
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 返回按钮 */}
      <div className="mb-6">
        <Link to="/">
          <Button icon={<ArrowLeftOutlined />} type="text">
            返回首页
          </Button>
        </Link>
      </div>

      {/* 标题区域 */}
      <div className="text-center mb-12">
        <Title level={1}>
          关于  Label
        </Title>
        <Paragraph className="text-lg text-gray-600 max-w-3xl mx-auto">
          一个基于现代前端技术栈构建的 React 应用程序脚手架，
          集成了当前最流行和实用的开发工具和库。
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 项目特性 */}
        <Card title={<><RocketOutlined className="mr-2" />项目特性</>}>
          <Space direction="vertical" className="w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Text>{feature}</Text>
              </div>
            ))}
          </Space>
        </Card>

        {/* 技术栈详情 */}
        <Card title={<><CodeOutlined className="mr-2" />技术栈</>}>
          <Timeline>
            {techStack.map((tech, index) => (
              <Timeline.Item key={index}>
                <div>
                  <Text strong>{tech.title}</Text>
                  <div className="mt-1">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-600">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </Card>
      </div>

      <Divider />

      {/* 项目信息 */}
      <Card>
        <div className="text-center">
          <Title level={3}>开始开发</Title>
          <Paragraph>
            这个项目已经为您配置好了所有必要的工具和库，您可以立即开始开发。
            所有组件都遵循最佳实践，包括适当的错误处理、类型检查和性能优化。
          </Paragraph>
          
          <Space size="large" className="mt-6">
            <Button 
              type="primary" 
              icon={<GithubOutlined />}
              href="https://github.com"
              target="_blank"
            >
              查看源码
            </Button>
            <Link to="/">
              <Button>
                开始使用
              </Button>
            </Link>
          </Space>
        </div>
      </Card>
    </div>
  )
}
