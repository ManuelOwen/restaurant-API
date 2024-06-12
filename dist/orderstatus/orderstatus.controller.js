"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatus = exports.updateOrderStatus = exports.insertOrderStatus = exports.getOrderStatusById = exports.listOrdersStatus = void 0;
const orderstatus_service_1 = require("./orderstatus.service");
//list orders
const listOrdersStatus = async (c) => {
    try {
        const orders = await (0, orderstatus_service_1.orderStatusService)();
        if (orders == null)
            return c.text("No orders found ", 404);
        return c.json(orders, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listOrdersStatus = listOrdersStatus;
//get order by id
const getOrderStatusById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order
        const order = await (0, orderstatus_service_1.getOrderStatusByIdService)(id);
        if (order == undefined)
            return c.text("Order not found ", 404);
        return c.json(order, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getOrderStatusById = getOrderStatusById;
//insert order
const insertOrderStatus = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const order = await c.req.json();
        const createdOrder = await (0, orderstatus_service_1.insertOrderStatusService)(order);
        if (!createdOrder) {
            return c.text("Order not created ", 400);
        }
        return c.json(order, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertOrderStatus = insertOrderStatus;
//update order
const updateOrderStatus = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const order = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order
        const existingOrder = await (0, orderstatus_service_1.getOrderStatusByIdService)(id);
        if (existingOrder == undefined)
            return c.text("Order not found ", 404);
        //update order
        const updatedOrder = await (0, orderstatus_service_1.updateOrderStatusService)(id, order);
        return c.json({ msg: updatedOrder }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateOrderStatus = updateOrderStatus;
//delete order
const deleteOrderStatus = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const deletedOrder = await (0, orderstatus_service_1.deleteOrderStatusService)(id);
        return c.json({ msg: deletedOrder }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteOrderStatus = deleteOrderStatus;
