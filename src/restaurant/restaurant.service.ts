import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TIrestaurant, TSrestaurant, restaurantTable } from "../drizzle/schema";


export const restaurantsService = async ():Promise<TSrestaurant[] | null>=> {
    return await db.query.restaurantTable.findMany();    
}

export const getRestaurantByIdService = async (id:number):Promise<TSrestaurant | undefined> => {
    return await db.query.restaurantTable.findFirst({
       where: eq(restaurantTable, id)
    })
}

export const insertRestaurantService = async(restaurant:TIrestaurant) => {
     await db.insert(restaurantTable).values(restaurant)
    // .returning({id:restaurantTable.restaurant_id}
        return "Restaurant created successfully ";
}

export const updateRestaurantService = async(id:number,restaurant:TIrestaurant) => {
    await db.update(restaurantTable).set(restaurant).where(eq(restaurantTable,id));
    return "Restaurant updated successfully "
}

export const deleteRestaurantService = async(id:number) => {
    await db.delete(restaurantTable).where(eq(restaurantTable,id));
    return "Restaurant deleted successfully "
}