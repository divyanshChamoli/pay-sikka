import { Router, Request, Response } from "express"

const router=Router()

router.get('/signup',(req: Request, res: Response)=>{
    res.send("Routing works!")
})



module.exports=router

