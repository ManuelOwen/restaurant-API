import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TIorder_status, TSorder_status, order_statusTable } from "../drizzle/schema";

export const orderStatusService = async ():Promise<TSorder_status[] | null>=> {
    return await db.query.order_statusTable.findMany();    
}

export const getOrderStatusByIdService = async (id:number):Promise<TIorder_status | undefined> => {
    return await db.query.order_statusTable.findFirst({
       where: eq(order_statusTable, id)
    })
}

export const insertOrderStatusService = async(order_status:TIorder_status) => {
     await db.insert(order_statusTable).values(order_status)
    // .returning({id:order_statusTable.order_status_id}
        return "Order status created successfully ";
}

export const updateOrderStatusService = async(id:number,order_status:TIorder_status) => {
    await db.update(order_statusTable).set(order_status).where(eq(order_statusTable,id));
    return "Order status updated successfully "
}

export const deleteOrderStatusService = async(id:number) => {
    await db.delete(order_statusTable).where(eq(order_statusTable,id));
    return "Order status deleted successfully "
}