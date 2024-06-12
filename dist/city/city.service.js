"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityService = exports.updateCityService = exports.createCityService = exports.getCityService = exports.cityService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const cityService = async (limit) => {
    if (limit) {
        return await db_1.db.query.cityTable.findMany({ limit: limit });
    }
    return await db_1.db.query.cityTable.findMany();
};
exports.cityService = cityService;
const getCityService = async (id) => {
    return await db_1.db.query.cityTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.cityTable.id, id)
    });
};
exports.getCityService = getCityService;
const createCityService = async (user) => {
    await db_1.db.insert(schema_1.cityTable).values(user);
    return "city created successfully";
};
exports.createCityService = createCityService;
const updateCityService = async (id, user) => {
    await db_1.db.update(schema_1.cityTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "city updated successfully";
};
exports.updateCityService = updateCityService;
const deleteCityService = async (id) => {
    await db_1.db.delete(schema_1.cityTable).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "city deleted successfully";
};
exports.deleteCityService = deleteCityService;
