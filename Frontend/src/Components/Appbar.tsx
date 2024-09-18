import Heading from "../Components/Heading"
import UserIcon from "../Components/UserIcon"


export default function Appbar(){
    return(
        <div className="flex sm:justify-between justify-center px-5 py-5 shadow-md">
            <Heading label="PaySikka"/>
            <div className=" sm:block hidden">
                <span className="px-2 font-semibold text-lg">Hello, User</span>
                <UserIcon label="U"/>
            </div>
        </div>
    )
}