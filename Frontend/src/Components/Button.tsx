interface Button{
    placeholder: string
}

export default function Button({placeholder}: Button){
    return(
        <button type="button" className="text-white bg-black hover:bg-gray-900 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2">{placeholder}</button>
    )
}