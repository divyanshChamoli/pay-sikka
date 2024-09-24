interface InputBox{
    label: string,
    placeholder: string,
    value:string
    type?: string
    onChange(e:React.ChangeEvent<HTMLInputElement>):void
}

const defaultProps={
    type: "text"
}

export default function InputBox({label,placeholder,type,value, onChange}: InputBox & Partial<typeof defaultProps>){
    return(
        <div>
            <div className=" text-left text-sm font-bold ">{label}</div>
            <input className=" border border-gray-400 w-full p-1 my-2 rounded-sm " type={type} placeholder={placeholder} 
             value={value} onChange={onChange}/>
        </div>
    )
}

// border border-gray-400 w-full p-2 my-2 rounded-sm placeholder-neutral-500 