import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { prometheus } from '@hono/prometheus'

import "dotenv/config"
import {logger} from "hono/logger"
import {csrf} from "hono/csrf"
import { trimTrailingSlash } from 'hono/trailing-slash'
import {timeout} from "hono/timeout"
import { HTTPException } from 'hono/http-exception';




// routers
import { userRouter } from './users/user.router'
import { stateRouter } from './state/state.router';
import { cityRouter } from './city/city.router';
import { categoryRouter } from './category/category.router';
import { addressRouter } from './Adress/adress.router';
import { menuItemRouter } from './menu-item/menuitem.router';
import { driverRouter } from './drivers/driver.router';
import { orderRouter } from './order/order.router';
import { restaurantRouter } from './restaurant/restaurant.router';
import { restaurantOwnerRouter } from './restaurantowners/restaurantowners.router';
import { orderMenuItemRouter } from './ordermenuitem/ordermenu.router';
import { orderStatusRouter } from './orderstatus/orderstatus.route';
import {statusCatalogRouter} from './statscatalogue/statscatalogue.router'
import {commentRouter} from './comment/comment.route'
import { authRouter } from './Auth/Authrouter'
import { readFile } from 'fs/promises'


const app = new Hono();
const {printMetrics, registerMetrics} = prometheus()
// inbuillt middlawares
  app.use(logger());

app.use(csrf())     
app.use(trimTrailingSlash())
const customTimeException = new HTTPException(408,{
  message:"Request Timeout"
})
app.use("time", timeout(10000, customTimeException), )


//routers
app.route("/api", userRouter)
app.route("/api", stateRouter)
app.route("/api", cityRouter)
app.route("/api", categoryRouter)
app.route("/api", addressRouter)
app.route("/api", menuItemRouter)
app.route("/api", driverRouter)
app.route("/api", orderRouter)
app.route("/api", restaurantRouter)
app.route("/api", restaurantOwnerRouter)
app.route("/api", orderMenuItemRouter)
app.route("/api", orderStatusRouter)
app.route("/api", statusCatalogRouter)
app.route("/api", commentRouter)
app.route("/api/auth", authRouter)



app.get("/", async (c) => {
  // return c.text("Welcome to the API")
  try{
    let html = await readFile("./index.html", 'utf-8') ;
    return c.html(html)
  }catch(err:any){
    return c.text(err.message, 500)
  }

})

// not found
app.notFound((c) => {
  return c.text("Not Found", 404)

})

app.get('/metrics', printMetrics)
// app.get('/metrics', registerMetrics)
const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port:Number(process.env.PORT) || 8000
})


