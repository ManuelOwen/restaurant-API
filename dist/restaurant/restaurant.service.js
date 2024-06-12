"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantService = exports.updateRestaurantService = exports.insertRestaurantService = exports.getRestaurantByIdService = exports.restaurantsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const restaurantsService = async () => {
    return await db_1.db.query.restaurantTable.findMany();
};
exports.restaurantsService = restaurantsService;
const getRestaurantByIdService = async (id) => {
    return await db_1.db.query.restaurantTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantTable, id)
    });
};
exports.getRestaurantByIdService = getRestaurantByIdService;
const insertRestaurantService = async (restaurant) => {
    await db_1.db.insert(schema_1.restaurantTable).values(restaurant);
    // .returning({id:restaurantTable.restaurant_id}
    return "Restaurant created successfully ";
};
exports.insertRestaurantService = insertRestaurantService;
const updateRestaurantService = async (id, restaurant) => {
    await db_1.db.update(schema_1.restaurantTable).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable, id));
    return "Restaurant updated successfully ";
};
exports.updateRestaurantService = updateRestaurantService;
const deleteRestaurantService = async (id) => {
    await db_1.db.delete(schema_1.restaurantTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable, id));
    return "Restaurant deleted successfully ";
};
exports.deleteRestaurantService = deleteRestaurantService;
