import {Context} from "hono";
import { categoryService, getCategoryService, createCategoryService, updateCategoryService, deleteCategoryService } from "./category.service";


export const listCategories = async (c: Context) => {
    try {
        //limit the number of ds to be returned

        const limit = Number(c.req.query('limit'))

        const data = await categoryService(limit);
        if (data == null || data.length == 0) {
            return c.text("d not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getCategories = async (c:Context)=>{
    try{
        const data = await categoryService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }

 export const getCategory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const d = await getCategoryService(id);
    if (d == undefined) {
        return c.text("d not found", 404);
    }
    return c.json(d, 200);
}
//create d
export const createCategory = async (c: Context) => {
    try {
        const category = await c.req.json();
        const createdcategory = await createCategoryService(category);


        if (!createdcategory) return c.text("category not created", 404);
        return c.json({ msg: createdcategory }, 201);
        console.log("msg")

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//update d
export const updateCategory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const d = await c.req.json();
    try {
        // search for the d
        const searchedd = await getCategoryService(id);
        if (searchedd == undefined) return c.text("category not found", 404);
        // get the data and update it
        const res = await updateCategoryService(id, d);
        // return a success message
        if (!res) return c.text("category not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//delete category
export const deleteCategory = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
     
        const category = await getCategoryService(id);
        if (category == undefined) return c.text("category not found", 404);
    
        const res = await deleteCategoryService(id);
        if (!res) return c.text("category not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}