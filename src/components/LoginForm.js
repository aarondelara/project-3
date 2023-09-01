import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        const loginData = {
            email: email,
            password: password
        };

        sendDataToServer(loginData)
            .then(response => {
                console.log('User logged in successfully:', response);
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
