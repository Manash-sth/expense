"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const user_signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        if (body.password != body.repassword && body.password.length <= 8) {
            throw Error("passwords should match and length should me more than 8");
        }
        yield prisma.user.create({
            data: {
                fullname: body.fullname,
                email: body.email,
                password: body.password
            }
        });
        res.status(200).json({
            "msg": "new user created"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "err": "error" });
        // next(err)
    }
});
const user_login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                email: body.email
            },
            select: {
                email: true,
                password: true
            }
        });
        if (user === null) {
            res.status(400).json({
                msg: "wrong email or password"
            });
            return 0;
        }
        if (body.password !== (user === null || user === void 0 ? void 0 : user.password)) {
            res.status(400).json({
                msg: "wrong email or password"
            });
            return 0;
        }
        console.log(user);
        res.status(200).json({
            "msg": "new user logged in"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ "err": "error" });
        // next(err)
    }
});
exports.default = { user_signup, user_login };
