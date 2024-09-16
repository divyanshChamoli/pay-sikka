interface InputBox{
    label: string,
    placeholder: string,
    type?: string
}

const defaultProps={
    type: "text"
}

export default function InputBox({label,placeholder,type}: InputBox & Partial<typeof defaultProps>){
    return(
        <>
            <div className=" text-left text-sm font-bold ">{label}</div>
            <input className=" border border-gray-400 w-full p-1 my-2 rounded-sm" type={type} placeholder={placeholder}/>
        </>
    )
}