import express from "express"
import sheet from "../controller/sheet-controller"

const sheet_routes = express.Router()

sheet_routes.get('/my_income/:id', sheet.my_income)
sheet_routes.get('/my_expense/:id', sheet.my_expense)
sheet_routes.get('/my_sheet/:id', sheet.my_sheet)

export default sheet_routes