"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusRouter = void 0;
const hono_1 = require("hono");
const orderstatus_controller_1 = require("./orderstatus.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.orderStatusRouter = new hono_1.Hono();
//get all orders_status
exports.orderStatusRouter.get('/orders-status', bearAuth_1.adminRoleAuth, orderstatus_controller_1.listOrdersStatus);
//get orderstatus by id
exports.orderStatusRouter.get('/orders-status/:id', orderstatus_controller_1.getOrderStatusById);
//insert orderstatus
exports.orderStatusRouter.post('/orders-status', orderstatus_controller_1.insertOrderStatus);
//update orderstatus
exports.orderStatusRouter.put('/orders-status/:id', orderstatus_controller_1.updateOrderStatus);
//delete orderstatus
exports.orderStatusRouter.delete('/orders-status/:id', bearAuth_1.adminRoleAuth, orderstatus_controller_1.deleteOrderStatus);
