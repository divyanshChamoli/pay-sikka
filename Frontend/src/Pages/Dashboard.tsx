import { useEffect, useState } from "react"
import Appbar from "../Components/Appbar"
import BalanceBar from "../Components/BalanceBar"
import InputBox from "../Components/InputBox"
import UserBar from "../Components/UserBar"
import axios from "axios"

interface User{
    firstName: string,
    lastName: string,
    _id: string,
    username: string
}
export default function Dashboard(){    
    
    const [users, setUsers]=useState<User[]>([])
    const [filter, setFilter]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
        .then((res)=>{
            console.log(res.data.users)
            setUsers(res.data.users)
        })
    },[filter])

    
    return(

        <div>
            <Appbar/>
            <BalanceBar/>
            <div className="p-4">
                <div className=" text-xl font-bold">Users</div>
                <InputBox label="" placeholder="Search users..." value={filter} onChange={(e)=>{setFilter(e.target.value)}}   />
            </div>

            {
                users.map((user)=>{
                    return(
                        <UserBar key={user._id} userIconLabel={user.firstName[0].toUpperCase()} firstName={user.firstName} id={user._id} />
                    )
                })
            }
        </div>
    )
}