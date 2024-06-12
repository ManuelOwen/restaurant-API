"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const adress_controller_1 = require("./adress.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.addressRouter = new hono_1.Hono();
// GET ALL addresses
exports.addressRouter.get("/addresses", bearAuth_1.adminRoleAuth, adress_controller_1.getAddresses);
//grt a single address
exports.addressRouter.get("/addresses/:id", adress_controller_1.getAddress);
//create address
exports.addressRouter.post("/addresses", adress_controller_1.createAddress);
//update address
exports.addressRouter.put("/addresses/:id", adress_controller_1.updateAddress);
//delete address
exports.addressRouter.delete("/addresses/:id", bearAuth_1.adminRoleAuth, adress_controller_1.deleteAddress);
