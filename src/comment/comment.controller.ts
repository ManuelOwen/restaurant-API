import {Context} from "hono";
import { commentService, getCommentService, deleteCommentService, createCommentService, updateCommentService,  } from "./comment.service";


export const listComments = async (c: Context) => {listComments
    try {
        //limit the number of comments to be returned

        const limit = Number(c.req.query('limit'))

        const data = await commentService(limit);
        if (data == null || data.length == 0) {
            return c.text("comment not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getComments = async (c:Context)=>{
    try{
        const data = await commentService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }
 //get comment by id
 export const getComment = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const comment = await getCommentService(id);
    if (comment == undefined) {
        return c.text("comment not found", 404);
    }
    return c.json(comment, 200);
}
//create comment
export const createComment = async (c: Context) => {
    try {
        const comment = await c.req.json();
        const createdcomment = await createCommentService(comment);


        if (!createdcomment) return c.text("comment not created", 404);
        return c.json({ msg: createdcomment }, 201);
        console.log("msg")

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//update comment
export const updateComment = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const comment = await c.req.json();
    try {
        // search for the comment
        const searchedcomment = await getCommentService(id);
        if (searchedcomment == undefined) return c.text("comment not found", 404);
        // get the data and update it
        const res = await updateCommentService(id, comment);
        // return a success message
        if (!res) return c.text("comment not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//delete comment
export const deleteComment = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the comment
        const comment = await getCommentService(id);
        if (comment == undefined) return c.text("comment not found", 404);
        //deleting the comment
        const res = await deleteCommentService(id);
        if (!res) return c.text("comment not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}