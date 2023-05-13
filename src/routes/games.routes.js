import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { createGame, getGames } from "../controllers/games.controller.js"

const gamesRouter = Router()

gamesRouter.get("/games", validateSchema(), createGame)
gamesRouter.post("/games", getGames)

export default gamesRouter