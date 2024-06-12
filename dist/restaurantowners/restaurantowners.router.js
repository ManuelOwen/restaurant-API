"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantOwnerRouter = void 0;
const hono_1 = require("hono");
const restaurantowner_controller_1 = require("./restaurantowner.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.restaurantOwnerRouter = new hono_1.Hono();
//list restaurants
exports.restaurantOwnerRouter.get("/restaurantsowners", bearAuth_1.adminRoleAuth, restaurantowner_controller_1.listRestaurantOwners);
//get restaurant by id
exports.restaurantOwnerRouter.get("/restaurantsowners/:id", restaurantowner_controller_1.getRestaurantOwnerById);
//insert restaurant
exports.restaurantOwnerRouter.post("/restaurantsowners/:id", restaurantowner_controller_1.insertRestaurantOwner);
//update restaurant
exports.restaurantOwnerRouter.put("/restaurantsowners/:id", restaurantowner_controller_1.updateRestaurantOwner);
//delete restaurant
exports.restaurantOwnerRouter.delete("/restaurantsowners/:id", bearAuth_1.adminRoleAuth, restaurantowner_controller_1.deleteRestaurantOwner);
