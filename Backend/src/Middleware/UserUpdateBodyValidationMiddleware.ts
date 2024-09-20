import { Request, Response, NextFunction } from "express";
import { SigninBodySchema, UserUpdateBodySchema, UserUpdateBodyType } from "../zod";

export default function UserUpdateBodyValidationMiddleware(req: Request, res: Response, next: NextFunction ){
    const body:UserUpdateBodyType =req.body
    const response=UserUpdateBodySchema.safeParse(body)
    if(!response){
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    next()
}