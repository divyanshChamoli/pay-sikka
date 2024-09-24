import { useEffect, useState } from "react"
import Heading from "../Components/Heading"
import UserIcon from "../Components/UserIcon"
import axios from "axios"

export default function Appbar(){
    const [username, setUsername]=useState("")
    
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/username",{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")    
            }
        })
        .then((res)=>{
            setUsername(res.data.username)
        })
    },[])
    
    return(
        <div className="flex sm:justify-between justify-center px-5 py-5 shadow-md">
            <Heading label="PaySikka"/>
            <div className=" sm:block hidden">
                <span className="px-2 font-semibold text-lg">Hello, {username}</span>
                <UserIcon label="U"/>
            </div>
        </div>
    )
}