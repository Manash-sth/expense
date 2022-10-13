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
const total = (arr) => {
    var tot = 0;
    arr.forEach((itm) => {
        if (itm.amount) {
            tot = tot + itm.amount;
        }
    });
    return tot;
};
const my_income = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const income = yield prisma.income.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                source: true,
                category: true,
                recorded: true,
            },
        });
        const tota = total(income);
        console.log(tota);
        res.status(200).json({
            msg: "success",
            income,
            total: tota
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: "error"
        });
    }
});
const my_expense = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const expense = yield prisma.expense.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                category: true,
                recorded: true,
            },
        });
        const tota = total(expense);
        console.log(tota);
        res.status(200).json({
            msg: "success",
            expense,
            total: tota
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: "error"
        });
    }
});
const my_sheet = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const income = yield prisma.income.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                source: true,
                category: true,
                recorded: true,
            },
        });
        const expense = yield prisma.expense.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                category: true,
                recorded: true,
            },
        });
        const a = income.concat(expense);
        console.log(a);
        const b = a.sort(function (v, w) {
            var x = v.recorded;
            var y = w.recorded;
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
        const tota = total(income) - total(expense);
        res.status(200).json({
            msg: "success",
            a,
            tota
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err: "error"
        });
    }
});
exports.default = { my_income, my_expense, my_sheet };
