import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { createCustomer, getCustomers, getCustomersById, updateCustomer } from "../controllers/customers.controllers.js"

const customersRouter = Router()

customersRouter.get("/rentals", validateSchema(), getCustomers)
customersRouter.get("/customers/:id", getCustomersById)
customersRouter.post("/customers", validateSchema(), createCustomer)
customersRouter.put("/customers/:id", updateCustomer)


export default customersRouter