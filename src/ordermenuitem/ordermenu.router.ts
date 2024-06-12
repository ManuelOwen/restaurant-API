import {Hono} from 'hono'
import { getOrderMenuItemById, insertOrderMenuItem, listOrderMenuItems } from  './ordermenuitem.controller'
import { adminRoleAuth } from '../middlewares/bearAuth';

export const orderMenuItemRouter = new Hono();

//list order menu items
orderMenuItemRouter.get("/order_menu_items", adminRoleAuth, listOrderMenuItems);

//get order menu item by id
orderMenuItemRouter.get("/order_menu_items/:id",getOrderMenuItemById);

//insert order menu item
orderMenuItemRouter.post("/order_menu_items",insertOrderMenuItem);

//update order menu item
orderMenuItemRouter.put("/order_menu_items/:id",insertOrderMenuItem);

//delete order menu item
orderMenuItemRouter.delete("/order_menu_items/:id",adminRoleAuth,insertOrderMenuItem);