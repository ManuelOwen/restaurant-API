"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverService = exports.updateDriverService = exports.insertDriverService = exports.getDriverByIdService = exports.driversService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const driversService = async () => {
    return await db_1.db.query.driverTable.findMany();
};
exports.driversService = driversService;
const getDriverByIdService = async (id) => {
    return await db_1.db.query.driverTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driverTable.id, id)
    });
};
exports.getDriverByIdService = getDriverByIdService;
const insertDriverService = async (driver) => {
    await db_1.db.insert(schema_1.driverTable).values(driver);
    return "Driver created successfully ";
};
exports.insertDriverService = insertDriverService;
const updateDriverService = async (id, driver) => {
    await db_1.db.update(schema_1.driverTable).set(driver).where((0, drizzle_orm_1.eq)(schema_1.driverTable, id));
    return "Driver updated successfully ";
};
exports.updateDriverService = updateDriverService;
const deleteDriverService = async (id) => {
    await db_1.db.delete(schema_1.driverTable).where((0, drizzle_orm_1.eq)(schema_1.driverTable, id));
    return "Driver deleted successfully ";
};
exports.deleteDriverService = deleteDriverService;
