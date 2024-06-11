import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";

import { TSstats_catalogue, TIstats_catalogue, stats_catalogueTable } from "../drizzle/schema";

export const statusCatalogService = async ():Promise<TSstats_catalogue[] | null>=> {
    return await db.query.stats_catalogueTable.findMany();    
}

export const getStatusCatalogByIdService = async (id:number):Promise<TSstats_catalogue | undefined> => {
    return await db.query.stats_catalogueTable.findFirst({
       where: eq(stats_catalogueTable, id)
    })
}

export const insertStatusCatalogService = async(statusCatalog:TSstats_catalogue) => {
     await db.insert(stats_catalogueTable).values(statusCatalog)
    // .returning({id:stats_catalogueTable.status_catalog_id}
        return "Status Catalog created successfully 🎉";
}

export const updateStatusCatalogService = async(id:number,statusCatalog:TSstats_catalogue) => {
    await db.update(stats_catalogueTable).set(statusCatalog).where(eq(stats_catalogueTable,id));
    return "Status Catalog updated successfully 🎉"
}

export const deleteStatusCatalogService = async(id:number) => {
    await db.delete(stats_catalogueTable).where(eq(stats_catalogueTable,id));
    return "Status Catalog deleted successfully 🎉"
}