import React, { useState } from 'react';

function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Send signup data to the server
        // Handle user registration
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {/* Form for name, email, and password */}
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
}

export default SignUpForm;
