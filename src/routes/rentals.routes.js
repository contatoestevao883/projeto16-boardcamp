import { Router } from "express"
import { createRent, deleteRent, getRentals, updateRent } from "../controllers/rentals.controller.js"

const rentalsRouter = Router()

rentalsRouter.get("/rentals", getRentals)
rentalsRouter.post("/rentals", createRent)
rentalsRouter.post("/rentals/:id/return", updateRent)
rentalsRouter.delete("/rentals/:id", deleteRent)

export default rentalsRouter