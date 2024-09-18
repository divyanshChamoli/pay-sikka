interface Usericon{
    label: string
}

export default function UserIcon({label}:Usericon){
    return <button className="h-9 w-9  rounded-full bg-zinc-300  font-medium"> {label} </button>
}