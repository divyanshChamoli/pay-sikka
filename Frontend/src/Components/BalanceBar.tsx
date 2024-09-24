import axios from "axios"
import { useEffect, useState } from "react"

export default function BalanceBar(){

    const [balance, setBalance]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer " + localStorage.getItem("token")
            }
        })
        .then((res)=>{
            setBalance(res.data.balance)
        })
    },[])
    
    return(
        <div className="flex p-5">
            <div className="font-extrabold text-lg ">Your Balance</div>
            <div className="font-bold text-lg ps-3">₹{balance}</div>
        </div>
    )
}