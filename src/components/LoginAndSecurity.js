import React, { useState } from 'react';

const LoginAndSecurity = () => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = () => {
        // Change password logic here
        console.log('Password changed');
    };

    return (
        <div className="login-security-container bg-gray-900 text-white p-4">
            <h2 className="text-2xl mb-4">Login & Security</h2>
            <form>
                <div className="form-group">
                    <label>Enter Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" onClick={handlePasswordChange} className="btn btn-primary mt-4">Continue</button>
            </form>
        </div>
    );
};

export default LoginAndSecurity;

