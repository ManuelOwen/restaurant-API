"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const logger_1 = require("hono/logger");
const csrf_1 = require("hono/csrf");
const trailing_slash_1 = require("hono/trailing-slash");
const timeout_1 = require("hono/timeout");
const http_exception_1 = require("hono/http-exception");
// routers
const user_router_1 = require("./users/user.router");
const state_router_1 = require("./state/state.router");
const city_router_1 = require("./city/city.router");
const category_router_1 = require("./category/category.router");
const adress_router_1 = require("./Adress/adress.router");
const menuitem_router_1 = require("./menu-item/menuitem.router");
const driver_router_1 = require("./drivers/driver.router");
const order_router_1 = require("./order/order.router");
const restaurant_router_1 = require("./restaurant/restaurant.router");
const restaurantowners_router_1 = require("./restaurantowners/restaurantowners.router");
const ordermenu_router_1 = require("./ordermenuitem/ordermenu.router");
const orderstatus_route_1 = require("./orderstatus/orderstatus.route");
const statscatalogue_router_1 = require("./statscatalogue/statscatalogue.router");
const comment_route_1 = require("./comment/comment.route");
const Authrouter_1 = require("./Auth/Authrouter");
const app = new hono_1.Hono();
// inbuillt middlawares
app.use((0, logger_1.logger)());
app.use((0, csrf_1.csrf)());
app.use((0, trailing_slash_1.trimTrailingSlash)());
const customTimeException = new http_exception_1.HTTPException(408, {
    message: "Request Timeout"
});
app.use("time", (0, timeout_1.timeout)(10000, customTimeException));
//routers
app.route("/api", user_router_1.userRouter);
app.route("/api", state_router_1.stateRouter);
app.route("/api", city_router_1.cityRouter);
app.route("/api", category_router_1.categoryRouter);
app.route("/api", adress_router_1.addressRouter);
app.route("/api", menuitem_router_1.menuItemRouter);
app.route("/api", driver_router_1.driverRouter);
app.route("/api", order_router_1.orderRouter);
app.route("/api", restaurant_router_1.restaurantRouter);
app.route("/api", restaurantowners_router_1.restaurantOwnerRouter);
app.route("/api", ordermenu_router_1.orderMenuItemRouter);
app.route("/api", orderstatus_route_1.orderStatusRouter);
app.route("/api", statscatalogue_router_1.statusCatalogRouter);
app.route("/api", comment_route_1.commentRouter);
app.route("/api/auth", Authrouter_1.authRouter);
// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })
app.get('/time', async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return c.text('Hello Hono!');
});
const port = 8000;
console.log(`Server is running on port ${port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT) || 8000
});
