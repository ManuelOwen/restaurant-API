import {Hono} from 'hono'

import { deleteRestaurantOwner, getRestaurantOwnerById, insertRestaurantOwner, listRestaurantOwners, updateRestaurantOwner } from  './restaurantowner.controller';
import { adminRoleAuth } from '../middlewares/bearAuth';

export const restaurantOwnerRouter = new Hono();

//list restaurants
restaurantOwnerRouter.get("/restaurantsowners", adminRoleAuth, listRestaurantOwners);

//get restaurant by id
restaurantOwnerRouter.get("/restaurantsowners/:id",getRestaurantOwnerById);

//insert restaurant
restaurantOwnerRouter.post("/restaurantsowners/:id",insertRestaurantOwner);

//update restaurant
restaurantOwnerRouter.put("/restaurantsowners/:id",updateRestaurantOwner);

//delete restaurant
restaurantOwnerRouter.delete("/restaurantsowners/:id",adminRoleAuth,deleteRestaurantOwner);