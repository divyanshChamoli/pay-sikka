import { Express, Router } from "express"
import { connectToDB, User } from "./db"

const express=require("express")
const app: Express=express()
const signup=require("./Routes/signup")

connectToDB()

app.use("/",signup)

app.listen(3000,()=>{
    console.log("Listening")
})
