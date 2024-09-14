import { Router, Request, Response } from "express";
import { User } from "../db";
import jwt from "jsonwebtoken"
import { SignupBodyValidationMiddleware } from "../Middleware/SignupBodyValidationMiddleware";
import { SignupBodyType } from "../zod";
import { JWT_SECRET } from "../config";

const router=Router()

router.post('/signup',SignupBodyValidationMiddleware , async (req: Request,res: Response)=>{
    const signupBody:SignupBodyType=req.body
    try{
        const userExists=await User.exists({username:signupBody.username})
        if(userExists){
            throw new Error("User exists")
        }
        const newUser=await User.create(signupBody)
        const userId=newUser._id
        const token=jwt.sign({userId},JWT_SECRET);
        res.json({
            message: "User created successfully",
            userId: userId,
            token: token
        })
    }
    catch(err){
        console.log(err)
        res.json({
            message: "Error"
        })
    }
})

module.exports= router