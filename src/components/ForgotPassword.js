import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8090/api/v1/auth/forgot-password', { email });
            console.log('Forgot Password successful', response.data);
            toast.success('Password reset email sent!');
        } catch (error) {
            console.error('Forgot Password failed', error.response.data);
            toast.error('Failed to send password reset email');
        }
    };

    return (
        <div className="background-container1">
            <div className="forgot-password-container">
                <h2 className="text-center mb-4">Forgot Password</h2>
                <form onSubmit={handleForgotPassword}>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Reset Email</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
