"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddress = exports.getAddresses = exports.listAddresses = void 0;
const adress_service_1 = require("./adress.service");
const listAddresses = async (c) => {
    try {
        //limit the number of ds to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, adress_service_1.addressService)(limit);
        if (data == null || data.length == 0) {
            return c.text("address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listAddresses = listAddresses;
const getAddresses = async (c) => {
    try {
        const data = await (0, adress_service_1.addressService)();
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getAddresses = getAddresses;
const getAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const d = await (0, adress_service_1.getAddressService)(id);
    if (d == undefined) {
        return c.text("address not found", 404);
    }
    return c.json(d, 200);
};
exports.getAddress = getAddress;
//create address
const createAddress = async (c) => {
    try {
        const address = await c.req.json();
        const createdaddress = await (0, adress_service_1.createAddressService)(address);
        if (!createdaddress)
            return c.text("address not created", 404);
        return c.json({ msg: createdaddress }, 201);
        console.log("msg");
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createAddress = createAddress;
//update address
const updateAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const address = await c.req.json();
    const updatedaddress = await (0, adress_service_1.updateAddressService)(id, address);
    if (!updatedaddress)
        return c.text("address not updated", 404);
    return c.json({ msg: updatedaddress }, 200);
};
exports.updateAddress = updateAddress;
//delete address
const deleteAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const deletedaddress = await (0, adress_service_1.deleteAddressService)(id);
    if (!deletedaddress)
        return c.text("address not deleted", 404);
    return c.json({ msg: deletedaddress }, 200);
};
exports.deleteAddress = deleteAddress;
