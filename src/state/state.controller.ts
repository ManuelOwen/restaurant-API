import { Context } from "hono";
import { stateService, getStateService, createStateService, updateStateService, deleteStateService,  } from "./state.service";
import { text } from "stream/consumers";

export const listUsers = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await stateService(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//get all states
    export const getStates = async (c:Context)=>{
        try{
            const data = await stateService(); // 
            return c.json(data)
        }catch(error:any){
            return c.json({message:error.message}, 500)
        }
    
    }
    //get state by id
    export const getState = async (c: Context) => {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);
    
        const state = await getStateService(id);
        if (state == undefined) {
            return c.text("State not found", 404);
            console.log(text)

        }
        return c.json(state, 200);
    }
    //create state
    export const createState = async (c: Context) => {
        try {
            const state = await c.req.json();
            const createdState = await createStateService(state);
    
    
            if (!createdState) return c.text("State not created", 404);
            return c.json({ msg: createdState }, 201);
            
    
        } catch (error: any) {
            return c.json({ error: error?.message }, 400)
        }
    }
    //update state
    export const updateState = async (c: Context) => {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);
        const state = await c.req.json();
        const updatedState = await updateStateService(id,state);
        if (!updatedState) return c.text("State not updated", 404);
        return c.json({ msg: updatedState }, 201);
    }
    //delete state
    export const deleteState = async (c: Context) => {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);
        const deletedState = await deleteStateService(id);
        if (!deletedState) return c.text("State not deleted", 404);
        return c.json({ msg: deletedState }, 201);
    }
    