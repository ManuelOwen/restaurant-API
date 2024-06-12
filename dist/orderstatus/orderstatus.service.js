"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.insertOrderStatusService = exports.getOrderStatusByIdService = exports.orderStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const orderStatusService = async () => {
    return await db_1.db.query.order_statusTable.findMany();
};
exports.orderStatusService = orderStatusService;
const getOrderStatusByIdService = async (id) => {
    return await db_1.db.query.order_statusTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_statusTable, id)
    });
};
exports.getOrderStatusByIdService = getOrderStatusByIdService;
const insertOrderStatusService = async (order_status) => {
    await db_1.db.insert(schema_1.order_statusTable).values(order_status);
    // .returning({id:order_statusTable.order_status_id}
    return "Order status created successfully ";
};
exports.insertOrderStatusService = insertOrderStatusService;
const updateOrderStatusService = async (id, order_status) => {
    await db_1.db.update(schema_1.order_statusTable).set(order_status).where((0, drizzle_orm_1.eq)(schema_1.order_statusTable, id));
    return "Order status updated successfully ";
};
exports.updateOrderStatusService = updateOrderStatusService;
const deleteOrderStatusService = async (id) => {
    await db_1.db.delete(schema_1.order_statusTable).where((0, drizzle_orm_1.eq)(schema_1.order_statusTable, id));
    return "Order status deleted successfully ";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
