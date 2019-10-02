import React, { useState } from 'react';
import api from '../../services/api'

export default function Login({  history })
{
    const [email, setEmail] = useState('');

    async function handleSubmit(event)
    {
        event.preventDefault(); //Previne o funcionamento padrão, ou seja de dar reload na página
        
        const response = await api.post('/sessions', { email });

        const { _id } = response.data;

        localStorage.setItem('user', _id); // Savala o id dentro de uma variável do navegador

        history.push('/dashboard');
    }
    return (
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>

            <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} /* Função que recebe o evento e retorna o valor de email */
            />

            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}