import Button from "./Button"
import UserIcon from "./UserIcon"

interface UserBar{
    userIconLabel: string,
    username: string
}

export default function UserBar({userIconLabel, username}: UserBar){
    const onClick=()=>{
        console.log("Click")
    }    
    
    return(
        <div className="flex justify-between pb-1 px-4">
            <div> 
                <UserIcon label={userIconLabel} /> 
                <span className="font-bold text-lg ps-3 " > {username} </span>
            </div>
            <Button placeholder="Send Money" onClick={onClick}/>
        </div>
    )
}