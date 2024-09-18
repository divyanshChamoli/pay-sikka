import Appbar from "../Components/Appbar"
import BalanceBar from "../Components/BalanceBar"
import InputBox from "../Components/InputBox"
import UserBar from "../Components/UserBar"

export default function Dashboard(){    
    return(

        <div>
            <Appbar/>
            <BalanceBar/>
            <div className="p-4">
                <div className=" text-xl font-bold">Users</div>
                <InputBox label="" placeholder="Search users..." value="" onChange={()=>{}}   />
            </div>
            <UserBar userIconLabel="U1" username="User 1" />
            <UserBar userIconLabel="U2" username="User 2" />
            <UserBar userIconLabel="U3" username="User 3" />
        </div>
    )
}