import {eq} from "drizzle-orm";
import {db} from "../drizzle/db";
import {TIaddress, TSaddress, addressTable} from "../drizzle/schema";

export const addressService = async (limit?: number): Promise<TSaddress[]> => {
    if (limit) {
        return await db.query.addressTable.findMany({limit: limit})
    }
    return await db.query.addressTable.findMany();
}

export const getAddressService = async (id: number): Promise<TSaddress | undefined> => {
    return await db.query.addressTable.findFirst({
        where: eq(addressTable.id, id)
    })

}

export const createAddressService = async (user: TIaddress) => {
    await db.insert(addressTable).values(user)
    return "address created successfully";
}
// update address
export const updateAddressService = async (id: number, user: TIaddress) => {
    await db.update(addressTable).set(user).where(eq(addressTable.id, id))
    return "address updated successfully";
}
// delete address
export const deleteAddressService = async (id: number) => {
    await db.delete(addressTable).where(eq(addressTable.id, id))
    return "address deleted successfully";
}
// // get address by user id
// export const getAddressByUserIdService = async (id: number): Promise<TSaddress | undefined> => {
//     return await db.query.addressTable.findFirst({
//         where: eq(addressTable.user_id, id)
//     })
// }
// // get address by user id   
// export const getAddressByUserId = async (id: number): Promise<TSaddress[]> => {
//     return await db.query.addressTable.findMany({
//         where: eq(addressTable.user_id, id)
//     })
// }


