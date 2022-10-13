"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sheet_controller_1 = __importDefault(require("../controller/sheet-controller"));
const sheet_routes = express_1.default.Router();
sheet_routes.get('/my_income/:id', sheet_controller_1.default.my_income);
sheet_routes.get('/my_expense/:id', sheet_controller_1.default.my_expense);
sheet_routes.get('/my_sheet/:id', sheet_controller_1.default.my_sheet);
exports.default = sheet_routes;
