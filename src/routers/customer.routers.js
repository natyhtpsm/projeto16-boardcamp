import { Router } from "express";
import { postCustomersController, getOneCustomerController, putCustomersController, getAllCustomersController } from "../controllers/customer.controllers.js";
import { customersMiddleware } from "../middlewares/customer.middleware.js";

export const customerRouter = Router();

customerRouter.post('/customer', customersMiddleware, postCustomersController);
customerRouter.get('/customer', getAllCustomersController);
customerRouter.put('/customer/:id', customersMiddleware, putCustomersController);
customerRouter.get('/customer/:id', getOneCustomerController);