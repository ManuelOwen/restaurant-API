"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.stateRouter = new hono_1.Hono();
// GET ALL states
exports.stateRouter.get("/states", bearAuth_1.adminRoleAuth, state_controller_1.getStates);
//grt a single state
exports.stateRouter.get("/states/:id", state_controller_1.getState);
//create state
exports.stateRouter.post("/states", state_controller_1.createState);
//update state
exports.stateRouter.put("/states/:id", state_controller_1.updateState);
//delete state
exports.stateRouter.delete("/states/:id", bearAuth_1.adminRoleAuth, state_controller_1.deleteState);
