import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Buttons } from "../components/Buttons"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
// import { axios } from "axios"
import axios from "axios"

export const Signup = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
         <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <Heading label= {"Sign up"}></Heading>
            <SubHeading label = {"Enter your information to create an account"}></SubHeading>

            <InputBox onChange={(e)=>{
                setFirstName(e.target.value)
            }} placeholder="John" label={"First Name"}></InputBox>

            <InputBox onChange={e =>{
                setLastName(e.target.value)
            }} placeholder="Doe" label={"Last Name"}></InputBox>

            <InputBox onChange={e =>{
                setUsername(e.target.value)
            }} placeholder="harkirat1234@gmail.com" label={"Email"}></InputBox>

            <InputBox onChange={e =>{
                setPassword(e.target.value)
            }} placeholder="123456" label={"Password"}></InputBox>
            
            <div className="pt-4">
                <Buttons onClick={async()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.setItem("token", response.data.token);
             }} label={"Sign up"}></Buttons> 
            </div>
            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
        </div>       
        </div>
    </div>
}