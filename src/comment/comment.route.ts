import {Hono} from "hono";
import {getComments,getComment, createComment,updateComment,deleteComment } from "./comment.controller";
import {zValidator}from "@hono/zod-validator";
// import { userSchema } from "../validators/user.validator"
// import {userSchema} from "../validators";
 
export const commentRouter = new Hono();

// GET ALL users
commentRouter.get("/comments", getComments);
//grt a single user
commentRouter.get("/comments/:id", getComment);
//create user
commentRouter.post("/comments", createComment)
//update user
commentRouter.put("/comments/:id", updateComment)
//delete user
 commentRouter.delete("/comments/:id", deleteComment)


