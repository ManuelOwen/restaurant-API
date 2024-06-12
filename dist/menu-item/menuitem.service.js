"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu_itemService = exports.updateMenu_itemService = exports.createMenu_itemService = exports.getMenu_itemService = exports.menu_itemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const menu_itemService = async (limit) => {
    if (limit) {
        return await db_1.db.query.menuItemTable.findMany({ limit: limit });
    }
    return await db_1.db.query.menuItemTable.findMany();
};
exports.menu_itemService = menu_itemService;
const getMenu_itemService = async (id) => {
    return await db_1.db.query.menuItemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menuItemTable.ID, id)
    });
};
exports.getMenu_itemService = getMenu_itemService;
const createMenu_itemService = async (user) => {
    await db_1.db.insert(schema_1.menuItemTable).values(user);
    return "category created successfully";
};
exports.createMenu_itemService = createMenu_itemService;
const updateMenu_itemService = async (id, user) => {
    await db_1.db.update(schema_1.menuItemTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.menuItemTable.ID, id));
    return "category updated successfully";
};
exports.updateMenu_itemService = updateMenu_itemService;
const deleteMenu_itemService = async (id) => {
    await db_1.db.delete(schema_1.menuItemTable).where((0, drizzle_orm_1.eq)(schema_1.menuItemTable.ID, id));
    return "category deleted successfully";
};
exports.deleteMenu_itemService = deleteMenu_itemService;
