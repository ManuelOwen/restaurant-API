"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateRestaurant = exports.insertRestaurant = exports.getRestaurantById = exports.listRestaurants = void 0;
const restaurant_service_1 = require("./restaurant.service");
//list restaurants
const listRestaurants = async (c) => {
    try {
        const restaurants = await (0, restaurant_service_1.restaurantsService)();
        if (restaurants == null)
            return c.text("No restaurants found ", 404);
        return c.json(restaurants, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listRestaurants = listRestaurants;
//get restaurant by id
const getRestaurantById = async (c) => {
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const restaurant = await (0, restaurant_service_1.getRestaurantByIdService)(id);
        if (restaurant == undefined)
            return c.text("Restaurant not found ", 404);
        return c.json(restaurant, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getRestaurantById = getRestaurantById;
//insert restaurant
const insertRestaurant = async (c) => {
    try {
        const restaurant = await c.req.json();
        const createdRestaurant = await (0, restaurant_service_1.insertRestaurantService)(restaurant);
        if (!createdRestaurant) {
            return c.text("Restaurant not created ", 400);
        }
        return c.json(restaurant, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertRestaurant = insertRestaurant;
//update restaurant
const updateRestaurant = async (c) => {
    const id = Number(c.req.param("id"));
    const restaurant = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const existingRestaurant = await (0, restaurant_service_1.getRestaurantByIdService)(id);
        if (existingRestaurant == undefined)
            return c.text("Restaurant not found ", 404);
        const updatedRestaurant = await (0, restaurant_service_1.updateRestaurantService)(id, restaurant);
        return c.json({ msg: updatedRestaurant }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateRestaurant = updateRestaurant;
//delete restaurant
const deleteRestaurant = async (c) => {
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const existingRestaurant = await (0, restaurant_service_1.getRestaurantByIdService)(id);
        if (existingRestaurant == undefined)
            return c.text("Restaurant not found ", 404);
        const deletedRestaurant = await (0, restaurant_service_1.deleteRestaurantService)(id);
        return c.text("Restaurant deleted successfully ", 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteRestaurant = deleteRestaurant;
