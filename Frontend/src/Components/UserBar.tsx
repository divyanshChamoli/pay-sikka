import { useNavigate } from "react-router-dom"
import Button from "./Button"
import UserIcon from "./UserIcon"

interface UserBar{
    userIconLabel: string,
    firstName: string
    id: string
}

export default function UserBar({userIconLabel, firstName, id}: UserBar){
    const navigate= useNavigate()
    
    const onClick=()=>{
        navigate(`/send?id=${id}&name=${firstName}`)
    }    
    
    return(
        <div className="flex justify-between pb-1 px-4">
            <div> 
                <UserIcon label={userIconLabel} /> 
                <span className="font-bold text-lg ps-3 " > {firstName} </span>
            </div>
            <div className="w-32">
                <Button placeholder="Send Money" onClick={onClick}/>
            </div>
        </div>
    )
}