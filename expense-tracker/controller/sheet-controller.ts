import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface item {
    amount?: number
    source?: String
    category?: Object
}

interface waha {
    amount?: number,
    source?: String,
    category?: Object,
    recorded: Date,
}

const total = (arr:Array<Object>)=>{
    var tot:number = 0
    arr.forEach((itm:item) => {   
        if(itm.amount){
            tot = tot + itm.amount
        }
    })
    return tot
}

const my_income = async(req: Request, res: Response, next:NextFunction)=>{
    const id = req.params.id
    try{
        const income = await prisma.income.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                source: true,
                category: true,
                recorded: true,
            },
        })

        const tota = total(income)
        
        console.log(tota)

        res.status(200).json({
            msg: "success",
            income,
            total: tota
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

const my_expense = async(req: Request, res: Response, next:NextFunction)=>{
    const id = req.params.id
    try{
        const expense = await prisma.expense.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                category: true,
                recorded: true,
            },
        })

        const tota = total(expense)
        
        console.log(tota)

        res.status(200).json({
            msg: "success",
            expense,
            total: tota
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

const my_sheet = async(req: Request, res: Response, next:NextFunction)=>{
    const id = req.params.id

    try{
        const income: Array<Object> = await prisma.income.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                source: true,
                category: true,
                recorded: true,
            },
        })

        const expense: Array<Object> = await prisma.expense.findMany({
            where: {
                userid: parseInt(id)
            },
            select: {
                amount: true,
                category: true,
                recorded: true,
            },
        })

        const a: any = income.concat(expense)

        console.log(a)

        const b = a.sort(function(v: waha, w: waha){
            var x = v.recorded
            var y = w.recorded
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })

        const tota = total(income) - total(expense)

        res.status(200).json({
            msg: "success",
            a,
            tota
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

export default {my_income, my_expense, my_sheet}