"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const hono_1 = require("hono");
const order_controller_1 = require("./order.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.orderRouter = new hono_1.Hono();
//get all orders
exports.orderRouter.get('/orders', bearAuth_1.adminRoleAuth, order_controller_1.listOrders);
//get order by id
exports.orderRouter.get('/orders/:id', order_controller_1.getOrderById);
//insert order
exports.orderRouter.post('/orders', order_controller_1.insertOrder);
//update order
exports.orderRouter.put('/orders/:id', order_controller_1.updateOrder);
//delete order
exports.orderRouter.delete('/orders/:id', bearAuth_1.adminRoleAuth, order_controller_1.deleteOrder);
