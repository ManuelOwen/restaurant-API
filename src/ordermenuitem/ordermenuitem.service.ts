import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TSorder_menu_item, TIorder_menu_item, order_menu_itemTable } from "../drizzle/schema";

export const orderMenuItemsService = async ():Promise<TSorder_menu_item[] | null>=> {
    return await db.query.order_menu_itemTable.findMany();    
}

export const getOrderMenuItemsByIdService = async (id:number):Promise<TIorder_menu_item | undefined> => {
    return await db.query.order_menu_itemTable.findFirst({
       where: eq(order_menu_itemTable.id, id)
    })
}

export const insertOrderMenuItemsService = async(order_menu:TIorder_menu_item) => {
     await db.insert(order_menu_itemTable).values(order_menu)
    // .returning({id:order_menu_itemTable.order_menu_id}
        return "Order menu item created successfully ";
}

export const updateOrderMenuItemsService = async(id:number,order_menu:TIorder_menu_item) => {
    await db.update(order_menu_itemTable).set(order_menu).where(eq(order_menu_itemTable.id,id));
    return "Order menu item updated successfully "
}

export const deleteOrderMenuItemsService = async(id:number) => {
    await db.delete(order_menu_itemTable).where(eq(order_menu_itemTable,id));
    return "Order menu item deleted successfully "
}