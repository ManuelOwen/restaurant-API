import {Hono} from "hono";
import {getMenu_items, getMenu_item, createMenu_item, updateMenu_item, deleteMenu_item } from "./menuitem.controller";
import { adminRoleAuth } from "../middlewares/bearAuth";

export const menuItemRouter = new Hono();

// GET ALL menu_items
menuItemRouter.get("/menuitems",adminRoleAuth, getMenu_items);

//grt a single menu_item
menuItemRouter.get("/menuitems/:id", getMenu_item);

//create menu_item
menuItemRouter.post("/menuitems", createMenu_item)

//update menu_item
menuItemRouter.put("/menuitems/:id", updateMenu_item)

//delete menu_item
 menuItemRouter.delete("/menuitems/:id",adminRoleAuth, deleteMenu_item)
 