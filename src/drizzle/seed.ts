import { db } from "./db";
import {
    stateTable, 
    cityTable,
    restaurantTable,
    userTable,
    menuItemTable,
    orderTable,
    categoryTable,
    driverTable,
    order_menu_itemTable,
    restaurant_ownerTable,
    addressTable,
    order_statusTable,
    stats_catalogueTable,
    commentTable,
}from "./schema";
 
// 1
const states = [
 {name: "Kenya", code: "254"},
]

// 2
const cities = [
    {name: "Nairobi", state_id: 5},
    {name: "Mombasa", state_id: 6},
    {name: "Kisumu", state_id: 6},
    {name: "Nakuru", state_id: 5},
]

// 3
const addresses = [
    {street_address1: "Kimathi Street", street_address2: "Kimathi Street", zip_code: "00100", city_id: 34, delivery_instructions: "Deliver to the receptionist"},
    {street_address1: "Moi Avenue", street_address2: "Moi Avenue", zip_code: "00100", city_id: 36, delivery_instructions: "Deliver to the receptionist"},
    {street_address1: "Kenyatta Avenue", street_address2: "Kenyatta Avenue", zip_code: "00100", city_id: 35, delivery_instructions: "Deliver to the receptionist"},
    {street_address1: "Kenyatta Avenue", street_address2: "Kenyatta Avenue", zip_code: "00100", city_id: 37, delivery_instructions: "Deliver to the receptionist"}
]

// 4
const users = [
    {name: "John Doe", email: "john@gmail.com", phone_number: "254712345678", password: "password", address_id: 6, createdAt: new Date(), updatedAt: new Date()},
    {name: "Jane Doe", email: "jane@gmail.com", phone_number: "254712345678", password: "password", address_id: 7, createdAt: new Date(), updatedAt: new Date()},
    {name: "James Doe", email: "james@gmail.com", phone_number: "254712345678", password: "password", address_id: 8, createdAt: new Date(), updatedAt: new Date()},
    {name: "Janet Doe", email: "janet@gmail.com", phone_number: "254712345678", password: "password", address_id: 9, createdAt: new Date(), updatedAt: new Date()},
]

// 5
const restaurant_owners = [
    {owner_id: 14, restaurant_id: 9, zip_code: "00100"},
    {owner_id: 16, restaurant_id: 11, zip_code: "00100"},
    {owner_id: 17, restaurant_id: 10, zip_code: "00100"},
    {owner_id: 13, restaurant_id: 12, zip_code: "00100"},
]

// 6
const restaurants = [
    {name: "Java", street_address: "Kimathi Street", zip_code: "00100", city_id: 34, createdAt: new Date(), updatedAt: new Date(),  restaurant_owner_id: 1},
    {name: "KFC", street_address: "Moi Avenue", zip_code: "00100", city_id: 35, createdAt: new Date(), updatedAt: new Date(),  restaurant_owner_id: 2},
    {name: "Artcaffe", street_address: "Kenyatta Avenue", zip_code: "00100", city_id: 36, createdAt: new Date(), updatedAt: new Date(),  restaurant_owner_id: 3},
    {name: "Steers", street_address: "Kenyatta Avenue", zip_code: "00100", city_id: 37, createdAt: new Date(), updatedAt: new Date(),  restaurant_owner_id: 4},
  
]

// 7
const menuItems = [
    {name: "Chicken Burger", price: "500", restaurant_id: 9, Category_id: 2, Description: "Chicken Burger", ingredients: "Chicken", active: "Yes", createdAt: new Date(), updatedAt: new Date()},
    {name: "Beef Burger", price: "500", restaurant_id: 10, Category_id: 3, Description: "Beef Burger", ingredients: "Beef", active: "Yes", createdAt: new Date(), updatedAt: new Date()},
    {name: "Fish Burger", price: "500", restaurant_id: 11, Category_id: 4, Description: "Fish Burger", ingredients: "Fish", active: "Yes", createdAt: new Date(), updatedAt: new Date()},
    {name: "Veggie Burger", price: "500", restaurant_id: 12, Category_id: 5, Description: "Veggie Burger", ingredients: "Veggie", active: "Yes", createdAt: new Date(), updatedAt: new Date()},
]

//8
const categories = [
    {name: "Burgers"},
    {name: "Pizza"},
    {name: "Sandwiches"},
    {name: "Salads"},
]


