"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCatalogRouter = void 0;
const hono_1 = require("hono");
const statscatalogue_controller_1 = require("./statscatalogue.controller");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.statusCatalogRouter = new hono_1.Hono();
//get all status_catalogs
exports.statusCatalogRouter.get('/status_catalogs', bearAuth_1.adminRoleAuth, statscatalogue_controller_1.listStatusCatalogs);
//get status_catalog by id
exports.statusCatalogRouter.get('/status_catalogs/:id', statscatalogue_controller_1.getStatusCatalogById);
//insert status_catalog
exports.statusCatalogRouter.post('/status_catalogs', statscatalogue_controller_1.insertStatusCatalog);
//update status_catalog
exports.statusCatalogRouter.put('/status_catalogs/:id', statscatalogue_controller_1.updateStatusCatalog);
//delete status_catalog
exports.statusCatalogRouter.delete('/status_catalogs/:id', bearAuth_1.adminRoleAuth, statscatalogue_controller_1.deleteStatusCatalog);
