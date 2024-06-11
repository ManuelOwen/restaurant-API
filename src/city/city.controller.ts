import {Context} from "hono";
import { cityService, getCityService, createCityService, updateCityService, deleteCityService,  } from "./city.service";


export const listcityies = async (c: Context) => {
    try {
        //limit the number of citys to be returned

        const limit = Number(c.req.query('limit'))

        const data = await cityService(limit);
        if (data == null || data.length == 0) {
            return c.text("city not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getcities = async (c:Context)=>{
    try{
        const data = await cityService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }
 //get city by id
 export const getcity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const city = await getCityService(id);
    if (city == undefined) {
        return c.text("city not found", 404);
    }
    return c.json(city, 200);
}
//create city
export const createCity = async (c: Context) => {
    try {
        const city = await c.req.json();
        const createdcity = await createCityService(city);


        if (!createdcity) return c.text("city not created", 404);
        return c.json({ msg: createdcity }, 201);
        console.log("msg")

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//update city
export const updateCity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const city = await c.req.json();
    try {
        // search for the city
        const searchedCity = await getCityService(id);
        if (searchedCity == undefined) return c.text("city not found", 404);
        // get the data and update it
        const res = await updateCityService(id, city);
        // return a success message
        if (!res) return c.text("city not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
//delete city
export const deleteCity = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the city
        const city = await getCityService(id);
        if (city == undefined) return c.text("city not found", 404);
        //deleting the city
        const res = await deleteCityService(id);
        if (!res) return c.text("city not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}