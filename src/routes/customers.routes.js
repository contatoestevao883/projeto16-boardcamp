import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { createCustomer, getCustomers, getCustomersById, updateCustomer } from "../controllers/customers.controllers.js"
import { customersSchema } from "../schemas/customers.schema.js"

const customersRouter = Router()

customersRouter.get("/customers", getCustomers)
customersRouter.get("/customers/:id", getCustomersById)
customersRouter.post("/customers", validateSchema(customersSchema), createCustomer)
customersRouter.put("/customers/:id", updateCustomer)


export default customersRouter