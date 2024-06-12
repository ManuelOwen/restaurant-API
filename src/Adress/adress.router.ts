import { Hono } from "hono";
import { getAddresses, getAddress, createAddress, updateAddress, deleteAddress } from "./adress.controller";
import { adminRoleAuth } from "../middlewares/bearAuth";

export const addressRouter = new Hono();

// GET ALL addresses
addressRouter.get("/addresses",adminRoleAuth, getAddresses);
//grt a single address
addressRouter.get("/addresses/:id", getAddress);
//create address
addressRouter.post("/addresses", createAddress)
//update address
addressRouter.put("/addresses/:id", updateAddress)
//delete address
addressRouter.delete("/addresses/:id",adminRoleAuth, deleteAddress)

