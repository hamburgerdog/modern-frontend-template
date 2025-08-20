import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'

import { router } from './router'

// 创建 QueryClient 实例
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 1000 * 60 * 5, // 5分钟
    },
  },
})

/**
 * 应用根组件
 * 配置全局 Provider
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
  </QueryClientProvider>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
