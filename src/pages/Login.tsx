
import { AuthProvider } from '../components/auth//auth-context-provider'
import Login from '../components/auth/loginForm'


function LoginPage() {

  return (
    <AuthProvider>

   <Login/>
    </AuthProvider>
  )
}

export default LoginPage
