import { HomePage } from '@/pages/HomePage'
import { createFileRoute } from '@tanstack/react-router'

/**
 * 首页路由
 */
export const Route = createFileRoute('/')({
  component: HomePage,
})
