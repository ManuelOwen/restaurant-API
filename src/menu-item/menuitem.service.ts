import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TImenu_item, TSmenu_item, menuItemTable } from "../drizzle/schema";

export const menu_itemService = async (limit?: number): Promise<TImenu_item[]> => {
    if(limit){
        return await db.query.menuItemTable.findMany({limit:limit})
    }
    return await db.query.menuItemTable.findMany();
}

export const getMenu_itemService= async (id: number): Promise<TImenu_item | undefined> => {
    return await db.query.menuItemTable.findFirst({
        where: eq(menuItemTable.ID, id)
    })
}



 export const createMenu_itemService = async (user:TImenu_item)=> {
    await db.insert(menuItemTable).values(user)
    return "category created successfully";
 }
    export const updateMenu_itemService = async (id:number, user:TImenu_item)=>{
        await db.update(menuItemTable).set(user).where(eq(menuItemTable.ID, id))
        return "category updated successfully";
    }
    export const deleteMenu_itemService= async (id:number)=>{
        await db.delete(menuItemTable).where(eq(menuItemTable.ID, id))
        return "category deleted successfully";
    }