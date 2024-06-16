import {Context} from "hono";
import { usersService, getUserService, createUserService, updateUserService, deleteUserService,  } from "./user.service";
import { sendRegistrationEmail } from "../helperfunction/helperfunction";


export const listUsers = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await usersService(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getUsers = async (c:Context)=>{
    try{
        const data = await usersService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }
 //get user by id
 export const getUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await getUserService(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
}
//create user
export const createUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const createdUser = await createUserService(user);


        if (!createdUser){ return c.text("User not created", 404);
        }else{
            const userEmail = user.email;
            const eventName = "Account creation";

            // send  email
            const emailResponse = await sendRegistrationEmail(userEmail,eventName);
            console.log("email res", emailResponse)
            return c.json({msg:emailResponse, createdUser}, 201)
        }

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//update user
export const updateUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await c.req.json();
    try {
        // search for the user
        const searchedUser = await getUserService(id);
        if (searchedUser == undefined) return c.text("User not found", 404);
        // get the data and update it
        const res = await updateUserService(id, user);
        // return a success message
        if (!res) return c.text("User not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//delete user
export const deleteUser = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the user
        const user = await getUserService(id);
        if (user == undefined) return c.text("User not found", 404);
        //deleting the user
        const res = await deleteUserService(id);
        if (!res) return c.text("User not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}