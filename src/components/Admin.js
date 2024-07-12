

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard';
import CustomerService from '../services/CustomerServices';
import './Authentication.css';
import videoBg from '../assets/120172-720504774.mp4'
import API_BASE_URL from '../api/api';

const Admin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [phone_no, setPhoneNo] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/api/v1/admins/login`, { email, password });
            console.log('Login successful', response.data);
            toast.success('Login successful!');
            setUser(response.data);
            navigate('/admin-dashboard'); // Navigate to the admin dashboard
        } 
            catch (error) {
                console.error('Login failed', error.response.data);
                toast.error('Invalid email or password');
            }
    };
    

    const handleSignUp = (e) => {
        e.preventDefault();

        const customer = { name, email, phone_no, location, password };

        CustomerService.createCustomer(customer)
            .then(() => {
                toast.success('Account created successfully!');
                setIsLogin(true);
            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed to create account');
            });
    };

    if (user) {
        return <Dashboard user={user} />;
    }

    return (

        <div>
        <video src={videoBg} autoPlay loop muted className="bg-vid background-video"/>
        <div className="overlay">
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
               
                <div className="w-full md:w-1/2 p-5 flex flex-col items-center  rounded-lg shadow-lg">
                <br/><br/><br/><br/><br/>
                 <div className="auth-container">
                 <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logo mb-8" />
                <div className="toggle-switch">
                    <button className={`toggle-button ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
                        Login
                    </button>
                    <button className={`toggle-button ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>
                        Sign Up
                    </button>
                </div>

                <div className="form-container">
                    {isLogin ? (
                        <>
                            <form onSubmit={handleLogin}>
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
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-3">Login</button>
                                <button
                                    type="button"
                                    className="btn btn-link w-100 mb-3"
                                    onClick={() => navigate('/forgot-password')}
                                >
                                    Forgot Password?
                                </button>
                            </form>
                            <div className="text-center mb-3">Or login with</div>
                            <div className="d-flex justify-content-around mb-3">
                                <FaFacebook size={32} style={{ cursor: 'pointer', color: 'white' }} />
                                <FaGoogle size={32} style={{ cursor: 'pointer', color: 'white' }} />
                                <FaTwitter size={32} style={{ cursor: 'pointer', color: 'white' }} />
                            </div>
                        </>
                    ) : (
                        <>
                            <form onSubmit={handleSignUp}>
                                <div className="form-group mb-2">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Phone No</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={phone_no}
                                        onChange={(e) => setPhoneNo(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 mb-3">Sign Up</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
        </div>
        </div>
        </div>
    );
};

export default Admin;
