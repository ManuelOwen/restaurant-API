"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.categoryRouter = new hono_1.Hono();
// GET ALL categories
exports.categoryRouter.get("/categories", bearAuth_1.adminRoleAuth, category_controller_1.getCategories);
//grt a single category
exports.categoryRouter.get("/categories/:id", category_controller_1.getCategory);
//create category
exports.categoryRouter.post("/categories", category_controller_1.createCategory);
//update category
exports.categoryRouter.put("/categories/:id", category_controller_1.updateCategory);
//delete category
exports.categoryRouter.delete("/categories/:id", bearAuth_1.adminRoleAuth, category_controller_1.deleteCategory);
