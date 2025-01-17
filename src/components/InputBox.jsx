
export function InputBox({placeholder, label , onChange}){
    return(
        <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange= {onChange} type="text" placeholder= {placeholder} className="w-full px-2 py-1 border-2"/>
        </div>
    )
}