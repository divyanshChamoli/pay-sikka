import { useState } from "react"
import BottomWarning from "../Components/BottomWarning"
import Button from "../Components/Button"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import SubHeading from "../Components/SubHeading"
import axios from "axios"

interface SignupBodyType {
    firstName: string;
    lastName: string;
    password: string;
    username: string;
}

export default function Signup(){
    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")    
    
    const onClick=async ()=>{
        try{
            //No type safety
            const res=await axios.post('http://localhost:3000/api/v1/user/signup',{
                firstName,
                lastName,
                password,
                username: email
            })
            localStorage.setItem("token",res.data.token)
        }
        catch(e){
            console.log("Error",e)
        }
    }
    
    return (
        <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
            <div className=" bg-white h-[70%] w-80 rounded-lg flex justify-center items-center my-2">
                <div className="h-[92%] w-5/6 flex flex-col justify-evenly">
                    <Heading label="Sign Up"/>
                    <SubHeading label="Enter your information to create an account"/>
                    <InputBox label="First Name" placeholder="John" value={firstName} 
                        onChange={e=>setFirstName(e.target.value)}/>
                    <InputBox label="Last Name" placeholder="Doe" value={lastName}  
                        onChange={e=>setLastName(e.target.value)}/>
                    <InputBox label="Email" placeholder="johndoe@example.com" value={email} 
                        onChange={e=>setEmail(e.target.value) }/>
                    <InputBox label="Password" placeholder="" type="password" value={password} 
                        onChange={e=>setPassword(e.target.value)} />
                    <Button placeholder="Sign Up" onClick={onClick}/>
                    <BottomWarning label="Already have an account?" linkText="Sign In" linkTo="/signin"/>
                </div>
            </div>
        </div>
    )
}