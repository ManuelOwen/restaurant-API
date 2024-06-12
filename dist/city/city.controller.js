"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getcity = exports.getcities = exports.listcityies = void 0;
const city_service_1 = require("./city.service");
const listcityies = async (c) => {
    try {
        //limit the number of citys to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, city_service_1.cityService)(limit);
        if (data == null || data.length == 0) {
            return c.text("city not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listcityies = listcityies;
const getcities = async (c) => {
    try {
        const data = await (0, city_service_1.cityService)();
        return c.json(data);
    }
    catch (error) {
        return c.json({ message: error.message }, 500);
    }
};
exports.getcities = getcities;
//get city by id
const getcity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const city = await (0, city_service_1.getCityService)(id);
    if (city == undefined) {
        return c.text("city not found", 404);
    }
    return c.json(city, 200);
};
exports.getcity = getcity;
//create city
const createCity = async (c) => {
    try {
        const city = await c.req.json();
        const createdcity = await (0, city_service_1.createCityService)(city);
        if (!createdcity)
            return c.text("city not created", 404);
        return c.json({ msg: createdcity }, 201);
        console.log("msg");
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCity = createCity;
//update city
const updateCity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const city = await c.req.json();
    try {
        // search for the city
        const searchedCity = await (0, city_service_1.getCityService)(id);
        if (searchedCity == undefined)
            return c.text("city not found", 404);
        // get the data and update it
        const res = await (0, city_service_1.updateCityService)(id, city);
        // return a success message
        if (!res)
            return c.text("city not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCity = updateCity;
//delete city
const deleteCity = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the city
        const city = await (0, city_service_1.getCityService)(id);
        if (city == undefined)
            return c.text("city not found", 404);
        //deleting the city
        const res = await (0, city_service_1.deleteCityService)(id);
        if (!res)
            return c.text("city not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCity = deleteCity;
