// import React from 'react';
// import './Login.css';

// const Login = () => {
//     const handleUserLogin = () => {
//         window.location.href = '/user-login';
//     };

//     const handleAdminLogin = () => {
//         window.location.href = '/admin-login';
//     };

//     return (
//         <div className="video-background">
//             <video autoPlay muted loop className="background-video">
//                 <source src="/120172-720504774.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//             <div className="min-h-screen flex flex-col items-center justify-center bg-overlay text-white">
//                 <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logo mb-8" />
//                 <div className="w-full md:w-1/2 p-5 flex flex-col items-center bg-dark rounded-lg shadow-lg">
//                     <h1 className="text-2xl md:text-3xl mb-4 text-center"><i>Welcome! Please choose your login type</i></h1>
//                     <div className="w-full flex flex-col items-center space-y-4">
//                         <button
//                             className="w-3/4 p-3 md:p-5 bg-blue-custom rounded-lg text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
//                             onClick={handleUserLogin}
//                         >
//                             User Login
//                         </button>
//                         <button
//                             className="w-3/4 p-3 md:p-5 bg-indigo-custom rounded-lg text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
//                             onClick={handleAdminLogin}
//                         >
//                             Admin Login
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React from 'react';
import './Login.css';
import videoBg from '../assets/120172-720504774.mp4'

const Login = () => {
    const handleUserLogin = () => {
        window.location.href = '/user-login';
    };

    const handleAdminLogin = () => {
        window.location.href = '/admin-login';
    };

    return (
        <div >
            <video src={videoBg} autoPlay loop muted className="background-video"/>

          
            <div className="overlay1">
                <div className="min-h-screen flex flex-col items-center justify-center text-white">
                   
                    <div className="w-full md:w-1/2 p-5 flex flex-col items-center  rounded-lg shadow-lg">
                    <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logo mb-8" />
                        <h1 className="text-2xl md:text-3xl mb-4 text-center"><i>Welcome! Please choose your login type</i></h1>
                        <div className="w-full flex flex-col items-center space-y-4">
                            <button
                                className="w-3/4 p-3 md:p-5 bg-blue-custom rounded-lg text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                                onClick={handleUserLogin}
                            >
                                User Login
                            </button>
                            <button
                                className="w-3/4 p-3 md:p-5 bg-indigo-custom rounded-lg text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                                onClick={handleAdminLogin}
                            >
                                Admin Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
