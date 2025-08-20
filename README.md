#  Label

一个基于现代前端技术栈构建的 React 应用程序脚手架，集成了当前最流行和实用的开发工具和库。

## 🚀 技术栈

### 核心框架
- **React 19** - 前端框架
- **Vite** - 构建工具，提供快速的开发体验
- **JavaScript ES6+** - 编程语言

### 路由管理
- **TanStack Router** - 现代化的文件系统路由，支持类型安全

### 状态管理
- **Zustand** - 轻量级状态管理库
- **Zod** - 数据验证和类型推断

### API 管理
- **TanStack Query** - 强大的数据获取和缓存库
- **Axios** - HTTP 客户端

### UI 和样式
- **Ant Design v5** - 企业级 UI 组件库
- **TailwindCSS** - 原子化 CSS 框架
- **Emotion** - CSS-in-JS 库

### 开发工具
- **React Use** - 实用的 React Hooks 集合
- **pnpm** - 快速、节省磁盘空间的包管理器

## 📦 安装

```bash
# 克隆项目
git clone <repository-url>
cd -label

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 🛠️ 可用脚本

```bash
# 开发模式
pnpm dev

# 构建项目
pnpm build

# 预览构建结果
pnpm preview

# 代码检查
pnpm lint

# 自动修复代码格式
pnpm lint:fix

# 清理缓存
pnpm clean
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── CounterCard.jsx  # 计数器组件（状态管理演示）
│   └── UserList.jsx     # 用户列表组件（API 请求演示）
├── hooks/               # 自定义 Hooks
│   ├── useUsers.js      # 用户数据相关 Hooks
│   ├── useLocalStorage.js
│   └── useDebounce.js
├── pages/               # 页面组件
│   ├── HomePage.jsx     # 首页
│   └── AboutPage.jsx    # 关于页面
├── routes/              # 路由配置
│   ├── __root.jsx       # 根路由
│   ├── index.jsx        # 首页路由
│   └── about.jsx        # 关于页面路由
├── services/            # API 服务
│   ├── api.js           # Axios 配置
│   └── userService.js   # 用户相关 API
├── stores/              # 状态管理
│   ├── useCounterStore.js
│   └── useUserStore.js
├── types/               # 类型定义和验证
│   └── user.js          # 用户相关 Zod Schema
├── utils/               # 工具函数
│   └── index.js
├── main.jsx             # 应用入口
└── router.js            # 路由器配置
```

## 🎯 特性

### ✅ 已实现功能

- 🚀 基于 Vite 的快速开发体验
- 📱 响应式设计，支持移动端
- 🎨 现代化 UI 设计，支持主题定制
- ⚡ 组件化开发，易于维护
- 🔄 完整的状态管理方案
- 🌐 RESTful API 集成
- 📊 数据获取和缓存优化
- 🧪 代码质量保证

### 🔧 开发工具集成

- **路由管理**: TanStack Router 提供文件系统路由
- **状态管理**: Zustand 轻量级状态管理，支持 Redux DevTools
- **数据获取**: TanStack Query 自动缓存、重试、后台更新
- **表单验证**: Zod 提供运行时类型验证
- **开发工具**: 集成 Router DevTools 和 Query DevTools

## 🚀 快速开始

### 1. 状态管理示例

```javascript
// 使用 Zustand 创建状态
import { useCounterStore } from '@/stores/useCounterStore'

const MyComponent = () => {
  const { count, increment, decrement } = useCounterStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
```

### 2. API 请求示例

```javascript
// 使用 TanStack Query 获取数据
import { useUsers } from '@/hooks/useUsers'

const UserList = () => {
  const { data: users, isLoading, error } = useUsers()
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

### 3. 路由配置示例

```javascript
// 创建新页面路由
import { createFileRoute } from '@tanstack/react-router'
import { MyPage } from '@/pages/MyPage'

export const Route = createFileRoute('/my-page')({
  component: MyPage,
})
```

## 🎨 样式方案

### TailwindCSS
使用原子化 CSS 类进行快速样式开发：

```jsx
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800">Hello World</h1>
  </div>
</div>
```

### Emotion CSS-in-JS
使用 styled components 创建可复用的样式组件：

```jsx
import styled from '@emotion/styled'

const StyledButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`
```

### Ant Design 组件
使用企业级 UI 组件：

```jsx
import { Button, Card, Typography } from 'antd'

const MyComponent = () => (
  <Card title="示例卡片">
    <Typography.Text>这是一个示例文本</Typography.Text>
    <Button type="primary">主要按钮</Button>
  </Card>
)
```

## 📚 最佳实践

### 组件开发
1. 每个函数不超过 50 行
2. 使用简洁的描述
3. 避免 if-else 嵌套，优先使用 early return
4. 每个函数都有简明的代码注释
5. 导出的函数添加 JSDoc 注释

### 组件拆分
1. 有效拆分交互组件和业务组件
2. 交互组件保持纯粹，不包含业务逻辑
3. 业务逻辑通过自定义 Hooks 进行管理
4. 充分利用 React Hooks

### 代码提交
1. 使用中文编写清晰的提交信息
2. 使用 `feat:`, `fix:`, `docs:` 等前缀
3. 第一行简要说明，下面分点详述修改内容

## 🔗 相关链接

- [Vite 文档](https://vitejs.dev/)
- [React 文档](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://github.com/pmndrs/zustand)
- [Ant Design](https://ant.design/)
- [TailwindCSS](https://tailwindcss.com/)
- [Emotion](https://emotion.sh/)

## 📄 许可证

MIT License