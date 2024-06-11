import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TIcategory, TScategory, categoryTable } from "../drizzle/schema";

export const categoryService = async (limit?: number): Promise<TIcategory[]> => {
    if(limit){
        return await db.query.categoryTable.findMany({limit:limit})
    }
    return await db.query.categoryTable.findMany();
}

export const getCategoryService = async (id: number): Promise<TIcategory | undefined> => {
    return await db.query.categoryTable.findFirst({
        where: eq(categoryTable.id, id)
    })
}



 export const createCategoryService = async (user:TIcategory)=> {
    await db.insert(categoryTable).values(user)
    return "category created successfully";
 }
    export const updateCategoryService = async (id:number, user:TIcategory)=>{
        await db.update(categoryTable).set(user).where(eq(categoryTable.id, id))
        return "category updated successfully";
    }
    export const deleteCategoryService = async (id:number)=>{
        await db.delete(categoryTable).where(eq(categoryTable.id, id))
        return "category deleted successfully";
    }