"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const ordermenuitem_controller_1 = require("./ordermenuitem.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.orderMenuItemRouter = new hono_1.Hono();
//list order menu items
exports.orderMenuItemRouter.get("/order_menu_items", bearAuth_1.adminRoleAuth, ordermenuitem_controller_1.listOrderMenuItems);
//get order menu item by id
exports.orderMenuItemRouter.get("/order_menu_items/:id", ordermenuitem_controller_1.getOrderMenuItemById);
//insert order menu item
exports.orderMenuItemRouter.post("/order_menu_items", ordermenuitem_controller_1.insertOrderMenuItem);
//update order menu item
exports.orderMenuItemRouter.put("/order_menu_items/:id", ordermenuitem_controller_1.insertOrderMenuItem);
//delete order menu item
exports.orderMenuItemRouter.delete("/order_menu_items/:id", bearAuth_1.adminRoleAuth, ordermenuitem_controller_1.insertOrderMenuItem);
