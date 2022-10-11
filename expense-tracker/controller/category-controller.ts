import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const add_category = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    await prisma.category.create({
        data: {
            name: body.name,
        }
    })

    res.status(200).json({
        "msg": "new category added"
    })
}

const all_category = async(req:Request, res:Response, next:NextFunction)=>{
    const categories = await prisma.category.findMany()
    console.log(categories)

    res.status(200).json({
        categories
    })
}

export default {add_category, all_category}