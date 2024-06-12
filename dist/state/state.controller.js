"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.createState = exports.getState = exports.getStates = exports.listUsers = void 0;
const state_service_1 = require("./state.service");
const consumers_1 = require("stream/consumers");
const listUsers = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, state_service_1.stateService)(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listUsers = listUsers;
//get all states
const getStates = async (c) => {
    try {
        const data = await (0, state_service_1.stateService)(); // 
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getStates = getStates;
//get state by id
const getState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await (0, state_service_1.getStateService)(id);
    if (state == undefined) {
        return c.text("State not found", 404);
        console.log(consumers_1.text);
    }
    return c.json(state, 200);
};
exports.getState = getState;
//create state
const createState = async (c) => {
    try {
        const state = await c.req.json();
        const createdState = await (0, state_service_1.createStateService)(state);
        if (!createdState)
            return c.text("State not created", 404);
        return c.json({ msg: createdState }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createState = createState;
//update state
const updateState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await c.req.json();
    const updatedState = await (0, state_service_1.updateStateService)(id, state);
    if (!updatedState)
        return c.text("State not updated", 404);
    return c.json({ msg: updatedState }, 201);
};
exports.updateState = updateState;
//delete state
const deleteState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const deletedState = await (0, state_service_1.deleteStateService)(id);
    if (!deletedState)
        return c.text("State not deleted", 404);
    return c.json({ msg: deletedState }, 201);
};
exports.deleteState = deleteState;
