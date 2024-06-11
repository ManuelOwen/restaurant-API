import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { TIcomment, TScomment, commentTable } from "../drizzle/schema";

export const commentService = async (limit?: number): Promise<TScomment[]> => {
    if(limit){
        return await db.query.commentTable.findMany({limit:limit})
    }
    return await db.query.commentTable.findMany();
}

export const getCommentService = async (id: number): Promise<TScomment | undefined> => {
    return await db.query.commentTable.findFirst({
        where: eq(commentTable.id, id)
    })
}



 export const createCommentService = async (user:TIcomment)=> {
    await db.insert(commentTable).values(user)
    return "User created successfully";
 }
    export const updateCommentService = async (id:number, user:TIcomment)=>{
        await db.update(commentTable).set(user).where(eq(commentTable.id, id))
        return "User updated successfully";
    }
    export const deleteCommentService = async (id:number)=>{
        await db.delete(commentTable).where(eq(commentTable.id, id))
        return "User deleted successfully";
    }