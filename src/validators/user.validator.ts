import { z } from 'zod'


export const userSchema = z.object({
    name: z.string(),
    email: z.string(),
    phonenumber: z.string(),
    address: z.string(),
    password: z.string(),
    
})

export const registerUserSchema = z.object({
    user_id: z.number(),
    username: z.string(),
    password: z.string(),
    role: z.string().optional()
})
export const loginUserSchema = z.object({
    username: z.string(),
    password: z.string()
})