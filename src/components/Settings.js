import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-container bg-gray-900 text-white p-4">
            <h2 className="text-2xl mb-4">Settings</h2>
            <ul>
                <li onClick={() => navigate('/edit-profile')}>Edit Profile</li>
                <li onClick={() => navigate('/login-security')}>Login & Security</li>
                <li>Notifications</li>
                <li>Appearance</li>
                <li>Languages</li>
                <li>Integrations</li>
                <li>Help & Support</li>
                <li>Log Out</li>
            </ul>
        </div>
    );
};

export default Settings;
