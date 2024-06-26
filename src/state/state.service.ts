import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TIstate, TSstate, stateTable } from "../drizzle/schema";




export const stateService = async (limit?: number): Promise<TSstate[]> => {
    if(limit){
        return await db.query.stateTable.findMany({limit:limit})
    }
    return await db.query.stateTable.findMany();
}

export const getStateService = async (id: number): Promise<TSstate |undefined > => {
    return await db.query.stateTable.findFirst({
        where: eq(stateTable.id, id)
    })
}



export const createStateService = async (state:TIstate)=> {
    await db.insert(stateTable).values(state)
    return "state created successfully";
 }
    export const updateStateService = async (id:number, state:TIstate)=>{
        await db.update(stateTable).set(state).where(eq(stateTable.id, id))
        return "state updated successfully";
    }
    export const deleteStateService = async (id:number)=>{
        await db.delete(stateTable).where(eq(stateTable.id, id))
        return "state deleted successfully";
    }