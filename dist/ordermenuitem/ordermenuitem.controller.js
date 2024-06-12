"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.insertOrderMenuItem = exports.getOrderMenuItemById = exports.listOrderMenuItems = void 0;
const ordermenuitem_service_1 = require("./ordermenuitem.service");
//list order menu items
const listOrderMenuItems = async (c) => {
    try {
        const order_menu_items = await (0, ordermenuitem_service_1.orderMenuItemsService)();
        if (order_menu_items == null)
            return c.text("No order menu items found ", 404);
        return c.json(order_menu_items, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listOrderMenuItems = listOrderMenuItems;
//get order menu item by id
const getOrderMenuItemById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order menu item
        const order_menu_item = await (0, ordermenuitem_service_1.getOrderMenuItemsByIdService)(id);
        if (order_menu_item == undefined)
            return c.text("Order menu item not found ", 404);
        return c.json(order_menu_item, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getOrderMenuItemById = getOrderMenuItemById;
//insert order menu item
const insertOrderMenuItem = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const order_menu_item = await c.req.json();
        const createdOrderMenuItem = await (0, ordermenuitem_service_1.insertOrderMenuItemsService)(order_menu_item);
        if (!createdOrderMenuItem) {
            return c.text("Order menu item not created ", 400);
        }
        return c.json(order_menu_item, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertOrderMenuItem = insertOrderMenuItem;
//update order menu item
const updateOrderMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    const order_menu_item = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order menu item
        const existingOrderMenuItem = await (0, ordermenuitem_service_1.getOrderMenuItemsByIdService)(id);
        if (existingOrderMenuItem == undefined)
            return c.text("Order menu item not found ", 404);
        //update order menu item
        const updatedOrderMenuItem = await (0, ordermenuitem_service_1.updateOrderMenuItemsService)(id, order_menu_item);
        return c.json({ msg: updatedOrderMenuItem }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateOrderMenuItem = updateOrderMenuItem;
//delete order menu item
const deleteOrderMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for order menu item
        const existingOrderMenuItem = await (0, ordermenuitem_service_1.getOrderMenuItemsByIdService)(id);
        if (existingOrderMenuItem == undefined)
            return c.text("Order menu item not found ", 404);
        //delete order menu item
        const deletedOrderMenuItem = await (0, ordermenuitem_service_1.deleteOrderMenuItemsService)(id);
        return c.json({ msg: deletedOrderMenuItem }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
