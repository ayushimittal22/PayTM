import { AppBar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Buttons } from "../components/Buttons"
import { Users } from "../components/Users"


export const Dashboard = ()=>{
    return (
      //   <div className="bg-gray-100 h-screen flex flex-col">
      //      <div className="flex justify-between h-max w-full py-2 border-2 border-gray-300">
      //          <div className="text-lg font-normal ml-4">
      //             PayTM App
      //          </div>
      //          <div className="grid grid-cols-2 justify-center items-center mr-4">
      //             <div className="col-span-1 text-lg font-normal">Hello</div>
      //             <div className="col-span-1 w-10 h-10 rounded-full bg-slate-500 text-gray-800 font-medium text-md pt-2 pl-3 ml-1">U</div>
      //          </div>
      //      </div>
      //      <div className="pt-8 font-medium text-2xl ml-2 pl-4">
      //           Your balance is Rs. 10,000
      //          </div>

      //       <div className="text-xl font-bold mt-6 ml-2 pl-4">
      //       Users
      //       </div>   
      //       <input type="text" className="w-[97vw] mx-auto py-1 mt-1 pl-2 bg-gray-100 border-2 border-gray-300 rounded-md" placeholder="Search users.."/>

      //       <div className="flex justify-between w-full py-2 mt-2">
      //          <div className="grid grid-cols-3 justify-center items-center ml-5">
      //          <div className="col-span-1 w-10 h-10 rounded-full bg-slate-500 text-gray-800 font-medium text-md pt-2 pl-4">A</div>   
      //          <div className="col-span-2 text-md font-normal">Ayushi Mittal</div>
      //          </div>
      //           <div className="mr-4">
      //          <Buttons label={"Send Money"}></Buttons>
      //          </div>
      //       </div>
      //   </div>
      <>
         <AppBar></AppBar>
         <div className="m-8">
           <Balance value={"10,000"}></Balance>
           <Users></Users>
         </div> 
      </>       
    )
}