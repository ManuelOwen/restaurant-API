import { Context } from "hono";
import { deleteDriverService, getDriverByIdService, insertDriverService, driversService, updateDriverService } from "./driver.service";

//list drivers
export const listDrivers = async (c:Context) => {
    try{
        const drivers = await driversService();
        if(drivers == null) return c.text(" drivers not found ",404)
        return c.json(drivers,200)
    }catch  (error:any) {
        return c.text(error?.message,400)
    }
}

//get driver by id
export const getDriverById = async (c:Context) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try{
        if(isNaN(id))    return c.text("Invalid ID ",400)
        //search for driver
        const driver = await getDriverByIdService(id);
        if(driver == undefined) return c.text("Driver not found ",404)
        return c.json(driver,200)
    } catch (error:any) {
        return c.text(error?.message,400)
    }
}

//insert driver
export const insertDriver = async (c:Context) => {
    // return c.text("Not implemented yet",501)
    try {
        const driver = await c.req.json();
        const createdDriver = await insertDriverService(driver);
        if(!createdDriver) {
            return c.text("Driver not created ",400) 
        } 
        return c.json(driver,201)
    } catch (error:any) {
        return c.text(error?.message,400)
    }
}

//update driver
export const updateDriver = async (c:Context) => {
   
    const id = Number(c.req.param("id"));
    const driver = await c.req.json();
    try{
        if(isNaN(id))  return c.text("Invalid ID ",400)
        
        const existingDriver = await getDriverByIdService(id);
        if(existingDriver == undefined) return c.text("Driver not found ",404)
        //update driver
        const updatedDriver = await updateDriverService(id,driver);
        return c.json({msg: updatedDriver},200)
    } catch (error:any) {
        return c.text(error?.message,400)
    }
}

//delete driver
export const deleteDriver = async (c:Context) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try{
        if(isNaN(id))  return c.text("Invalid ID ",400)
        //search for driver
        const existingDriver = await getDriverByIdService(id);
        if(existingDriver == undefined) return c.text("Driver not found ",404)
        //delete driver
        const deletedDriver = await deleteDriverService(id);
        return c.json({msg: deletedDriver},200)
    } catch (error:any) {
        return c.text(error?.message,400)
    }
}