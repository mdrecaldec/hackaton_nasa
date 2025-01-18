import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToContent, setRedirectToContent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí deberías hacer una llamada a tu backend para verificar usuario y contraseña
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            setRedirectToContent(true);
        } else {
            // Manejar errores de login
            alert('Credenciales incorrectas');
        }
    };

    if (redirectToContent) {
        return <Redirect to="/content" />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginForm;
