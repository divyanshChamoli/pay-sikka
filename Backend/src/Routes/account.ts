import { Response, Router } from "express";
import { Request } from "express";
import { Account, User } from "../db";
import TransferBodyValidationMiddleware from "../Middleware/TransferBodyValidationMiddleware";
import { TransferBodyType } from "../zod";
import AuthenticationMiddleware from "../Middleware/AuthenticationMiddleware";
import { Types } from "mongoose";

const router=Router()

router.get("/balance",async (req: Request , res: Response)=>{
    const userId=res.locals.userId
    try{
        const account=await Account.findOne({_id: userId})
        if(!account){
            throw new Error("Balance not found")
        }
        res.json({
            balance:account.balance 
        })
    }
    catch(err){
        res.json({
            Error: err
        })
    }
})

router.post("/transfer",AuthenticationMiddleware ,TransferBodyValidationMiddleware,async (req: Request, res: Response)=>{
    //Bad method but works
    const {to, amount} = req.body
    console.log(to,amount)
    const userId = res.locals.userId
    console.log(userId)
    try{
        const sender = await Account.findOne({userId})
        if(!sender){
            throw new Error("Sender not found")
        }
        if(amount>sender.balance){
            throw new Error("Insufficient balance")
        }
        const reciever=await User.findById(to)
        if(!reciever){
            throw new Error("Invalid account")
        }
        const senderAccount= await Account.findOneAndUpdate({userId},{$inc: {balance: -amount}})
        console.log(senderAccount)
        const recieverAccount=await Account.findOneAndUpdate({userId: to},{$inc: {balance: amount}})
        console.log(recieverAccount)
        if(!senderAccount || !recieverAccount){
            throw new Error("Transaction failed")
        }
        res.json({
            message : "Transfer successful"
        })
    }
    catch(e){
        res.json({
            Error : e
        })
    }
})

module.exports= router