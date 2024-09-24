import { useState } from "react"
import BottomWarning from "../Components/BottomWarning"
import Button from "../Components/Button"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import SubHeading from "../Components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signin(){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const navigate=useNavigate()
    
    const onClick= async ()=>{
        const res=await axios.post("http://localhost:3000/api/v1/user/signin",{
            username: email,
            password
        })

        localStorage.setItem("token", res.data.token)

        setEmail("")
        setPassword("")

        if(!res.data.Error){
            navigate("/dashboard")
        }
    }
    
    return (
        <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
            <div className=" bg-white h-96 w-80 rounded-lg flex justify-center items-center">
                <div className="h-[90%] w-5/6 flex flex-col justify-evenly">
                    <Heading label="Sign In"/>
                    <SubHeading label="Enter your credentials to access your account"/>
                    <InputBox label="Email" placeholder="johndoe@example.com" value={email} 
                        onChange={e=>setEmail(e.target.value)}/>
                    <InputBox label="Password" placeholder="" type="password" value={password}  
                        onChange={e=>setPassword(e.target.value)}/>
                    <Button placeholder="Sign in" onClick={onClick} />
                    <BottomWarning label="Don't have an account?" linkText="Sign Up" linkTo="/signup"/>
                </div>
            </div>
        </div>
    )
}