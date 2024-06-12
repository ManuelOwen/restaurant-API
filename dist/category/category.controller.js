"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = exports.listCategories = void 0;
const category_service_1 = require("./category.service");
const listCategories = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, category_service_1.categoryService)(limit);
        if (data == null || data.length == 0) {
            return c.text("d not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listCategories = listCategories;
const getCategories = async (c) => {
    try {
        const data = await (0, category_service_1.categoryService)();
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getCategories = getCategories;
const getCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const d = await (0, category_service_1.getCategoryService)(id);
    if (d == undefined) {
        return c.text("d not found", 404);
    }
    return c.json(d, 200);
};
exports.getCategory = getCategory;
//create d
const createCategory = async (c) => {
    try {
        const category = await c.req.json();
        const createdcategory = await (0, category_service_1.createCategoryService)(category);
        if (!createdcategory)
            return c.text("category not created", 404);
        return c.json({ msg: createdcategory }, 201);
        console.log("msg");
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCategory = createCategory;
//update d
const updateCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const d = await c.req.json();
    try {
        // search for the d
        const searchedd = await (0, category_service_1.getCategoryService)(id);
        if (searchedd == undefined)
            return c.text("category not found", 404);
        // get the data and update it
        const res = await (0, category_service_1.updateCategoryService)(id, d);
        // return a success message
        if (!res)
            return c.text("category not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCategory = updateCategory;
//delete category
const deleteCategory = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        const category = await (0, category_service_1.getCategoryService)(id);
        if (category == undefined)
            return c.text("category not found", 404);
        const res = await (0, category_service_1.deleteCategoryService)(id);
        if (!res)
            return c.text("category not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCategory = deleteCategory;
