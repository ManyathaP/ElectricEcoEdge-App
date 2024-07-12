

import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';
import DropdownMenu from './DropdownMenu';
import Logo from '../assets/Frame 1 (1).png';
import videoBg from '../assets/Video2.mp4';
import Anoun from '../assets/anouncement.png';

const Dashboard = ({ user }) => {
    const { name, profilePicture, feedbacks } = user;

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getInitials = (name) => {
        const nameArray = name.split(' ');
        const initials = nameArray.map(part => part[0].toUpperCase()).join('');
        return initials;
    };

    // const renderRecentActivities = () => {
    //     if (previousOrders && previousOrders.length > 0) {
    //         return previousOrders.map((order, index) => (
    //             <li key={index} className="mb-2 text-white">{`Ordered: ${order.itemName} - ${order.date}`}</li>
    //         ));
    //     } else {
    //         return <li className="mb-2 text-white">No previous orders</li>;
    //     }
    // };

    return (
//         <div className="min-h-screen flex flex-col">
//             <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
//                 <div className="menu-icon cursor-pointer" onClick={toggleMenu} >
//                     &#9776;
//                 </div>
//                 <div className="logo">
//                     <img src={Logo} alt="Logo" className="w-16 h-auto" />
//                 </div>
//                 <div ref={menuRef}>
//                     <DropdownMenu isOpen={menuOpen} onMenuItemClick={handleMenuItemClick} />
//                 </div>
//             </header>
//             <main className="flex-1 flex flex-col md:flex-row p-4">
//                 <div className="flex-1 bg-black p-6 text-white rounded-lg shadow-lg">
//                     <div className="flex flex-col md:flex-row justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
//                         <section className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//                             {profilePicture ? (
//                                 <img src={profilePicture} alt={`${name}'s profile`} className="w-24 h-24 rounded-full mb-4 shadow-md" />
//                             ) : (
//                                 <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-4">
//                                     {getInitials(name)}
//                                 </div>
//                             )}
//                             <h1 className="text-xl">{`Hello, ${name}!`}</h1>
//                         </section>
//                         <section className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center">
//                             <p className="text-md">Rewards Earned: <span className="font-bold text-yellow-400">{rewards}</span></p>
//                         </section><br/>
//                     </div>
//                     <section className="bg-blue-600 p-4 rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105">
//                         <h2 className="text-lg mb-2">Pickup Scheduled</h2>
//                         <div className="notification">
//                             {pickupScheduled ? (
//                                 <p className="flex items-center"><i className="icon mr-2">📅</i> You have a pickup scheduled on {pickupDate}.</p>
//                             ) : (
//                                 <p className="flex items-center"><i className="icon mr-2">📅</i> No pickup scheduled.</p>
//                             )}
//                         </div>
//                     </section>
//                 </div>
//                 <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
//                     <section className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
//                         <h2 className="text-lg mb-2">User Feedback</h2>
//                         <div className="feedback-content overflow-x-auto whitespace-nowrap flex space-x-4 py-2">
//                             {feedbacks && feedbacks.length > 0 ? (
//                                 feedbacks.map((feedback, index) => (
//                                     <div key={index} className="feedback-item bg-white shadow-lg rounded-lg p-4 flex-none w-56">
//                                         {feedback.profilePicture ? (
//                                             <img src={feedback.profilePicture} alt={`${feedback.name}'s profile`} className="w-10 h-10 rounded-full mb-2" />
//                                         ) : (
//                                             <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-lg font-bold mb-2">
//                                                 {getInitials(feedback.name)}
//                                             </div>
//                                         )}
//                                         <p className="text-gray-800">{feedback.text}</p>
//                                         <div className="text-yellow-500">
//                                             {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
//                                         </div>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p className="text-gray-600">No feedback available.</p>
//                             )}
//                         </div>
//                     </section>
//                     <section className="bg-gray-100 p-4 rounded-lg shadow-lg">
//                         <h2 className="text-lg mb-2">Submit Feedback</h2>
//                         <form>
//                             <div className="mb-4">
//                                 <label htmlFor="rating" className="block text-gray-700 mb-2">Rating</label>
//                                 <div className="flex space-x-1 text-yellow-500">
//                                     <span className="cursor-pointer">★</span>
//                                     <span className="cursor-pointer">★</span>
//                                     <span className="cursor-pointer">★</span>
//                                     <span className="cursor-pointer">★</span>
//                                     <span className="cursor-pointer">☆</span>
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <label htmlFor="feedback" className="block text-gray-700 mb-2">Feedback</label>
//                                 <textarea id="feedback" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
//                             </div>
//                             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit</button>
//                         </form>
//                     </section>
//                 </div>
//             </main>
//         </div>
//     );
// };


      <div className="overlay">
        <div className="min-h-screen flex flex-col">
          <header className="header1">
            <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
              &#9776;
            </div>
            <div>
              <img src={Logo} alt="Logo" className="logo-img" />
            </div>
            <div ref={menuRef}>
              <DropdownMenu isOpen={menuOpen} onMenuItemClick={handleMenuItemClick} />
            </div>
          </header>

        {/* <div className='tag' > <b><i><p style={{color:'black'}}>Recycling Made Easy:<img src={Anoun} alt="Logo"  style={{height:'50px',width:'50px',alignSelf:'center'}}/> Your E-Waste Solution</p></i></b>
        </div>  */}
        <br/>
        
                        <section className="circle p-4   flex flex-col items-center">
                           {profilePicture ? (
                                <img src={profilePicture} alt={`${name}'s profile`} className="w-24 h-24 rounded-full mb-4 shadow-md" />
                            ) : (
                                <div className=" rounded-full circle1 text-white flex items-center justify-center text-3xl font-bold ">
                                    {getInitials(name)}
                                </div>
                            )}
                            <h1 className="text-xl1">{`Hello, ${name}!`}</h1>
                        </section>

<div class="container2">
        <center><b><i><p style={{color:"black"}}>Recycling Made Easy:</p></i></b></center>
        <div class="tag">
        <img src={Anoun} alt="Logo"  style={{height:'50px',width:'50px',alignSelf:'center'}}/>
            <b><i><p style={{color: 'black', margin: 0}}>Your E-Waste Solution</p></i></b>
        </div>
        <div className="">
     <video src={videoBg} autoPlay loop muted/>
     </div>

     <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <section className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
                         <h2 className="text-lg mb-2">User Feedback</h2>
                         <div className="feedback-content overflow-x-auto whitespace-nowrap flex space-x-4 py-2">
                             {feedbacks && feedbacks.length > 0 ? (
                                feedbacks.map((feedback, index) => (
                                    <div key={index} className="feedback-item bg-white shadow-lg rounded-lg p-4 flex-none w-56">
                                        {feedback.profilePicture ? (
                                            <img src={feedback.profilePicture} alt={`${feedback.name}'s profile`} className="w-10 h-10 rounded-full mb-2" />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-lg font-bold mb-2">
                                                {getInitials(feedback.name)}
                                            </div>
                                        )}
                                        <p className="text-gray-800">{feedback.text}</p>
                                        <div className="text-yellow-500">
                                            {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">No feedback available.</p>
                            )}
                        </div>
                    </section>
                    <section className="bg-gray-100 p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg mb-2">Submit Feedback</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="rating" className="block text-gray-700 mb-2">Rating</label>
                                <div className="flex space-x-1 text-yellow-500">
                                    <span className="cursor-pointer">★</span>
                                    <span className="cursor-pointer">★</span>
                                    <span className="cursor-pointer">★</span>
                                    <span className="cursor-pointer">★</span>
                                    <span className="cursor-pointer">☆</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block text-gray-700 mb-2">Feedback</label>
                                <textarea id="feedback" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit</button>
                        </form>
                    </section>
                </div>
            
            
    </div>

        </div>
      </div>
   

                    

 );
 };

export default Dashboard;
