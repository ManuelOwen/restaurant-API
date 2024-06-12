import { serve } from '@hono/node-server'
import { Hono } from 'hono'
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


const app = new Hono();

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


app.get('/', (c) => {
  return c.text('Hello Hono!')
})
// app.get('/time',async (c) => {
//   await new Promise((resolve) => setTimeout(resolve, 2000))
//   return c.text('Hello Hono!')
// })

const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port:Number(process.env.PORT) || 8000
})


