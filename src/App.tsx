
import './App.css'
import { AuthProvider } from './components/auth//auth-context-provider'
import Login from './components/auth/loginForm'


function App() {

  return (
    <AuthProvider>

   <Login/>
    </AuthProvider>
  )
}

export default App
