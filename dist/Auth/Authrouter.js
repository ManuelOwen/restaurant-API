"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const user_validator_1 = require("../validators/user.validator");
const Authcontroller_1 = require("./Authcontroller");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/register', (0, zod_validator_1.zValidator)('json', user_validator_1.registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), Authcontroller_1.registerUserController);
exports.authRouter.post('/login', (0, zod_validator_1.zValidator)('json', user_validator_1.loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), Authcontroller_1.loginUserController);
