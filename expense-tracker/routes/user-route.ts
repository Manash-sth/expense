import express from "express"
import user from "../controller/user-controller"

const user_routes = express.Router()

user_routes.post("/signup", user.user_signup)
user_routes.post("/login", user.user_login)

export default user_routes