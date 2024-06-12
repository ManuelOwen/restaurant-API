"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchema = void 0;
//city validators
//  cityRouter.validator(citySchema)
const zod_1 = require("zod");
exports.citySchema = zod_1.z.object({
    name: zod_1.z.string(),
    id: zod_1.z.string(),
    state_id: zod_1.z.string(),
});
