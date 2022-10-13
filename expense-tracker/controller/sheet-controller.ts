import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface item {
    amount?: GLfloat
    source?: String
    category?: Object
}

const total = (arr:Array<Object>)=>{
    var tot:GLfloat = 0
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
        const tota = total(income) - total(expense)

        res.status(200).json({
            msg: "success",
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