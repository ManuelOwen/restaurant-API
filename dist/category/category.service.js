"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.categoryService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const categoryService = async (limit) => {
    if (limit) {
        return await db_1.db.query.categoryTable.findMany({ limit: limit });
    }
    return await db_1.db.query.categoryTable.findMany();
};
exports.categoryService = categoryService;
const getCategoryService = async (id) => {
    return await db_1.db.query.categoryTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id)
    });
};
exports.getCategoryService = getCategoryService;
const createCategoryService = async (user) => {
    await db_1.db.insert(schema_1.categoryTable).values(user);
    return "category created successfully";
};
exports.createCategoryService = createCategoryService;
const updateCategoryService = async (id, user) => {
    await db_1.db.update(schema_1.categoryTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category updated successfully";
};
exports.updateCategoryService = updateCategoryService;
const deleteCategoryService = async (id) => {
    await db_1.db.delete(schema_1.categoryTable).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "category deleted successfully";
};
exports.deleteCategoryService = deleteCategoryService;
