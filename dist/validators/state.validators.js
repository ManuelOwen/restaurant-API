"use strict";
//state validators
//  stateRouter.validator(userSchema)
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    id: zod_1.z.string(),
    code: zod_1.z.string(),
});
