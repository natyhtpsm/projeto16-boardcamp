import { Router } from "express";
import { postCustomersController, getOneCustomerController, putCustomersController, getAllCustomersController } from "../controllers/customer.controllers.js";
import { customersMiddleware } from "../middlewares/customer.middleware.js";

export const customerRouter = Router();

customerRouter.post('/customers', customersMiddleware, postCustomersController);
customerRouter.get('/customers', getAllCustomersController);
customerRouter.put('/customers/:id', customersMiddleware, putCustomersController);
customerRouter.get('/customers/:id', getOneCustomerController);