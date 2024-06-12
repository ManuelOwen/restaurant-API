"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phonenumber: zod_1.z.string(),
    address: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.registerUserSchema = zod_1.z.object({
    user_id: zod_1.z.number(),
    username: zod_1.z.string(),
    password: zod_1.z.string(),
    role: zod_1.z.string().optional()
});
exports.loginUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
