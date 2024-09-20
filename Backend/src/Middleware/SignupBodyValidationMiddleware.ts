import { Request, Response, NextFunction } from "express"
import { SignupBodySchema } from "../zod"

export default function SignupBodyValidationMiddleware(req: Request,  res:Response, next: NextFunction){
    const signupBody=req.body
    const result=SignupBodySchema.safeParse(signupBody)
    if(!result.success){
        res.json({
            message: "Provide valid inputs"
        })
        return;
    }
    next()
}