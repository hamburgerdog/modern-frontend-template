import { createRouter } from '@tanstack/react-router'

// 导入路由树
import { routeTree } from './routeTree.gen'

/**
 * 创建路由器实例
 */
export const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
})
