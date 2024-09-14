import { Router } from "express"
const signup=require("./signup")
const user=require("./user")

const router=Router()

router.use("/",signup)
router.use("/user",user)

module.exports=router
