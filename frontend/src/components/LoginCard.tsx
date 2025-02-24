

export function LoginCard() {
    return (
        <div className="w-70 h-70 flex flex-col gap-4 justify-center items-center border">
            <h3>Login</h3>
            <input className="h-8 border rounded-sm" type="text" placeholder="Username"></input>
            <input className="h-8 border rounded-sm" type="text" placeholder="Password"></input>
            <br />
            <button className="h-8 px-4 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800">Login</button>
            <div className="position-right">
            <a className="position-right" href="">Forgot password?</a>
            </div>
        </div>
    )
}