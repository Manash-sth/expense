import { Request, Response, NextFunction, } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface user {
    fullname: string
    email: string
    password: string
}

const user_signup = async(req:Request, res:Response, next:NextFunction)=>{
    const body = req.body

    try{
        if(body.password != body.repassword && body.password.length <= 8){
            throw Error("passwords should match and length should me more than 8")
        }
        await prisma.user.create({
            data: {
                fullname: body.fullname,
                email: body.email,
                password: body.password
            }
        })

        res.status(200).json({
            "msg": "new user created"
        })

    }catch(err){
        console.log(err)
        
        res.status(400).json({"err": "error"})
        // next(err)
    }
}

const user_login = async(req:Request, res:Response, next: NextFunction)=>{
    const body:user = req.body

    try{
        const user  = await prisma.user.findUnique({
            where: {
                email: body.email
            },
            select: {
                email: true,
                password: true
            }
        })

        if(user === null){
            res.status(400).json({
                msg: "wrong email or password"
            })
            return 0
        }

        if (body.password !== user?.password){
            res.status(400).json({
                msg: "wrong email or password"
            })
            return 0
        }
        console.log(user)

        res.status(200).json({
            "msg": "new user logged in"
        })

    }catch(err){
        console.log(err)
        
        res.status(400).json({"err": "error"})
        // next(err)
    }
}

export default {user_signup, user_login}