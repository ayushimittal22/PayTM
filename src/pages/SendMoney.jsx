import { Heading } from "../components/Heading"

export const SendMoney = ()=>{
    return <div className="bg-slate-300 flex justify-center h-screen">
      <div className="flex flex-col justify-center">
         <div className="bg-white h-max w-80 shadow-lg shadow-slate-200 rounded-lg text-center p-2 px-4">
            <Heading label={"Send Money"}></Heading>
            <div className="grid grid-cols-8 pt-8 mt-8 bg-white">
                <div className="col-span-1">
               <div className="rounded-full bg-green-600 text-white w-11 h-11 pt-2 font-medium">A</div>
                <div className="text-[10px] mb-3 pt-1 font-normal">
                 Amount(₹)
                </div>
            </div>
            <div className="col-span-4">
               <div className="text-lg font-semibold pl-2 mt-2">
                Friend's Name
               </div>
            </div>
            </div>
            <input className="w-full px-2 py-1 border-2 my-2" type="text" />
            <button className="w-full text-center py-2 mb-8 bg-green-600 text-white font-medium">Initiate Transfer</button>
         </div>
      </div>
    </div>
}