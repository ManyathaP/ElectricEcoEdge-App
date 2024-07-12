// // src/components/RewardsPage.js

// import React from 'react';
// import './RewardsPage.css'; // Create a CSS file for custom styles if not using Tailwind

// const RewardsPage = () => {
//     const rewards = [
//         { id: 1, title: "Amazon Gift Card worth 5000 INR", points: 1800, category: "Entertainment" },
//         { id: 2, title: "Buy Prime Subscription for 800 points", points: 800, category: "Entertainment" },
//         { id: 3, title: "Buy Coupon Code worth $25", points: 200, category: "Food" },
//         { id: 4, title: "Get 50 INR back to wallet", points: 300, category: "Food" },
//         { id: 5, title: "Redeem 10000 points to get Adidas Sneakers", points: 10000, category: "Coupons" },
//     ];

//     return (
//         <div className="rewards-page container mx-auto p-4">
//             <header className="header flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
//                 <h1 className="text-2xl font-bold">Hi Professor</h1>
//                 <div className="points-card flex items-center bg-yellow-300 text-black p-2 rounded-lg">
//                     <div className="text-right">
//                         <p className="text-lg font-semibold">Current Points</p>
//                         <p className="text-4xl font-bold">20,525</p>
//                         <p>4 points = 1 rupee</p>
//                         <p>Expiry: 06/22</p>
//                     </div>
//                 </div>
//             </header>
//             <main className="main mt-6">
//                 <div className="tabs flex justify-around">
//                     <button className="tab text-xl font-bold">Earn</button>
//                     <button className="tab text-xl font-bold text-blue-600 border-b-2 border-blue-600">Redeem</button>
//                     <button className="tab text-xl font-bold">History</button>
//                 </div>
//                 <div className="rewards-list mt-6">
//                     {rewards.map((reward) => (
//                         <div key={reward.id} className="reward-item bg-white p-4 rounded-lg shadow-md mb-4">
//                             <div className="flex justify-between items-center">
//                                 <div className="reward-info">
//                                     <h2 className="text-xl font-bold">{reward.title}</h2>
//                                     <p className="text-gray-600">{reward.category}</p>
//                                 </div>
//                                 <div className="reward-points text-yellow-500 font-bold text-lg">
//                                     {reward.points} pts
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default RewardsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RewardsPage.css';
import API_BASE_URL from '../api/api';

const RewardsPage = ({ userId }) => {
    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        const fetchTotalPoints = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v1/rewards/${userId}`);
                setTotalPoints(response.data.totalPoints);
            } catch (error) {
                console.error('Error fetching total points:', error);
            }
        };

        fetchTotalPoints();
    }, [userId]);

    return (
        <div className="rewards-page container mx-auto p-4">
            <header className="header flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

                <div className="points-card flex items-center bg-yellow-300 text-black p-2 rounded-lg">
                    <div className="text-right">
                        <p className="text-lg font-semibold">Current Points</p>
                        <p className="text-4xl font-bold">{totalPoints}</p>
                        
                    </div>
                </div>
            </header>
        </div>
    );
};

export default RewardsPage;
