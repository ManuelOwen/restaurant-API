import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TIcity, TScity, cityTable } from "../drizzle/schema";

export const cityService = async (limit?: number): Promise<TIcity[]> => {
    if(limit){
        return await db.query.cityTable.findMany({limit:limit})
    }
    return await db.query.cityTable.findMany();
}

export const getCityService = async (id: number): Promise<TIcity | undefined> => {
    return await db.query.cityTable.findFirst({
        where: eq(cityTable.id, id)
    })
}



 export const createCityService = async (user:TIcity)=> {
    await db.insert(cityTable).values(user)
    return "city created successfully";
 }
    export const updateCityService = async (id:number, user:TIcity)=>{
        await db.update(cityTable).set(user).where(eq(cityTable.id, id))
        return "city updated successfully";
    }
    export const deleteCityService = async (id:number)=>{
        await db.delete(cityTable).where(eq(cityTable.id, id))
        return "city deleted successfully";
    }