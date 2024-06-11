import { TIAuthOnUsers, TSAuthOnUsers, AuthOnUserTable } from "../drizzle/schema";
import { db } from "../drizzle/db";
import { sql } from "drizzle-orm";

export const createAuthUserService = async (user: TIAuthOnUsers): Promise<string | null> => {
    await db.insert(AuthOnUserTable).values(user);
    return "User created successfully";
}

export const userLoginService = async (user: TSAuthOnUsers) => {
    const { username } = user;
    return await db.query.AuthOnUserTable.findFirst({
        columns: {
            username: true,
            password: true,
            role: true,
        }, where: sql`${AuthOnUserTable.username} = ${username} `,
        with: {
            user: {
                columns: {
                    name: true,
                    email: true,
                    contact_phone: true,
                }
            }
        }
    })
}