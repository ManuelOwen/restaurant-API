import {Hono} from "hono"
import { deleteOrder, getOrderById, insertOrder, listOrders, updateOrder } from "./order.controller";
import { adminRoleAuth } from "../middlewares/bearAuth";

export const orderRouter = new Hono();

//get all orders
orderRouter.get('/orders',adminRoleAuth, listOrders)

//get order by id
orderRouter.get('/orders/:id', getOrderById)

//insert order
orderRouter.post('/orders', insertOrder)

//update order
orderRouter.put('/orders/:id', updateOrder)

//delete order
orderRouter.delete('/orders/:id',adminRoleAuth, deleteOrder)