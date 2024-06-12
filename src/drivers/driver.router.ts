import {Hono} from 'hono'
import { deleteDriver, getDriverById, insertDriver, listDrivers, updateDriver } from './driver.controller'
import { adminRoleAuth } from '../middlewares/bearAuth';
export const driverRouter = new Hono();

//get all drivers
driverRouter.get('/drivers', adminRoleAuth, listDrivers);

//get comment by id
driverRouter.get('/drivers/:id', getDriverById);

//insert comment
driverRouter.post('/drivers', insertDriver);

//update comment
driverRouter.put('/drivers/:id', updateDriver);

//delete comment
driverRouter.delete('/drivers/:id',adminRoleAuth, deleteDriver);