"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.createAddressService = exports.getAddressService = exports.addressService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const addressService = async (limit) => {
    if (limit) {
        return await db_1.db.query.addressTable.findMany({ limit: limit });
    }
    return await db_1.db.query.addressTable.findMany();
};
exports.addressService = addressService;
const getAddressService = async (id) => {
    return await db_1.db.query.addressTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.addressTable.id, id)
    });
};
exports.getAddressService = getAddressService;
const createAddressService = async (user) => {
    await db_1.db.insert(schema_1.addressTable).values(user);
    return "address created successfully";
};
exports.createAddressService = createAddressService;
// update address
const updateAddressService = async (id, user) => {
    await db_1.db.update(schema_1.addressTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "address updated successfully";
};
exports.updateAddressService = updateAddressService;
// delete address
const deleteAddressService = async (id) => {
    await db_1.db.delete(schema_1.addressTable).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "address deleted successfully";
};
exports.deleteAddressService = deleteAddressService;
// // get address by user id
// export const getAddressByUserIdService = async (id: number): Promise<TSaddress | undefined> => {
//     return await db.query.addressTable.findFirst({
//         where: eq(addressTable.user_id, id)
//     })
// }
// // get address by user id   
// export const getAddressByUserId = async (id: number): Promise<TSaddress[]> => {
//     return await db.query.addressTable.findMany({
//         where: eq(addressTable.user_id, id)
//     })
// }
