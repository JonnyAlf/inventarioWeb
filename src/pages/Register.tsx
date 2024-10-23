
import './App.css'
import { AuthProvider } from '../components/auth//auth-context-provider'
import Register from '../components/auth/registerForm'


function RegisterPage() {

  return (
    <AuthProvider>

   <Register/>
    </AuthProvider>
  )
}

export default RegisterPage
