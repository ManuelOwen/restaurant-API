import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";  // Import Pool from pg
import { db } from "./db";

// Explicitly annotate the client as a Pool instance
const client = new Pool({
    connectionString: process.env.DATABASE_URL,
});

async function migration() {
    console.log("===Migration started===");

    // Ensure db is cast correctly
    await migrate(db as NodePgDatabase<Record<String, never>>, {
        migrationsFolder: __dirname + "/migrations"
    });

    await client.end();
    console.log("===Migration ended===");
    process.exit(0);
}

migration().catch((e) => {
    console.error(e);
    process.exit(1);
});
