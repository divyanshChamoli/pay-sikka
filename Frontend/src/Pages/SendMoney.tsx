import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SendMoney(){
    const [amount, setAmount]= useState(0)
    const [error, setError] = useState("")
    
    const [searchParams] = useSearchParams()
    const name=searchParams.get("name") as string
    const id=searchParams.get("id")
    
    const navigate=useNavigate()
    
    const onClick=async ()=>{
        const res=await axios.post("http://localhost:3000/api/v1/account/transfer",{
            to: id,
            amount:amount
        },{
            headers:{
                Authorization:"Bearer " + localStorage.getItem("token")
            }
        })

        if(!res.data.Error){
            navigate("/dashboard")
        }

        if(res.data.Error){
            setError(res.data.Error)
        }
    }
    
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-zinc-100">
            <div className="h-80 w-96 shadow-lg bg-white rounded-md">
                <h2 className=" text-3xl font-bold text-center px-10 pt-12 pb-6">
                    Send Money
                </h2>
                <div className="flex flex-col p-8">
                    <div>
                        <button className="rounded-full bg-green-500 h-10 w-10 text-zinc-100 text-xl ">{name[0].toUpperCase()}</button>
                        <span className="font-bold text-xl px-4"> {name} </span>
                    </div>
                    <div>
                        <div className=" text-left text-sm font-bold ">Amount (in Rs)</div>
                        <input className=" border border-gray-400 w-full p-2 my-2 rounded-sm placeholder-neutral-500 " type="number" placeholder="Enter Amount" 
                        value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))}/>
                    </div>
                    <button className="w-full h-10 bg-green-500 text-white rounded-md" onClick={onClick} >Initiate transfer</button>
                    {error===""?<></>:<div className="text-red-600 font-bold text-sm">{error}!!</div>
                }
                </div>
            </div>
        </div>
    )
}