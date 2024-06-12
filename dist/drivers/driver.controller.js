"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.insertDriver = exports.getDriverById = exports.listDrivers = void 0;
const driver_service_1 = require("./driver.service");
//list drivers
const listDrivers = async (c) => {
    try {
        const drivers = await (0, driver_service_1.driversService)();
        if (drivers == null)
            return c.text(" drivers not found ", 404);
        return c.json(drivers, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listDrivers = listDrivers;
//get driver by id
const getDriverById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for driver
        const driver = await (0, driver_service_1.getDriverByIdService)(id);
        if (driver == undefined)
            return c.text("Driver not found ", 404);
        return c.json(driver, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getDriverById = getDriverById;
//insert driver
const insertDriver = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const driver = await c.req.json();
        const createdDriver = await (0, driver_service_1.insertDriverService)(driver);
        if (!createdDriver) {
            return c.text("Driver not created ", 400);
        }
        return c.json(driver, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertDriver = insertDriver;
//update driver
const updateDriver = async (c) => {
    const id = Number(c.req.param("id"));
    const driver = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        const existingDriver = await (0, driver_service_1.getDriverByIdService)(id);
        if (existingDriver == undefined)
            return c.text("Driver not found ", 404);
        //update driver
        const updatedDriver = await (0, driver_service_1.updateDriverService)(id, driver);
        return c.json({ msg: updatedDriver }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateDriver = updateDriver;
//delete driver
const deleteDriver = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for driver
        const existingDriver = await (0, driver_service_1.getDriverByIdService)(id);
        if (existingDriver == undefined)
            return c.text("Driver not found ", 404);
        //delete driver
        const deletedDriver = await (0, driver_service_1.deleteDriverService)(id);
        return c.json({ msg: deletedDriver }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteDriver = deleteDriver;
