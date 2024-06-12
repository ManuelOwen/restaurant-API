"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalog = exports.updateStatusCatalog = exports.insertStatusCatalog = exports.getStatusCatalogById = exports.listStatusCatalogs = void 0;
const statscatalogue_service_1 = require("./statscatalogue.service");
//list status_catalogs
const listStatusCatalogs = async (c) => {
    try {
        const status_catalogs = await (0, statscatalogue_service_1.statusCatalogService)();
        if (status_catalogs == null)
            return c.text("No status_catalogs found ", 404);
        return c.json(status_catalogs, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.listStatusCatalogs = listStatusCatalogs;
//get status_catalog by id
const getStatusCatalogById = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = parseInt(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for status_catalog
        const status_catalog = await (0, statscatalogue_service_1.getStatusCatalogByIdService)(id);
        if (status_catalog == undefined)
            return c.text("Status_catalog not found ", 404);
        return c.json(status_catalog, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.getStatusCatalogById = getStatusCatalogById;
//insert status_catalog
const insertStatusCatalog = async (c) => {
    // return c.text("Not implemented yet",501)
    try {
        const status_catalog = await c.req.json();
        const createdStatusCatalog = await (0, statscatalogue_service_1.insertStatusCatalogService)(status_catalog);
        if (!createdStatusCatalog) {
            return c.text("Status_catalog not created ", 400);
        }
        return c.json(status_catalog, 201);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.insertStatusCatalog = insertStatusCatalog;
//update status_catalog 
const updateStatusCatalog = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    const status_catalog = await c.req.json();
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for status_catalog
        const existingStatusCatalog = await (0, statscatalogue_service_1.getStatusCatalogByIdService)(id);
        if (existingStatusCatalog == undefined)
            return c.text("Status_catalog not found ", 404);
        //update status_catalog
        const updatedStatusCatalog = await (0, statscatalogue_service_1.updateStatusCatalogService)(id, status_catalog);
        return c.json({ msg: updatedStatusCatalog }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.updateStatusCatalog = updateStatusCatalog;
//delete status_catalog
const deleteStatusCatalog = async (c) => {
    // return c.text("Not implemented yet",501)
    const id = Number(c.req.param("id"));
    try {
        if (isNaN(id))
            return c.text("Invalid ID ", 400);
        //search for status_catalog
        const existingStatusCatalog = await (0, statscatalogue_service_1.getStatusCatalogByIdService)(id);
        if (existingStatusCatalog == undefined)
            return c.text("Status_catalog not found ", 404);
        //delete status_catalog
        const deletedStatusCatalog = await (0, statscatalogue_service_1.deleteStatusCatalogService)(id);
        return c.json({ msg: deletedStatusCatalog }, 200);
    }
    catch (error) {
        return c.text(error?.message, 400);
    }
};
exports.deleteStatusCatalog = deleteStatusCatalog;
