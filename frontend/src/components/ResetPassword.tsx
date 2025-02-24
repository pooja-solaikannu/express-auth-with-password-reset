import "./ResetPasswordCard.css"

export function ResetPassword() {
    return(
        <div className="flex flex-col w-70 h-70 justify-center items-center gap-4 border">
            <h3>Reset Password</h3>
            <input className="h-8 border rounded-sm" type="text" placeholder="Old Password"></input>
            <input className="h-8 border rounded-sm" type="text" placeholder="New Password"></input>
            <input className="h-8 border rounded-sm" type="text" placeholder="Confirm New Password"></input>
            <br />
            <button className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Submit</button>
        </div>
    )
}