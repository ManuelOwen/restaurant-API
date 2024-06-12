"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderService = exports.updateOrderService = exports.insertOrderService = exports.getOrderByIdService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const ordersService = async () => {
    return await db_1.db.query.orderTable.findMany();
};
exports.ordersService = ordersService;
const getOrderByIdService = async (id) => {
    return await db_1.db.query.orderTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orderTable, id)
    });
};
exports.getOrderByIdService = getOrderByIdService;
const insertOrderService = async (order) => {
    await db_1.db.insert(schema_1.orderTable).values(order);
    // .returning({id:orderTable.order_id}
    return "Order created successfully ";
};
exports.insertOrderService = insertOrderService;
const updateOrderService = async (id, order) => {
    await db_1.db.update(schema_1.orderTable).set(order).where((0, drizzle_orm_1.eq)(schema_1.orderTable, id));
    return "Order updated successfully ";
};
exports.updateOrderService = updateOrderService;
const deleteOrderService = async (id) => {
    await db_1.db.delete(schema_1.orderTable).where((0, drizzle_orm_1.eq)(schema_1.orderTable, id));
    return "Order deleted successfully ";
};
exports.deleteOrderService = deleteOrderService;
