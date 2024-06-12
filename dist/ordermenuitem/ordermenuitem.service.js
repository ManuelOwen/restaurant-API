"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItemsService = exports.updateOrderMenuItemsService = exports.insertOrderMenuItemsService = exports.getOrderMenuItemsByIdService = exports.orderMenuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const orderMenuItemsService = async () => {
    return await db_1.db.query.order_menu_itemTable.findMany();
};
exports.orderMenuItemsService = orderMenuItemsService;
const getOrderMenuItemsByIdService = async (id) => {
    return await db_1.db.query.order_menu_itemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable.id, id)
    });
};
exports.getOrderMenuItemsByIdService = getOrderMenuItemsByIdService;
const insertOrderMenuItemsService = async (order_menu) => {
    await db_1.db.insert(schema_1.order_menu_itemTable).values(order_menu);
    // .returning({id:order_menu_itemTable.order_menu_id}
    return "Order menu item created successfully ";
};
exports.insertOrderMenuItemsService = insertOrderMenuItemsService;
const updateOrderMenuItemsService = async (id, order_menu) => {
    await db_1.db.update(schema_1.order_menu_itemTable).set(order_menu).where((0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable.id, id));
    return "Order menu item updated successfully ";
};
exports.updateOrderMenuItemsService = updateOrderMenuItemsService;
const deleteOrderMenuItemsService = async (id) => {
    await db_1.db.delete(schema_1.order_menu_itemTable).where((0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable, id));
    return "Order menu item deleted successfully ";
};
exports.deleteOrderMenuItemsService = deleteOrderMenuItemsService;
