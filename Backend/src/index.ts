import { Express } from "express"
import { connectToDB } from "./db"
import cors from "cors"
const express=require("express")
const app: Express=express()
const rootRouter=require("./Routes/index")
connectToDB()

app.use(cors())
app.use(express.json())
app.use("/api/v1/",rootRouter)

app.listen(3000,()=>{
    console.log("Listening")
})
