
import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TIorder, TSorder, orderTable } from "../drizzle/schema";

export const ordersService = async ():Promise<TSorder[] | null>=> {
    return await db.query.orderTable.findMany();    
}

export const getOrderByIdService = async (id:number):Promise<TIorder | undefined> => {
    return await db.query.orderTable.findFirst({
       where: eq(orderTable, id)
    })
}

export const insertOrderService = async(order:TIorder) => {
     await db.insert(orderTable).values(order)
    // .returning({id:orderTable.order_id}
        return "Order created successfully ";
}

export const updateOrderService = async(id:number,order:TIorder) => {
    await db.update(orderTable).set(order).where(eq(orderTable,id));
    return "Order updated successfully "
}

export const deleteOrderService = async(id:number) => {
    await db.delete(orderTable).where(eq(orderTable,id));
    return "Order deleted successfully "
}
