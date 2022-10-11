"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user-controller"));
const user_routes = express_1.default.Router();
user_routes.post("/signup", user_controller_1.default.user_signup);
user_routes.post("/login", user_controller_1.default.user_login);
exports.default = user_routes;
