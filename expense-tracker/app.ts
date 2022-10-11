import express, {Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config({path: "./.env"})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import user_routes from "./routes/user-route"
import category_routes from "./routes/category-router"

// app.use('/', (req:Request, res:Response)=>{
//     res.status(200).json({
//         type: "Expense tracker",
//         developer: "Manash Prajapati",
//         github: "https://github.com/Manash-sth"
//     })
// })

app.use('/user', user_routes)
app.use('/category',category_routes)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server started at port: ${port}`)
})