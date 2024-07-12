import React, { useState } from 'react';

const EditProfile = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [about, setAbout] = useState('');

    const handleSave = () => {
        // Save profile logic here
        console.log('Profile saved');
    };

    return (
        <div className="edit-profile-container bg-gray-900 text-white p-4">
            <h2 className="text-2xl mb-4">Edit Profile</h2>
            <form>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Birthday</label>
                    <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>About Me</label>
                    <textarea value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </div>
                <button type="button" onClick={handleSave} className="btn btn-primary mt-4">Save</button>
            </form>
        </div>
    );
};

export default EditProfile;
