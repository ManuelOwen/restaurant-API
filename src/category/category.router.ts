import {Hono} from "hono";
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from "./category.controller";

export const categoryRouter = new Hono();

// GET ALL categories
categoryRouter.get("/categories", getCategories);
//grt a single category
categoryRouter.get("/categories/:id", getCategory);
//create category
categoryRouter.post("/categories", createCategory)
//update category
categoryRouter.put("/categories/:id", updateCategory)
//delete category
categoryRouter.delete("/categories/:id", deleteCategory)
