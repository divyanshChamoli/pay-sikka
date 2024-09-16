import { Link } from "react-router-dom"

interface BottomWarning{
    label: string,
    linkTo: string
    linkText: string
}

export default function BottomWarning({label,linkTo,linkText}: BottomWarning){
    return(
        <div className=" text-sm text-slate-950 font-bold self-center">
            <span > {label} </span>
            <Link className=" underline" to={linkTo}>{linkText}</Link>
        </div>
    )
}