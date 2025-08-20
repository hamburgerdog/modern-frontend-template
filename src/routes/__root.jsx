import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

/**
 * 根路由组件
 * 提供全局布局和配置
 */
export const Route = createRootRoute({
  component: () => (
    <ConfigProvider locale={zhCN}>
      <div className="min-h-screen bg-gray-50">
        <Outlet />
      </div>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </ConfigProvider>
  ),
})
