
import "dotenv/config";
import { Context } from "hono";
import { createAuthUserService, userLoginService } from "./Authservice";
import bycrpt from "bcrypt";
import { sign } from "hono/jwt";

export const registerUserController = async (c: Context) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bycrpt.hash(pass, 10);
        user.password = hashedPassword;
        const createUser = await createAuthUserService(user);
        if (!createUser) return c.text("User not created", 400);
        return c.json({ message: createUser }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400);
    }
}

export const loginUserController = async (c: Context) => {
    try {
        const user = await c.req.json();
        //if user exists
        const userExists = await userLoginService(user);
        if (userExists === null) return c.json({ error: "User not found" }, 404); 
        const userMatch = await bycrpt.compare(user.password, userExists?.password as string);
        if (!userMatch) {
            return c.json({ error: "Invalid Credentials" }, 400);
        } else {
            // create a payload
            const payload = {
                sub: userExists?.username,
                role: userExists?.role,
                exp: Math.floor(Date.now() / 1000) + (60 * 120) 
            }

            let secret = process.env.JWT_SECRET as string;// jwt secret
            const token = await sign(payload, secret); // generate token
            let user = userExists?.user;
            let role = userExists?.role;
            return c.json({ token, user: { role, ...user } }, 200) 
        }
    } catch (error: any) {
        return c.json({ error: error?.message }, 400);

    }

}
