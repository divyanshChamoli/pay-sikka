import mongoose, { Types } from "mongoose"
import { Schema, model } from "mongoose"

export const connectToDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://divyanshchamoli:wxvn7144@cluster0.qrzriqj.mongodb.net/pay-sikka")
        console.log("Db connected")
    }
    catch(err){
        console.log(err)
    }
}
// connectToDB()

export interface User{
    firstName: string,
    lastName: string,
    password: string,
    username: string
}

const UserSchema=new Schema<User>({
    firstName: String,
    lastName: String,
    password: String,
    username: String,
})

export const User= model<User>("User", UserSchema)

interface Account{
    balance: number,
    userId: Types.ObjectId
}  

const AccountSchema =new Schema<Account>({
    balance: Number,
    userId: {   
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Account=new mongoose.Model("Account", AccountSchema)


