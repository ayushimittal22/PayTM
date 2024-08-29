
export function Buttons({label, onClick}){
    return (
        <button onClick={onClick} type="button" className="text-white bg-gray-800 px-6 py-2 rounded-md hover:bg-gray-900 focus:outline-none ">{label}</button>
    )
}