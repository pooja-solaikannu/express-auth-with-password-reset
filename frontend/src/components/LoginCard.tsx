import { useRef, useState } from "react" 
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export function LoginCard() {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    async function SignIn() {
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        try {
            const response = await axios.post(`${BACKEND_URL}/sign-in`, {
                email: email,
                password: password
            })
            navigate("/")
        } catch (err: any) {
            setErrorState(true)
            setErrorMessage(err.response.data.message)
        }    
    }

    return (
        <>
        <div>
            <span>Login Page</span>
        </div>
        <div className="w-70 h-70 flex flex-col gap-4 justify-center items-center border rounded-md">
            {errorState && <h1>{errorMessage}</h1>}
            <input ref={emailRef} className="h-8 border rounded-sm" type="text" placeholder="Email"></input>
            <input ref={passwordRef} className="h-8 border rounded-sm" type="text" placeholder="Password"></input>
            <br />
            <button onClick={SignIn} className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Login</button>
            <div className="position-right">
            <a className="position-right" href="/recover-password">Forgot password?</a>
            </div>
        </div>
        </>
    )
}