import { BottomWarning } from "../components/BottomWarning"
import { Buttons } from "../components/Buttons"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
    return <div className="bg-slate-300 flex justify-center h-screen">
    <div className="flex flex-col justify-center">
      <div className="bg-white rounded-lg w-80 px-4 p-2 text-center h-max">
        <Heading label={"Sign in"}></Heading>
        <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
        <InputBox placeholder={"harkirat@gmail.com"} label={"Email"}></InputBox>
        <InputBox placeholder={"123456"} label={"Password"}></InputBox>
        <div className="pt-4">
          <Buttons label={"Sign in"}></Buttons>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
      </div>
    </div>
    </div>
}