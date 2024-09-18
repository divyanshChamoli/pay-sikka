import Heading from "../Components/Heading";
import InputBox from "../Components/InputBox";

export default function SendMoney(){
    return(
        <div className="h-screen w-screen flex justify-center items-center bg-zinc-100">
            <div className="h-80 w-96 shadow-lg bg-white rounded-md">
                <div className=" text-3xl font-bold text-center px-10 py-8 ">
                    Send Money
                </div>
                <div className="flex flex-col p-8">
                    <div>
                        <button className="rounded-full bg-green-500 h-10 w-10 text-zinc-100 text-xl ">A</button>
                        <span className="font-bold text-xl px-4">Friend's Name</span>
                    </div>
                    <InputBox placeholder="Enter Amount" label="Amount (in Rs)" value="" onChange={()=>{}}/>
                    <button className="w-full h-10 bg-green-500 text-white rounded-md">Initiate transfer</button>
                </div>
            </div>
        </div>
    )
}