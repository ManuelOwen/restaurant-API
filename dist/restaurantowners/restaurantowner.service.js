"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwnerService = exports.updateRestaurantOwnerService = exports.insertRestaurantOwnerService = exports.getRestaurantOwnerByIdService = exports.restaurantOwnersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const restaurantOwnersService = async () => {
    return await db_1.db.query.restaurant_ownerTable.findMany();
};
exports.restaurantOwnersService = restaurantOwnersService;
const getRestaurantOwnerByIdService = async (id) => {
    return await db_1.db.query.restaurant_ownerTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.restaurant_owner_id, id)
    });
};
exports.getRestaurantOwnerByIdService = getRestaurantOwnerByIdService;
const insertRestaurantOwnerService = async (restaurant_owner) => {
    await db_1.db.insert(schema_1.restaurant_ownerTable).values(restaurant_owner);
    // .returning({id:restaurant_ownerTable.restaurant_owner_id}
    return "Restaurant owner created successfully ";
};
exports.insertRestaurantOwnerService = insertRestaurantOwnerService;
const updateRestaurantOwnerService = async (id, restaurant_owner) => {
    await db_1.db.update(schema_1.restaurant_ownerTable).set(restaurant_owner).where((0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.restaurant_owner_id, id));
    return "Restaurant owner updated successfully ";
};
exports.updateRestaurantOwnerService = updateRestaurantOwnerService;
const deleteRestaurantOwnerService = async (id) => {
    await db_1.db.delete(schema_1.restaurant_ownerTable).where((0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.restaurant_owner_id, id));
    return "Restaurant owner deleted successfully ";
};
exports.deleteRestaurantOwnerService = deleteRestaurantOwnerService;
