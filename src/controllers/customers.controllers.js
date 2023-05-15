import dayjs from "dayjs"
import { db } from "../database/database.connection.js"


export async function getCustomers (req, res) {
    
    try {
        const customers = await db.query(`SELECT * FROM customers;`)
        res.send(customers.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCustomersById (req, res) {
    const { id } = req.params
    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id=$1;`, [id])
        res.send(customer.rows[0])
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createCustomer (req, res) {
    const { name, phone, cpf, birthday } = req.body

    const customerTreatment = await db.query(`SELECT * FROM customers WHERE name=$1`, [name])
    if (customerTreatment.rows[0] === "") return res.sendStatus(400)

    const customerTreatmentCPF = await db.query(`SELECT * FROM customers WHERE cpf=$1`, [cpf])
    if (customerTreatmentCPF.rows[0]) return res.sendStatus(409)

    try {
        db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`
        , [name, phone, cpf, birthday])
           //$1  //$2  //$3   //$4
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateCustomer (req, res) {
    try {
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}


