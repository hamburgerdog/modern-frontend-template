import { userService } from '@/services/userService'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

/**
 * 获取用户列表的自定义 Hook
 */
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
    staleTime: 5 * 60 * 1000, // 5分钟内数据不过期
  })
}

/**
 * 获取单个用户的自定义 Hook
 */
export const useUser = (id) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userService.getUserById(id),
    enabled: !!id, // 只有当 id 存在时才执行查询
  })
}

/**
 * 创建用户的自定义 Hook
 */
export const useCreateUser = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      // 创建成功后刷新用户列表
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}

/**
 * 更新用户的自定义 Hook
 */
export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, userData }) => userService.updateUser(id, userData),
    onSuccess: (_, { id }) => {
      // 更新成功后刷新用户列表和单个用户数据
      queryClient.invalidateQueries({ queryKey: ['users'] })
      queryClient.invalidateQueries({ queryKey: ['user', id] })
    },
  })
}

/**
 * 删除用户的自定义 Hook
 */
export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: userService.deleteUser,
    onSuccess: () => {
      // 删除成功后刷新用户列表
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}
