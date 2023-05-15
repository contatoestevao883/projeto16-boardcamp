import { db } from "../database/database.connection.js"

export async function createGame (req, res) {
    const { name, image, stockTotal, pricePerDay } = req.body

    const gameTreatment = await db.query(`SELECT * FROM games WHERE name=$1`, [name])

    if (!gameTreatment.rows[0] || gameTreatment.rows[0] === "") return res.sendStatus(400)

    if (gameTreatment.rows[0]) return res.sendStatus(409)

    try { 
        await db.query(`
        INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`
        , [name, image, stockTotal, pricePerDay])    
           //$1   //$2     //$3        //$4
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getGames (req, res) {

    try {
       const games = await db.query(`SELECT * FROM games`)
       res.send(games.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}