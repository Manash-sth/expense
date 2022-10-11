"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const user_route_1 = __importDefault(require("./routes/user-route"));
// app.use('/', (req:Request, res:Response)=>{
//     res.status(200).json({
//         type: "Expense tracker",
//         developer: "Manash Prajapati",
//         github: "https://github.com/Manash-sth"
//     })
// })
app.use('/user', user_route_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started at port: ${port}`);
});
