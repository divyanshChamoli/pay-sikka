import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "../config";

export default function AuthenticationMiddleware(req: Request, res: Response, next: NextFunction){
    const authorization=req.headers.authorization;
    try{
        if(!authorization || !authorization.startsWith("Bearer ")){
            throw new Error("Invalid authorization header 1 ")
        }
        const token=authorization.split(' ')[1]
        if(!token){
            throw new Error("Invalid authorization header 2")
        }
        const payload=jwt.verify(token, JWT_SECRET) as JwtPayload;
        const userId=payload.userId 
        res.locals.userId=userId
        next()
    }
    catch(err){
        console.log(err)
        res.json({
            Error: err
        })
        return;
    }
}