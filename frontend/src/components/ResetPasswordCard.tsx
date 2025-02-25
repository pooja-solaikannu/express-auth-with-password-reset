import "./ResetPasswordCard.css"
import { useRef, useState } from "react"
import { useNavigate, useLocation  } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function ResetPasswordCard() {
    const newPasswordRef = useRef<HTMLInputElement>(null)
    const confirmNewPasswordRef = useRef<HTMLInputElement>(null)
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    async function UpdatePassword() {

        if(newPasswordRef.current?.value !== confirmNewPasswordRef.current?.value) {
            setErrorState(true)
            setErrorMessage("New Password and Confirm Password mismatch")
        }

        try{
            await axios.post(`${BACKEND_URL}/update-password`, {
                email: location.state.email || null,
                newpassword: newPasswordRef.current?.value
            })
            navigate("/login")
        } catch (err: any) {
            setErrorState(true)
            setErrorMessage(err.response.data.message)
        }
    }

    return(
        <>
            <div>
                <h1>Reset Password</h1>
            </div>
            <div className="flex flex-col w-70 h-70 justify-center items-center gap-4 border rounded-md">
                {errorState && <h3>{errorMessage}</h3>}
                <input ref={newPasswordRef} className="h-8 border rounded-sm" type="text" placeholder="New Password"></input>
                <input ref={confirmNewPasswordRef} className="h-8 border rounded-sm" type="text" placeholder="Confirm New Password"></input>
                <br />
                <button onClick={UpdatePassword} className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Submit</button>
            </div>
        </>
    )
}