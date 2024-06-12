"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu_item = exports.updateMenu_item = exports.createMenu_item = exports.getMenu_item = exports.getMenu_items = exports.listMenu_items = void 0;
const menuitem_service_1 = require("./menuitem.service");
const listMenu_items = async (c) => {
    try {
        //limit the number of ds to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, menuitem_service_1.menu_itemService)(limit);
        if (data == null || data.length == 0) {
            return c.text("menu-items not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listMenu_items = listMenu_items;
const getMenu_items = async (c) => {
    try {
        const data = await (0, menuitem_service_1.menu_itemService)();
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getMenu_items = getMenu_items;
const getMenu_item = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const d = await (0, menuitem_service_1.getMenu_itemService)(id);
    if (d == undefined) {
        return c.text("d not found", 404);
    }
    return c.json(d, 200);
};
exports.getMenu_item = getMenu_item;
//create d
const createMenu_item = async (c) => {
    try {
        const menu_item = await c.req.json();
        const createdmenu_item = await (0, menuitem_service_1.createMenu_itemService)(menu_item);
        if (!createdmenu_item)
            return c.text("menu_item not created", 404);
        return c.json({ msg: createdmenu_item }, 201);
        console.log("msg");
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createMenu_item = createMenu_item;
//update menuitem
const updateMenu_item = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const d = await c.req.json();
    try {
        // search for the d
        const searchedd = await (0, menuitem_service_1.updateMenu_itemService)(id, d); // Pass the id and d arguments to the updateMenu_itemService function
        if (searchedd == undefined)
            return c.text("menu_item not found", 404);
        // get the data and update it
        const res = await (0, menuitem_service_1.updateMenu_itemService)(id, d); // Pass the id and d arguments to the updateMenu_itemService function
        // return a success message
        if (!res)
            return c.text("menu_item not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateMenu_item = updateMenu_item;
//delete menu_item
const deleteMenu_item = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        const deleteMenu_item = await (0, menuitem_service_1.deleteMenu_itemService)(id);
        if (deleteMenu_item == undefined)
            return c.text("menu_item not found", 404);
        const res = await (0, menuitem_service_1.deleteMenu_itemService)(id);
        if (!res)
            return c.text("menu_item not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteMenu_item = deleteMenu_item;
