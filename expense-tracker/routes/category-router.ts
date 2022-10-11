import express from "express"
import category from "../controller/category-controller"

const category_routes = express.Router()

category_routes.post("/add_category", category.add_category)
category_routes.get("/categories", category.all_category)

export default category_routes