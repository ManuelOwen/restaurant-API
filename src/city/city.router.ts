import { Hono } from "hono";
import { getcities, getcity, createCity, updateCity, deleteCity } from "./city.controller";
import { adminRoleAuth } from "../middlewares/bearAuth";

export const cityRouter = new Hono();

// GET ALL cities
cityRouter.get("/cities", adminRoleAuth, getcities);
//grt a single city
cityRouter.get("/cities/:id", getcity);
//create city
cityRouter.post("/cities", createCity)
//update city
cityRouter.put("/cities/:id", updateCity)
//delete city
cityRouter.delete("/cities/:id",adminRoleAuth, deleteCity)
