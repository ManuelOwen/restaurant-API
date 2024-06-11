import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TIrestaurant_owner, TSrestaurant_owner, restaurant_ownerTable } from "../drizzle/schema";

export const restaurantOwnersService = async ():Promise<TSrestaurant_owner[] | null>=> {
    return await db.query.restaurant_ownerTable.findMany();    
}

export const getRestaurantOwnerByIdService = async (id:number):Promise<TIrestaurant_owner | undefined> => {
    return await db.query.restaurant_ownerTable.findFirst({
       where: eq(restaurant_ownerTable.restaurant_owner_id, id)
    })
}

export const insertRestaurantOwnerService = async(restaurant_owner:TIrestaurant_owner) => {
     await db.insert(restaurant_ownerTable).values(restaurant_owner)
    // .returning({id:restaurant_ownerTable.restaurant_owner_id}
        return "Restaurant owner created successfully ";
}

export const updateRestaurantOwnerService = async(id:number,restaurant_owner:TIrestaurant_owner) => {
    await db.update(restaurant_ownerTable).set(restaurant_owner).where(eq(restaurant_ownerTable.restaurant_owner_id,id));
    return "Restaurant owner updated successfully "
}

export const deleteRestaurantOwnerService = async(id:number) => {
    await db.delete(restaurant_ownerTable).where(eq(restaurant_ownerTable.restaurant_owner_id,id));
    return "Restaurant owner deleted successfully "
}