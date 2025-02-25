import "./RecoverPasswordCard.css"
import { useRef, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export function RecoverPasswordCard() {
    const emailRef = useRef<HTMLInputElement>(null)
    const otpRef = useRef<HTMLInputElement>(null)
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    async function GenerateOTP() {
        try{
            await axios.post(`${BACKEND_URL}/generate-otp`, {
                email: emailRef.current?.value
            })
            setErrorState(false)
        } catch (err: any) {
            setErrorState(true)
            setErrorMessage(err.response.data.message)
        }
    }

    async function VerifyOTP() {
        try{
            await axios.post(`${BACKEND_URL}/verify-otp`, {
                email: emailRef.current?.value,
                otp: otpRef.current?.value
            })
            navigate("/reset-password", {state: {email: emailRef.current?.value}})
        } catch (err: any) {
            setErrorState(true)
            setErrorMessage(err.response.data.message)
        }
    }
    
    return(
        <>
            <div>
                <h1>Recover your Password using OTP</h1>
            </div>
            <div className="w-90 h-70 flex flex-col justify-center gap-4 border p-6 rounded-md">
                {errorState && <h3>{errorMessage}</h3>}
                <div className="flex justify-between" > 
                    <input ref={emailRef} className="h-8 border rounded-sm" type="text" placeholder="Email for OTP"></input>
                    <button onClick={GenerateOTP} className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Send OTP</button>
                </div>
                
                <input ref={otpRef} className="h-8 border rounded-sm" type="text" placeholder="Enter OTP"></input>
                <br />
                <button onClick={VerifyOTP} className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Submit</button>
            </div>
        </>
    )
}