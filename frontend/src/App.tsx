import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import RecoverPassword from "./pages/RecoverPassword"
import ResetPassword from "./pages/ResetPassword"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/recover-password" element={<RecoverPassword />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
