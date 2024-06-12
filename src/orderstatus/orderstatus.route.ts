import {Hono} from "hono"
import { deleteOrderStatus, getOrderStatusById, insertOrderStatus, listOrdersStatus, updateOrderStatus } from "./orderstatus.controller";
import { adminRoleAuth } from "../middlewares/bearAuth";


export const orderStatusRouter = new Hono();

//get all orders_status
orderStatusRouter.get('/orders-status',adminRoleAuth, listOrdersStatus);

//get orderstatus by id
orderStatusRouter.get('/orders-status/:id', getOrderStatusById);

//insert orderstatus
orderStatusRouter.post('/orders-status', insertOrderStatus);
 
//update orderstatus
orderStatusRouter.put('/orders-status/:id', updateOrderStatus);

//delete orderstatus
orderStatusRouter.delete('/orders-status/:id',adminRoleAuth, deleteOrderStatus);