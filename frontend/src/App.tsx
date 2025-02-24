import './App.css'
import { LoginCard } from './components/LoginCard'
import { ResetPassword } from './components/ResetPassword'
import { RecoverPasswordCard } from './components/RecoverPasswordCard'

function App() {

  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center'>
      <LoginCard />
      <RecoverPasswordCard />
      <ResetPassword />
      
    </div>

    </>
  )
}

export default App
