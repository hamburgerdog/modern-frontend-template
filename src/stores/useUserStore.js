import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

/**
 * 用户状态存储
 * 包含用户信息和认证状态
 */
export const useUserStore = create(
  devtools(
    persist(
      (set, get) => ({
        // 状态
        user: null,
        isAuthenticated: false,
        loading: false,
        
        // 操作
        setUser: (user) => set({ 
          user, 
          isAuthenticated: !!user 
        }, false, 'setUser'),
        
        setLoading: (loading) => set({ loading }, false, 'setLoading'),
        
        logout: () => set({ 
          user: null, 
          isAuthenticated: false 
        }, false, 'logout'),
        
        // 模拟登录
        login: async (credentials) => {
          set({ loading: true }, false, 'login/start')
          try {
            // 模拟 API 调用
            await new Promise(resolve => setTimeout(resolve, 1000))
            const user = {
              id: 1,
              name: credentials.username,
              email: `${credentials.username}@example.com`,
            }
            set({ 
              user, 
              isAuthenticated: true, 
              loading: false 
            }, false, 'login/success')
            return { success: true }
          } catch (error) {
            set({ loading: false }, false, 'login/error')
            return { success: false, error: error.message }
          }
        },
      }),
      {
        name: 'user-store',
        partialize: (state) => ({ 
          user: state.user, 
          isAuthenticated: state.isAuthenticated 
        }),
      }
    ),
    {
      name: 'user-store',
    }
  )
)
