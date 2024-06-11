import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TIdriver, TSdriver, driverTable } from "../drizzle/schema";


export const driversService = async ():Promise<TSdriver[] | null>=> {
    return await db.query.driverTable.findMany();    
}

export const getDriverByIdService = async (id:number):Promise<TSdriver | undefined> => {
    return await db.query.driverTable.findFirst({
       where: eq(driverTable.id, id)
    })
}

export const insertDriverService = async(driver:TIdriver) => {
     await db.insert(driverTable).values(driver)
 
        return "Driver created successfully ";
}

export const updateDriverService = async(id:number,driver:TIdriver) => {
    await db.update(driverTable).set(driver).where(eq(driverTable,id));
    return "Driver updated successfully "
}

export const deleteDriverService = async(id:number) => {
    await db.delete(driverTable).where(eq(driverTable,id));
    return "Driver deleted successfully "
}