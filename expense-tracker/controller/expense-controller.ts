import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const add_expense = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    try{
        await prisma.expense.create({
            data:{
                amount: body.amount,
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
        })

        res.status(200).json({
            msg: "expense added"
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

const del_expense = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    try{
        await prisma.expense.delete({
            where: {
                id: body.id
            }
        })
        res.status(200).json({
            msg: "item deleted"
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

// const upd_expense = async(req:Request, res:Response, next:NextFunction)=>{
//     const body = req.body

//     try{

//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             err: "error"
//         })
//     }
// }

export default {add_expense, del_expense}