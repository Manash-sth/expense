import express from "express"
import expense from "../controller/expense-controller"

const expense_routes = express.Router()

expense_routes.post('/add_expense', expense.add_expense)
expense_routes.delete('/del_expense', expense.del_expense)

export default expense_routes