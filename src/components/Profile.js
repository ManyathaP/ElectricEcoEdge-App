// // src/components/Profile.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = ({ profilePicture, name, email, bio,phone }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="flex flex-col items-center bg-gray-900 text-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
//             <div className="relative">
//                 <img 
//                     className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
//                     src={profilePicture}
//                     alt={`${name}'s profile`}
//                 />
//                 <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full w-6 h-6"></div>
//             </div>
//             <h3 className="text-center mt-4">{name}</h3>
//                  <p className="text-center">{email}</p>
//                <p className="text-center">{phone}</p>
              
//                <button onClick={() => navigate('/edit-profile')} className="btn btn-primary mt-4">Edit Profile</button>
//         </div>
//     );
// };

// export default Profile;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ profilePicture = '/path/to/profile.jpg', name = 'John Alex', email = 'finalui@yandex.com', phone = 'Phone', about = 'About person', status = 'Status' }) => {
    const navigate = useNavigate();

    return (
        <div className="profile-container bg-gray-900 text-white">
            <div className="profile-header flex justify-between items-center p-4">
                <h2 className="text-2xl">Profile</h2>
                
            </div>
            <div className="profile-content p-4">
                <img src={profilePicture} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
                <h3 className="text-center mt-4">{name}</h3>
                <p className="text-center">{email}</p>
                <p className="text-center">{phone}</p>
                <p className="text-center">{about}</p>
                <p className="text-center">{status}</p>
                <button onClick={() => navigate('/edit-profile')} className="btn btn-primary mt-4">Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;


// src/components/Profile.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = ({ profilePicture, name, email, bio, phone }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="flex flex-col items-center bg-gray-900 text-white shadow-lg rounded-lg p-6 max-w-sm mx-auto">
//             <div className="relative">
//                 <img 
//                     className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
//                     src={profilePicture}
//                     alt={`${name}'s profile`}
//                 />
//                 <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white rounded-full w-6 h-6"></div>
//             </div>
//             <h3 className="text-center mt-4">{name}</h3>
//             <p className="text-center">{email}</p>
//             <p className="text-center">{phone}</p>
//             <button onClick={() => navigate('/edit-profile')} className="btn btn-primary mt-4">Edit Profile</button>
//         </div>
//     );
// };

// export default Profile;

