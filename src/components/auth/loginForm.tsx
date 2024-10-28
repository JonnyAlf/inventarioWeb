import React, { useState } from 'react';
import { useAuth } from './auth-context-provider';


const Login: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Aqui você deve substituir pela lógica real de autenticação
        const userData = { id: 1, email }; // Exemplo de dados do usuário
        login(userData);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        placeholder='E-mail'
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>         
                    <input
                        placeholder='Senha'
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Entrar</button>

                <div className="singup-link">
                    <p>Não possui conta? <a href="/register">Registre-se</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
