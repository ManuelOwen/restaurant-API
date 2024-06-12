"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comment_controller_1 = require("./comment.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
// import { userSchema } from "../validators/user.validator"
// import {userSchema} from "../validators";
exports.commentRouter = new hono_1.Hono();
// GET ALL users
exports.commentRouter.get("/comments", bearAuth_1.adminRoleAuth, comment_controller_1.getComments);
//grt a single user
exports.commentRouter.get("/comments/:id", comment_controller_1.getComment);
//create user
exports.commentRouter.post("/comments", comment_controller_1.createComment);
//update user
exports.commentRouter.put("/comments/:id", comment_controller_1.updateComment);
//delete user
exports.commentRouter.delete("/comments/:id", bearAuth_1.adminRoleAuth, comment_controller_1.deleteComment);
