import { Request, Response, NextFunction } from "express";
import { SigninBodySchema } from "../zod";

export default function SigninBodyValidationMiddleware(req: Request, res: Response, next: NextFunction ){
    const body=req.body
    const response=SigninBodySchema.safeParse(body)
    if(!response){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    next()
}