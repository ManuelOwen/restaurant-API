"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalogService = exports.updateStatusCatalogService = exports.insertStatusCatalogService = exports.getStatusCatalogByIdService = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const statusCatalogService = async () => {
    return await db_1.db.query.stats_catalogueTable.findMany();
};
exports.statusCatalogService = statusCatalogService;
const getStatusCatalogByIdService = async (id) => {
    return await db_1.db.query.stats_catalogueTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stats_catalogueTable, id)
    });
};
exports.getStatusCatalogByIdService = getStatusCatalogByIdService;
const insertStatusCatalogService = async (statusCatalog) => {
    await db_1.db.insert(schema_1.stats_catalogueTable).values(statusCatalog);
    // .returning({id:stats_catalogueTable.status_catalog_id}
    return "Status Catalog created successfully 🎉";
};
exports.insertStatusCatalogService = insertStatusCatalogService;
const updateStatusCatalogService = async (id, statusCatalog) => {
    await db_1.db.update(schema_1.stats_catalogueTable).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.stats_catalogueTable, id));
    return "Status Catalog updated successfully 🎉";
};
exports.updateStatusCatalogService = updateStatusCatalogService;
const deleteStatusCatalogService = async (id) => {
    await db_1.db.delete(schema_1.stats_catalogueTable).where((0, drizzle_orm_1.eq)(schema_1.stats_catalogueTable, id));
    return "Status Catalog deleted successfully 🎉";
};
exports.deleteStatusCatalogService = deleteStatusCatalogService;
