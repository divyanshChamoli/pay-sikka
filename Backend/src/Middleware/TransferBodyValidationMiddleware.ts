import { NextFunction, Request, Response } from "express";
import { TransferBodySchema } from "../zod";


export default function TransferBodyValidationMiddleware(req: Request,res: Response, next: NextFunction){
    const transferBody=req.body
    const response=TransferBodySchema.safeParse(transferBody)
    if(!response.success){
        res.json({
            error: "Invalid inputs"
        })
        return
    }
    next()    
}