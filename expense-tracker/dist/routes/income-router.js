"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const income_controller_1 = __importDefault(require("../controller/income-controller"));
const income_routes = express_1.default.Router();
income_routes.post('/add_income', income_controller_1.default.add_income);
income_routes.delete('/del_income', income_controller_1.default.del_income);
exports.default = income_routes;
