import { z } from 'zod'

/**
 * 用户地址数据验证模式
 */
export const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
})

/**
 * 用户公司数据验证模式
 */
export const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
})

/**
 * 用户数据验证模式
 */
export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1, '姓名不能为空'),
  username: z.string().min(1, '用户名不能为空'),
  email: z.string().email('请输入有效的邮箱地址'),
  address: AddressSchema.optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  company: CompanySchema.optional(),
})

/**
 * 创建用户数据验证模式
 */
export const CreateUserSchema = UserSchema.omit({ id: true })

/**
 * 更新用户数据验证模式
 */
export const UpdateUserSchema = UserSchema.partial().extend({
  id: z.number(),
})

/**
 * 用户列表响应数据验证模式
 */
export const UsersResponseSchema = z.array(UserSchema)
