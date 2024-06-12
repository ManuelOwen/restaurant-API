"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const city_controller_1 = require("./city.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.cityRouter = new hono_1.Hono();
// GET ALL cities
exports.cityRouter.get("/cities", bearAuth_1.adminRoleAuth, city_controller_1.getcities);
//grt a single city
exports.cityRouter.get("/cities/:id", city_controller_1.getcity);
//create city
exports.cityRouter.post("/cities", city_controller_1.createCity);
//update city
exports.cityRouter.put("/cities/:id", city_controller_1.updateCity);
//delete city
exports.cityRouter.delete("/cities/:id", bearAuth_1.adminRoleAuth, city_controller_1.deleteCity);
