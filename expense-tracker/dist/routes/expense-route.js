"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_controller_1 = __importDefault(require("../controller/expense-controller"));
const expense_routes = express_1.default.Router();
expense_routes.post('/add_expense', expense_controller_1.default.add_expense);
expense_routes.delete('/del_expense', expense_controller_1.default.del_expense);
exports.default = expense_routes;
