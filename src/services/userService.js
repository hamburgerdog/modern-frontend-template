import api from './api'

/**
 * 用户相关 API 服务
 */
export const userService = {
  /**
   * 获取用户列表
   */
  getUsers: () => api.get('/users'),
  
  /**
   * 根据 ID 获取用户
   */
  getUserById: (id) => api.get(`/users/${id}`),
  
  /**
   * 创建用户
   */
  createUser: (userData) => api.post('/users', userData),
  
  /**
   * 更新用户
   */
  updateUser: (id, userData) => api.put(`/users/${id}`, userData),
  
  /**
   * 删除用户
   */
  deleteUser: (id) => api.delete(`/users/${id}`),
}
