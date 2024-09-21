import { Router, Request, Response } from "express";
import { Account, User } from "../db";
import jwt from "jsonwebtoken"
import { SigninBodyType, SignupBodyType } from "../zod";
import { JWT_SECRET } from "../config";
import SignupBodyValidationMiddleware from "../Middleware/SignupBodyValidationMiddleware";
import AuthenticationMiddleware from "../Middleware/AuthenticationMiddleware";
import SigninBodyValidationMiddleware from "../Middleware/SigninBodyValidationMiddleware";

const router=Router()

router.post('/signup',SignupBodyValidationMiddleware , async (req: Request,res: Response)=>{
    const signupBody: SignupBodyType=req.body
    const randomBalance: number=1+Math.floor(Math.random()*10000)
    try{
        const userExists=await User.exists({username:signupBody.username})
        if(userExists){
            throw new Error("User exists")
        }
        const newUser=await User.create(signupBody)
        const userId=newUser._id
        const token=jwt.sign({userId},JWT_SECRET);

        const balance=await Account.create({userId, balance: randomBalance})
        if(!balance){
            throw new Error("User dummy account cant be created")
        }
        console.log("username", signupBody.username)
        console.log("token", token)
        res.json({
            message: "User created successfully",
            userId: userId,
            token: token
        })
    }
    catch(err){
        console.log(err)
        res.json({
            Error : err
        })
    }
})

router.post("/signin",SigninBodyValidationMiddleware ,async (req:Request ,res: Response)=>{
    const signinBody:SigninBodyType=req.body
    try{
        const user=await User.findOne(signinBody)
        if(!user){
            throw new Error()
        }
        const token=jwt.sign({userId: user._id},JWT_SECRET)
        res.json({
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

router.put("/user",AuthenticationMiddleware ,async (req: Request, res: Response)=>{
    const updateBody=req.body;
    const userId=res.locals.userId;
    try{
        const userUpdated=await User.findByIdAndUpdate(userId,{...updateBody})
        if(!userUpdated){
            throw new Error("Cannot update user")
        }
        res.json({
            message: "User updated successfully"
        })
    }
    catch(err){
        console.log("Error")
        res.json({
            message: "Error"
        })
    }
})

router.get("/bulk",async (req: Request, res: Response)=>{
    try{
        const filter=req.query.filter
        const users=await User.find({ $or: [{firstName: filter}, {lastName: filter}]})
        if(!users){
            throw new Error("Cannot get users")
        }
        const filteredUsers=users.map((user)=>{
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }
        })
        res.json({
            users: filteredUsers
        })
    }
    catch(err){
        res.json({
            Error: err
        })
    }
})

module.exports= router