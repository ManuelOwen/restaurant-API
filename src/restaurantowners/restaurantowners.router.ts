import {Hono} from 'hono'

import { deleteRestaurantOwner, getRestaurantOwnerById, insertRestaurantOwner, listRestaurantOwners, updateRestaurantOwner } from  './restaurantowner.controller';

export const restaurantOwnerRouter = new Hono();

//list restaurants
restaurantOwnerRouter.get("/restaurantsowners",listRestaurantOwners);

//get restaurant by id
restaurantOwnerRouter.get("/restaurantsowners/:id",getRestaurantOwnerById);

//insert restaurant
restaurantOwnerRouter.post("/restaurantsowners/:id",insertRestaurantOwner);

//update restaurant
restaurantOwnerRouter.put("/restaurantsowners/:id",updateRestaurantOwner);

//delete restaurant
restaurantOwnerRouter.delete("/restaurantsowners/:id",deleteRestaurantOwner);