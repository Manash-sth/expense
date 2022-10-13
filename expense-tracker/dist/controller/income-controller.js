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
const add_income = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        yield prisma.income.create({
            data: {
                amount: body.amount,
                source: body.source,
                category: {
                    connect: {
                        id: body.category
                    }
                },
                user: {
                    connect: {
                        id: body.user
                    }
                }
            }
        });
        res.status(200).json({
            msg: "income added"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: "error"
        });
    }
});
const del_income = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        yield prisma.income.delete({
            where: {
                id: body.id
            }
        });
        res.status(200).json({
            msg: "item deleted"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: "error"
        });
    }
});
// const upd_income = async(req:Request, res:Response, next:NextFunction)=>{
//     const body = req.body
//     try{
//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             err: "error"
//         })
//     }
// }
exports.default = { add_income, del_income };
