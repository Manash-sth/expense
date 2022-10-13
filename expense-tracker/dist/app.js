"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config({ path: "./.env" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, helmet_1.default)());
const user_route_1 = __importDefault(require("./routes/user-route"));
const category_router_1 = __importDefault(require("./routes/category-router"));
const income_router_1 = __importDefault(require("./routes/income-router"));
const expense_route_1 = __importDefault(require("./routes/expense-route"));
const sheet_router_1 = __importDefault(require("./routes/sheet-router"));
// app.use('/', (req:Request, res:Response)=>{
//     res.status(200).json({
//         type: "Expense tracker",
//         developer: "Manash Prajapati",
//         github: "https://github.com/Manash-sth"
//     })
// })
app.use('/user', user_route_1.default);
app.use('/category', category_router_1.default);
app.use('/income', income_router_1.default);
app.use('/expense', expense_route_1.default);
app.use('/sheet', sheet_router_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server started at port: ${port}`);
});
