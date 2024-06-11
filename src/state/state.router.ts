import {Hono} from "hono";
import {getStates,getState, createState,updateState,deleteState } from "./state.controller";
import {zValidator}from "@hono/zod-validator";
import { userSchema } from "../validators/user.validator"

export const stateRouter = new Hono();

// GET ALL states
stateRouter.get("/states", getStates);
//grt a single state
stateRouter.get("/states/:id", getState);
//create state
stateRouter.post("/states", createState)
//update state
stateRouter.put("/states/:id", updateState)
//delete state
stateRouter.delete("/states/:id", deleteState)  
