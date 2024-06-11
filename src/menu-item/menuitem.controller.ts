import {Context} from "hono";
import { menu_itemService, getMenu_itemService, createMenu_itemService, updateMenu_itemService, deleteMenu_itemService } from "./menuitem.service";


export const listMenu_items = async (c: Context) => {
    try {
        //limit the number of ds to be returned

        const limit = Number(c.req.query('limit'))

        const data = await menu_itemService(limit);
        if (data == null || data.length == 0) {
            return c.text("menu-items not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getMenu_items = async (c:Context)=>{
    try{
        const data = await menu_itemService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }

 export const getMenu_item = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const d = await getMenu_itemService(id);
    if (d == undefined) {
        return c.text("d not found", 404);
    }
    return c.json(d, 200);
}
//create d
export const createMenu_item = async (c: Context) => {
    try {
        const menu_item = await c.req.json();
        const createdmenu_item = await createMenu_itemService(menu_item);


        if (!createdmenu_item) return c.text("menu_item not created", 404);
        return c.json({ msg: createdmenu_item }, 201);
        console.log("msg")

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//update menuitem
export const updateMenu_item = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const d = await c.req.json();
    try {
        // search for the d
        const searchedd = await updateMenu_itemService(id, d); // Pass the id and d arguments to the updateMenu_itemService function
        if (searchedd == undefined) return c.text("menu_item not found", 404);
        // get the data and update it
        const res = await updateMenu_itemService(id, d); // Pass the id and d arguments to the updateMenu_itemService function
        // return a success message
        if (!res) return c.text("menu_item not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//delete menu_item
export const deleteMenu_item = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
     
        const deleteMenu_item = await deleteMenu_itemService(id);
        if (deleteMenu_item == undefined) return c.text("menu_item not found", 404);
    
        const res = await deleteMenu_itemService(id);
        if (!res) return c.text("menu_item not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}