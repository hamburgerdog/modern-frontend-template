import { AboutPage } from '@/pages/AboutPage'
import { createFileRoute } from '@tanstack/react-router'

/**
 * 关于页面路由
 */
export const Route = createFileRoute('/about')({
  component: AboutPage,
})
