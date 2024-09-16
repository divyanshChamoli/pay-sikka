interface Heading{
    label: string
}

export default function Heading({label}: Heading){
    return (
        // w-full flex justify-center pt-5 
        <div className=" font-bold text-4xl self-center ">
            {label}
        </div>
    )
}