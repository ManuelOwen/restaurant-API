import {Context} from 'hono';

import {addressService, getAddressService, createAddressService, updateAddressService, deleteAddressService} from './adress.service';

export const listAddresses = async (c: Context) => {
    try {
        //limit the number of ds to be returned

        const limit = Number(c.req.query('limit'))

        const data = await addressService(limit);
        if (data == null || data.length == 0) {
            return c.text("address not found", 404)
          
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

 export const getAddresses = async (c:Context)=>{
    try{
        const data = await addressService();
        return c.json(data)
    }catch(error:any){
        return c.json({message:error.message}, 500)
    }

 }

 export const getAddress = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const d = await getAddressService(id);
    if (d == undefined) {
        return c.text("address not found", 404);
    }
    return c.json(d, 200);
}

//create address

export const createAddress = async (c: Context) => {
    try {
        const address = await c.req.json();
        const createdaddress = await createAddressService(address);
        if (!createdaddress) return c.text("address not created", 404);
        return c.json({ msg: createdaddress }, 201);
        console.log("msg")
    }
    catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//update address
export const updateAddress = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);
    const address = await c.req.json();
    const updatedaddress = await updateAddressService(id, address);
    if (!updatedaddress) return c.text("address not updated", 404);
    return c.json({ msg: updatedaddress }, 200);

}

//delete address
export const deleteAddress = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);
    const deletedaddress = await deleteAddressService(id);
    if (!deletedaddress) return c.text("address not deleted", 404);
    return c.json({ msg: deletedaddress }, 200);
}