//9
const drivers = [
    {id:"1",car_make: "Toyota", car_model: "Corolla", car_year: 2010, user_id: 13, online: true, delivering: false, createdAt: new Date(), updatedAt: new Date()},
    {id:"6",car_make: "Toyota", car_model: "Corolla", car_year: 2010, user_id: 14, online: true, delivering: false, createdAt: new Date(), updatedAt: new Date()},
    {id:"3",car_make: "Toyota", car_model: "Corolla", car_year: 2010, user_id: 13, online: true, delivering: false, createdAt: new Date(), updatedAt: new Date()},
    {id:"5",car_make: "Toyota", car_model: "Corolla", car_year: 2010, user_id: 14, online: true, delivering: false, createdAt: new Date(), updatedAt: new Date()},
]


//10
const order_menu_item = [
    {menu_item_id: 13, order_id: 13, quantity: 1, price: 500, comment: "No onions"},
    {menu_item_id: 14, order_id: 14, quantity: 1, price: 500, comment: "No onions"},
    {menu_item_id: 15, order_id: 15, quantity: 1, price: 500, comment: "No onions"},
    {menu_item_id: 16, order_id: 16, quantity: 1, price: 500, comment: "No onions"},
]

//12
const orders = [
    {restaurant_id: 9, delivery_address_id: 6, user_id: 13, driver_id: 1, price: 500, Discount: 0, final_price: 500, Comment: "No onions", order_status: "Pending", created_at: new Date(), updated_at: new Date()},
    {restaurant_id: 10, delivery_address_id: 7, user_id: 14, driver_id: 6, price: 500, Discount: 0, final_price: 500, Comment: "No onions", order_status: "Pending", created_at: new Date(), updated_at: new Date()},
    {restaurant_id: 11, delivery_address_id: 8, user_id: 16, driver_id: 3, price: 500, Discount: 0, final_price: 500, Comment: "No onions", order_status: "Pending", created_at: new Date(), updated_at: new Date()},
    {restaurant_id: 12, delivery_address_id: 9, user_id: 17, driver_id:5, price: 500, Discount: 0, final_price: 500, Comment: "No onions", order_status: "Pending", created_at: new Date(), updated_at: new Date()},
]



const order_status=[
    {order_id: 13, stats_catalogue_id: 1, created_at: new Date()},
    {order_id: 14, stats_catalogue_id: 2, created_at: new Date()},
    {order_id: 15, stats_catalogue_id: 3, created_at: new Date()},
    {order_id: 16, stats_catalogue_id: 4, created_at: new Date()}
]


const stats_catalogue=[
    {name: "Pending"},
    {name: "Delivered"},
    {name: "Cancelled"},
    {name: "In Progress"}
]
// export const commentTable = pgTable("comment", {
//     id: serial("id").notNull().primaryKey(),
//     order_id: integer("order_id").notNull().references(() => orderTable.id, { onDelete: "cascade" }), // Foreign key to order
//     user_id: integer("user_id").notNull().references(() => userTable.id, { onDelete: "cascade" }), // Foreign key to user
//     comment_text: varchar("comment_text", { length: 255 }).notNull(),
//     is_complaint: pgBoolean("is_complaint"),
//     is_praise: pgBoolean("is_praise"),
//     createdAt: timestamp("created_at"),
//     updatedAt: timestamp("updated_at")
// });

const comments = [
    {order_id: 13, user_id: 13, comment_text: "The food was cold", is_complaint: true, is_praise: false, createdAt: new Date(), updatedAt: new Date()},
    {order_id: 14, user_id: 14, comment_text: "The food was cold", is_complaint: true, is_praise: false, createdAt: new Date(), updatedAt: new Date()},
    {order_id: 15, user_id: 16, comment_text: "The food was cold", is_complaint: true, is_praise: false, createdAt: new Date(), updatedAt: new Date()},
    {order_id: 16, user_id: 17, comment_text: "The food was cold", is_complaint: true, is_praise: false, createdAt: new Date(), updatedAt: new Date()},
]




async function seed() {
    await db.insert(stateTable).values(states)
    // await db.insert(cityTable).values(cities)
    // await db.insert(addressTable).values(addresses)
    // await db.insert(userTable).values(users)
    // await db.insert(restaurantTable).values(restaurants)
    // await db.insert(restaurant_ownerTable).values(restaurant_owners)
    // await db.insert(menuItemTable).values(menuItems)
    // await db.insert(categoryTable).values(categories)
    // await db.insert(orderTable).values(orders)
    // await db.insert(driverTable).values(drivers)
    // await db.insert(order_menu_itemTable).values(order_menu_item)
    // await db.insert(order_statusTable).values(order_status)
    // await db.insert(commentTable).values(comments)
    // await db.insert(stats_catalogueTable).values(stats_catalogue)
}

seed().then(() => console.log("Seeding complete")).catch(console.error)