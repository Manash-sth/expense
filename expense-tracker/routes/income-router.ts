import express from "express"
import income from "../controller/income-controller"

const income_routes = express.Router()

income_routes.post('/add_income', income.add_income)
income_routes.delete('/del_income', income.del_income)

export default income_routes