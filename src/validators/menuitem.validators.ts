import {z} from 'zod';

export const menuItemSchema = z.object({
    name: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    price: z.number().positive(),
    category: z.string().min(3).max(255),
    image: z.string().min(3).max(255),
    restaurantId: z.string().min(3).max(255),
    createdAt: z.string().min(3).max(255),
    updatedAt: z.string().min(3).max(255),
    id: z.string().min(3).max(255),
});