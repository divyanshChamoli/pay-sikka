import BottomWarning from "../Components/BottomWarning"
import Button from "../Components/Button"
import Heading from "../Components/Heading"
import InputBox from "../Components/InputBox"
import SubHeading from "../Components/SubHeading"


export default function Signup(){
    return (
        <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
            <div className=" bg-white h-[70%] w-80 rounded-lg flex justify-center items-center my-2">
                <div className="h-[92%] w-5/6 flex flex-col justify-evenly">
                    <Heading label="Sign Up"/>
                    <SubHeading label="Enter your information to create an account"/>
                    <InputBox label="First Name" placeholder="John"/>
                    <InputBox label="Last Name" placeholder="Doe"/>
                    <InputBox label="Email" placeholder="johndoe@example.com"/>
                    <InputBox label="Password" placeholder="" type="password"/>
                    <Button placeholder="Sign Up"/>
                    <BottomWarning label="Already have an account?" linkText="Sign In" linkTo="/signin"/>
                </div>
            </div>
        </div>
    )
}