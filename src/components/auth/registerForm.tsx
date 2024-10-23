import React, { useState } from 'react';
import { useAuth } from './auth-context-provider';

const RegisterForm: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Simulando a criação de um usuário
        const newUser = { id: Date.now(), email };
        
        // Chamando a função de login do contexto
        login(newUser);
        
        // Limpar o campo de e-mail após o registro
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default RegisterForm;
