"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemSchema = void 0;
const zod_1 = require("zod");
exports.menuItemSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(255),
    description: zod_1.z.string().min(3).max(255),
    price: zod_1.z.number().positive(),
    category: zod_1.z.string().min(3).max(255),
    image: zod_1.z.string().min(3).max(255),
    restaurantId: zod_1.z.string().min(3).max(255),
    createdAt: zod_1.z.string().min(3).max(255),
    updatedAt: zod_1.z.string().min(3).max(255),
    id: zod_1.z.string().min(3).max(255),
});
