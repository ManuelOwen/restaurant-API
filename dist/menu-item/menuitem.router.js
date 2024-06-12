"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menuitem_controller_1 = require("./menuitem.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.menuItemRouter = new hono_1.Hono();
// GET ALL menu_items
exports.menuItemRouter.get("/menuitems", bearAuth_1.adminRoleAuth, menuitem_controller_1.getMenu_items);
//grt a single menu_item
exports.menuItemRouter.get("/menuitems/:id", menuitem_controller_1.getMenu_item);
//create menu_item
exports.menuItemRouter.post("/menuitems", menuitem_controller_1.createMenu_item);
//update menu_item
exports.menuItemRouter.put("/menuitems/:id", menuitem_controller_1.updateMenu_item);
//delete menu_item
exports.menuItemRouter.delete("/menuitems/:id", bearAuth_1.adminRoleAuth, menuitem_controller_1.deleteMenu_item);
