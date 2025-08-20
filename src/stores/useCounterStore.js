import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

/**
 * 计数器状态存储
 * 示例状态管理，展示如何使用 Zustand
 */
export const useCounterStore = create(
  devtools(
    (set, get) => ({
      // 状态
      count: 0,
      
      // 操作
      increment: () => set((state) => ({ count: state.count + 1 }), false, 'increment'),
      decrement: () => set((state) => ({ count: state.count - 1 }), false, 'decrement'),
      reset: () => set({ count: 0 }, false, 'reset'),
      
      // 异步操作示例
      incrementAsync: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        set((state) => ({ count: state.count + 1 }), false, 'incrementAsync')
      },
    }),
    {
      name: 'counter-store',
    }
  )
)
