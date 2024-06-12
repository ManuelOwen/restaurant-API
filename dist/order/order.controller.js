"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.insertOrder = exports.getOrderById = exports.listOrders = void 0;
const order_service_1 = require("./order.service");
//list orders
const listOrders = async (c) => {
    try {
        const orders = await (0, order_service_1.ordersService)();
        if (orders == null)
            return c.text("No orders found ", 404);
        return c.json(orders, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listOrders = listOrders;
//get order by id
const getOrderById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order
        const order = await (0, order_service_1.getOrderByIdService)(id);
        if (order == undefined)
            return c.text("Order not found ", 404);
        return c.json(order, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getOrderById = getOrderById;
//insert order
const insertOrder = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const order = await c.req.json();
        const createdOrder = await (0, order_service_1.insertOrderService)(order);
        if (!createdOrder) {
            return c.text("Order not created ", 400);
        }
        return c.json(order, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertOrder = insertOrder;
//update order
const updateOrder = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const order = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order
        const existingOrder = await (0, order_service_1.getOrderByIdService)(id);
        if (existingOrder == undefined)
            return c.text("Order not found ", 404);
        //update order
        const updatedOrder = await (0, order_service_1.updateOrderService)(id, order);
        return c.json({ msg: updatedOrder }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateOrder = updateOrder;
//delete order
const deleteOrder = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order
        const existingOrder = await (0, order_service_1.getOrderByIdService)(id);
        if (existingOrder == undefined)
            return c.text("Order not found ", 404);
        //delete order
        const deletedOrder = await (0, order_service_1.deleteOrderService)(id);
        return c.json({ msg: deletedOrder }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteOrder = deleteOrder;
