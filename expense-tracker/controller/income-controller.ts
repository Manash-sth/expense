import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const add_income = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    try{
        await prisma.income.create({
            data:{
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
        })

        res.status(200).json({
            msg: "income added"
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            err: "error"
        })
    }
}

const del_income = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    try{
        await prisma.income.delete({
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

export default {add_income, del_income}