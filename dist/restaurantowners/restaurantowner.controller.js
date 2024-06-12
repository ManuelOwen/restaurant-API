"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwner = exports.updateRestaurantOwner = exports.insertRestaurantOwner = exports.getRestaurantOwnerById = exports.listRestaurantOwners = void 0;
const restaurantowner_service_1 = require("./restaurantowner.service");
//list restaurant owners
const listRestaurantOwners = async (c) => {
    try {
        const restaurantOwners = await (0, restaurantowner_service_1.restaurantOwnersService)();
        if (restaurantOwners == null)
            return c.text("No restaurant owners found ", 404);
        return c.json(restaurantOwners, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listRestaurantOwners = listRestaurantOwners;
//get restaurant owner by id
const getRestaurantOwnerById = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const restaurantOwner = await (0, restaurantowner_service_1.getRestaurantOwnerByIdService)(id);
        if (restaurantOwner == undefined)
            return c.text("Restaurant owner not found ", 404);
        return c.json(restaurantOwner, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getRestaurantOwnerById = getRestaurantOwnerById;
//insert restaurant owner
const insertRestaurantOwner = async (c) => {
    try {
        const restaurantOwner = await c.req.json();
        const createdRestaurantOwner = await (0, restaurantowner_service_1.insertRestaurantOwnerService)(restaurantOwner);
        if (!createdRestaurantOwner) {
            return c.text("Restaurant owner not created ", 400);
        }
        return c.json(restaurantOwner, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertRestaurantOwner = insertRestaurantOwner;
//update restaurant owner
const updateRestaurantOwner = async (c) => {
    const id = Number(c.req.param("id"));
    const restaurantOwner = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const existingRestaurantOwner = await (0, restaurantowner_service_1.getRestaurantOwnerByIdService)(id);
        if (existingRestaurantOwner == undefined)
            return c.text("Restaurant owner not found ", 404);
        const updatedRestaurantOwner = await (0, restaurantowner_service_1.updateRestaurantOwnerService)(id, restaurantOwner);
        return c.json({ msg: updatedRestaurantOwner }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateRestaurantOwner = updateRestaurantOwner;
//delete restaurant owner
const deleteRestaurantOwner = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for restaurant owner
        const existingRestaurantOwner = await (0, restaurantowner_service_1.getRestaurantOwnerByIdService)(id);
        if (existingRestaurantOwner == undefined)
            return c.text("Restaurant owner not found ", 404);
        //delete restaurant owner
        const deletedRestaurantOwner = await (0, restaurantowner_service_1.deleteRestaurantOwnerService)(id);
        return c.json({ msg: deletedRestaurantOwner }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteRestaurantOwner = deleteRestaurantOwner;
