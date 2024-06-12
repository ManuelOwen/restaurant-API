"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOnUserTableRelations = exports.city_state_relations = exports.state_city_relations = exports.restaurant_owner_relations = exports.menu_item_order_relations = exports.order_menu_item_relations = exports.order_status_catalogue_relations = exports.order_status_relations = exports.order_comment_relations = exports.user_comment_relations = exports.order_restaurant_relations = exports.order_user_relations = exports.commentTable = exports.stats_catalogueTable = exports.order_statusTable = exports.addressTable = exports.restaurant_ownerTable = exports.order_menu_itemTable = exports.orderTable = exports.driverTable = exports.AuthOnUserTable = exports.roleEnum = exports.userTable = exports.categoryTable = exports.menuItemTable = exports.restaurantTable = exports.cityTable = exports.stateTable = void 0;
// import { Category, Description, Discount, Restaurant } from "@mui/icons-material";
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const pg_core_2 = require("drizzle-orm/pg-core");
const pg_core_3 = require("drizzle-orm/pg-core");
// import { or } from "sql-bricks";
// State has many Cities (1-n)
//state table
exports.stateTable = (0, pg_core_1.pgTable)("state", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name").notNull(),
    code: (0, pg_core_2.varchar)("code", { length: 255 }).notNull()
});
//city table
exports.cityTable = (0, pg_core_1.pgTable)("city", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name").notNull(),
    state_id: (0, pg_core_2.integer)("state_id").notNull().references(() => exports.stateTable.id, { onDelete: "cascade" }), // Foreign key to state
});
// City has many Restaurants (1-n)
//restaurant table
exports.restaurantTable = (0, pg_core_1.pgTable)("restaurantTable", {
    ID: (0, pg_core_1.serial)("ID").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name").notNull(),
    street_address: (0, pg_core_2.varchar)("street_address").notNull(),
    zip_code: (0, pg_core_2.varchar)("zip_code").notNull(),
    city_id: (0, pg_core_2.integer)("city_id").notNull().references(() => exports.cityTable.id, { onDelete: "cascade" }), // Foreign key to city
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at"),
    // restaurant_owner_id: integer("restaurant_owner_id").notNull().references(() => restaurant_ownerTable.id, { onDelete: "cascade" }) // Foreign key to restaurant_owner
});
// Restaurant has many MenuItems (1-n)
//menu item table
exports.menuItemTable = (0, pg_core_1.pgTable)("menu_item", {
    ID: (0, pg_core_1.serial)("ID").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name").notNull(),
    price: (0, pg_core_2.varchar)("price").notNull(),
    restaurant_id: (0, pg_core_2.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.ID, { onDelete: "cascade" }), // Foreign key to restaurant
    Category_id: (0, pg_core_2.integer)("Category_id").notNull().references(() => exports.categoryTable.id, { onDelete: "cascade" }), // Foreign key to category
    Description: (0, pg_core_2.varchar)("Description", { length: 255 }).notNull(),
    ingredients: (0, pg_core_2.varchar)("ingredients", { length: 255 }).notNull(),
    active: (0, pg_core_2.varchar)("active", { length: 255 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
});
//category table
exports.categoryTable = (0, pg_core_1.pgTable)("category", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name").notNull()
});
// One-to-One relationship between User and Driver
//user table
exports.userTable = (0, pg_core_1.pgTable)("user", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name", { length: 255 }).notNull(),
    email: (0, pg_core_2.varchar)("email", { length: 255 }).notNull(),
    phone_number: (0, pg_core_2.varchar)("phone_number").notNull(),
    address_id: (0, pg_core_2.integer)("address_id").notNull().references(() => exports.addressTable.id, { onDelete: "cascade" }), // Foreign key to address
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
});
exports.roleEnum = (0, pg_core_3.pgEnum)("role", ["admin", "user", "both"]);
// AuthOnUsersTable
exports.AuthOnUserTable = (0, pg_core_1.pgTable)("auth_on_users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    user_id: (0, pg_core_2.integer)("user_id")
        .notNull()
        .references(() => exports.userTable.id, { onDelete: "cascade" }),
    username: (0, pg_core_2.varchar)("username", { length: 255 }).notNull(),
    password: (0, pg_core_2.varchar)("password", { length: 255 }).notNull(),
    role: (0, exports.roleEnum)("role").default("user")
});
//driver table
exports.driverTable = (0, pg_core_1.pgTable)("driver", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    car_make: (0, pg_core_2.varchar)("car_make", { length: 255 }).notNull(),
    car_model: (0, pg_core_2.varchar)("car_model", { length: 255 }).notNull(),
    car_year: (0, pg_core_2.integer)("car_year").notNull(),
    user_id: (0, pg_core_2.integer)("user_id").notNull().references(() => exports.userTable.id, { onDelete: "cascade" }), // Foreign key to user
    online: (0, pg_core_2.boolean)("online"),
    delivering: (0, pg_core_2.boolean)("delivering"),
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
});
// Many-to-Many relationship between Orders and MenuItems
//order table
exports.orderTable = (0, pg_core_1.pgTable)("order", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    restaurant_id: (0, pg_core_2.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.ID, { onDelete: "cascade" }),
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at"),
    delivery_address_id: (0, pg_core_2.integer)("delivery_address_id").notNull().references(() => exports.addressTable.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_2.integer)("user_id").notNull().references(() => exports.userTable.id, { onDelete: "cascade" }),
    driver_id: (0, pg_core_2.integer)("driver_id").notNull().references(() => exports.driverTable.id, { onDelete: "cascade" }),
    price: (0, pg_core_2.integer)("price").notNull(),
    Discount: (0, pg_core_2.integer)("Discount").notNull(),
    final_price: (0, pg_core_2.integer)("final_price").notNull(),
    Comment: (0, pg_core_2.varchar)("Comment", { length: 255 }).notNull(),
    order_status: (0, pg_core_2.varchar)("order_status", { length: 255 }).notNull()
});
//menu item table
exports.order_menu_itemTable = (0, pg_core_1.pgTable)("order_menu_item", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    menu_item_id: (0, pg_core_2.integer)("menu_item_id").notNull().references(() => exports.menuItemTable.ID, { onDelete: "cascade" }),
    order_id: (0, pg_core_2.integer)("order_id").notNull().references(() => exports.orderTable.id, { onDelete: "cascade" }),
    quantity: (0, pg_core_2.integer)("quantity").notNull(),
    price: (0, pg_core_2.integer)("price").notNull(),
    comment: (0, pg_core_2.varchar)("comment", { length: 255 }).notNull()
});
// restaurant owner table
exports.restaurant_ownerTable = (0, pg_core_1.pgTable)("restaurant_owner", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    owner_id: (0, pg_core_2.integer)("owner_id").notNull().references(() => exports.userTable.id, { onDelete: "cascade" }),
    restaurant_id: (0, pg_core_2.integer)("restaurant_id").notNull().references(() => exports.restaurantTable.ID, { onDelete: "cascade" }),
    zip_code: (0, pg_core_2.varchar)("zip_code", { length: 255 }).notNull()
});
//// address table
exports.addressTable = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    street_address1: (0, pg_core_2.varchar)("street_address1", { length: 255 }).notNull(),
    street_address2: (0, pg_core_2.varchar)("street_address2", { length: 255 }).notNull(),
    zip_code: (0, pg_core_2.varchar)("zip_code", { length: 255 }).notNull(),
    city_id: (0, pg_core_2.integer)("city_id").notNull().references(() => exports.cityTable.id, { onDelete: "cascade" }),
    delivery_instructions: (0, pg_core_2.varchar)("delivery_instructions", { length: 255 }).notNull()
});
//order status table
exports.order_statusTable = (0, pg_core_1.pgTable)("order_status", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    order_id: (0, pg_core_2.integer)("order_id").notNull().references(() => exports.orderTable.id, { onDelete: "cascade" }),
    stats_catalogue_id: (0, pg_core_2.integer)("stats_catalogue_id").notNull().references(() => exports.stats_catalogueTable.id, { onDelete: "cascade" }),
    createdAt: (0, pg_core_1.timestamp)("created_at")
});
//stats catalogue table 
exports.stats_catalogueTable = (0, pg_core_1.pgTable)("stats_catalogue", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    name: (0, pg_core_2.varchar)("name", { length: 255 }).notNull()
});
//comment table
exports.commentTable = (0, pg_core_1.pgTable)("comment", {
    id: (0, pg_core_1.serial)("id").notNull().primaryKey(),
    order_id: (0, pg_core_2.integer)("order_id").notNull().references(() => exports.orderTable.id, { onDelete: "cascade" }), // Foreign key to order
    user_id: (0, pg_core_2.integer)("user_id").notNull().references(() => exports.userTable.id, { onDelete: "cascade" }), // Foreign key to user
    comment_text: (0, pg_core_2.varchar)("comment_text", { length: 255 }).notNull(),
    is_complaint: (0, pg_core_2.boolean)("is_complaint"),
    is_praise: (0, pg_core_2.boolean)("is_praise"),
    createdAt: (0, pg_core_1.timestamp)("created_at"),
    updatedAt: (0, pg_core_1.timestamp)("updated_at")
});
//one-many relations
//driver order relations
// export const driver_order_relations = relations(driverTable, ({many})=>({
//     orders:many(orderTable)
// }))
//1-1 relations
//order user relations
exports.order_user_relations = (0, drizzle_orm_1.relations)(exports.orderTable, ({ one }) => ({
    user: one(exports.userTable, {
        fields: [exports.orderTable.user_id],
        references: [exports.userTable.id]
    }),
}));
//order restaurant relations
exports.order_restaurant_relations = (0, drizzle_orm_1.relations)(exports.orderTable, ({ one }) => ({
    restaurant: one(exports.restaurantTable, {
        fields: [exports.orderTable.restaurant_id],
        references: [exports.restaurantTable.ID]
    }),
    deliver_to: one(exports.addressTable, {
        fields: [exports.orderTable.delivery_address_id],
        references: [exports.addressTable.id]
    }),
    ordered_by: one(exports.userTable, {
        fields: [exports.orderTable.user_id],
        references: [exports.userTable.id]
    }),
    delivered_by: one(exports.driverTable, {
        fields: [exports.orderTable.driver_id],
        references: [exports.driverTable.id]
    }),
}));
//user comment relations
exports.user_comment_relations = (0, drizzle_orm_1.relations)(exports.userTable, ({ one }) => ({
    comments: one(exports.commentTable, {
        fields: [exports.userTable.id],
        references: [exports.commentTable.user_id]
    }),
    regarding: one(exports.orderTable, {
        fields: [exports.userTable.id],
        references: [exports.orderTable.user_id]
    })
}));
//order comment relations
exports.order_comment_relations = (0, drizzle_orm_1.relations)(exports.orderTable, ({ one }) => ({
    comments: one(exports.commentTable, {
        fields: [exports.orderTable.id],
        references: [exports.commentTable.order_id]
    })
}));
//order status relations
exports.order_status_relations = (0, drizzle_orm_1.relations)(exports.orderTable, ({ one }) => ({
    status: one(exports.order_statusTable, {
        fields: [exports.orderTable.id],
        references: [exports.order_statusTable.order_id]
    })
})); //order status catalogue relations
exports.order_status_catalogue_relations = (0, drizzle_orm_1.relations)(exports.order_statusTable, ({ one }) => ({
    status: one(exports.stats_catalogueTable, {
        fields: [exports.order_statusTable.stats_catalogue_id],
        references: [exports.stats_catalogueTable.id]
    })
}));
//order menu item relations
exports.order_menu_item_relations = (0, drizzle_orm_1.relations)(exports.orderTable, ({ one }) => ({
    items: one(exports.order_menu_itemTable, {
        fields: [exports.orderTable.id],
        references: [exports.order_menu_itemTable.order_id]
    })
}));
// order menu item relations
exports.menu_item_order_relations = (0, drizzle_orm_1.relations)(exports.menuItemTable, ({ one }) => ({
    orders: one(exports.order_menu_itemTable, {
        fields: [exports.menuItemTable.ID],
        references: [exports.order_menu_itemTable.menu_item_id]
    })
}));
exports.restaurant_owner_relations = (0, drizzle_orm_1.relations)(exports.restaurantTable, ({ one }) => ({
    owner: one(exports.restaurant_ownerTable, {
        fields: [exports.restaurantTable.ID],
        references: [exports.restaurant_ownerTable.restaurant_id] // references the restaurant id
    })
}));
// state and city relations
exports.state_city_relations = (0, drizzle_orm_1.relations)(exports.stateTable, ({ many }) => ({
    cities: many(exports.cityTable)
}));
// city and state relations
exports.city_state_relations = (0, drizzle_orm_1.relations)(exports.cityTable, ({ one }) => ({
    state: one(exports.stateTable, {
        fields: [exports.cityTable.state_id],
        references: [exports.stateTable.id]
    })
}));
// User and Auth relationship
exports.AuthOnUserTableRelations = (0, drizzle_orm_1.relations)(exports.AuthOnUserTable, ({ one }) => ({
    user: one(exports.userTable, {
        fields: [exports.AuthOnUserTable.user_id],
        references: [exports.userTable.id],
    }),
}));
