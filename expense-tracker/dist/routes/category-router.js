"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("../controller/category-controller"));
const category_routes = express_1.default.Router();
category_routes.post("/add_category", category_controller_1.default.add_category);
category_routes.get("/categories", category_controller_1.default.all_category);
exports.default = category_routes;
