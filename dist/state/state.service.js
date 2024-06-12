"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStateService = exports.updateStateService = exports.createStateService = exports.getStateService = exports.stateService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const stateService = async (limit) => {
    if (limit) {
        return await db_1.db.query.stateTable.findMany({ limit: limit });
    }
    return await db_1.db.query.stateTable.findMany();
};
exports.stateService = stateService;
const getStateService = async (id) => {
    return await db_1.db.query.stateTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stateTable.id, id)
    });
};
exports.getStateService = getStateService;
const createStateService = async (state) => {
    await db_1.db.insert(schema_1.stateTable).values(state);
    return "state created successfully";
};
exports.createStateService = createStateService;
const updateStateService = async (id, state) => {
    await db_1.db.update(schema_1.stateTable).set(state).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "state updated successfully";
};
exports.updateStateService = updateStateService;
const deleteStateService = async (id) => {
    await db_1.db.delete(schema_1.stateTable).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "state deleted successfully";
};
exports.deleteStateService = deleteStateService;
