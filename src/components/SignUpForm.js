import React, { useState } from 'react';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        const userData = {
            name: name,
            email: email,
            password: password
        };

        sendDataToServer(userData)
            .then(response => {
                console.log('User signed up successfully:', response);
            })
            .catch(error => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

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

                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;
