import "./RecoverPasswordCard.css"

export function RecoverPasswordCard() {
    return(
        <div className="w-90 h-70 flex flex-col justify-center gap-4 border p-6">
            <h3>Recover password using OTP</h3>
            <div className="flex justify-between" > 
                <input className="h-8 border rounded-sm" type="text" placeholder="Email for OTP"></input>
                <button className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Send OTP</button>
            </div>
            
            <input className="h-8 border rounded-sm" type="text" placeholder="Enter OTP"></input>
            <br />
            <button className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Submit</button>
        </div>
    )
}