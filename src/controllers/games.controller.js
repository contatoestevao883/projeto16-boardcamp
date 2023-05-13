import { db } from "../database/database.connection.js"

export async function createGame (req, res) {
    const { title, pollId } = req.body

    try { 
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getGames (req, res) {
   
    try {
       
    } catch (err) {
        res.status(500).send(err.message)
    }
}