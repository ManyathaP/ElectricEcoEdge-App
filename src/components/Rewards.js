// import React, { useState } from 'react';
// import axios from 'axios';
// import './Rewards.css';

// const Rewards = ({ computerId, onClose }) => {
//   const [selectedPoints, setSelectedPoints] = useState(300);

//   const handlePointsChange = (e) => {
//     setSelectedPoints(e.target.value);
//   };

//   const handleRewardSubmit = async () => {
//     try {
//       // Replace with your actual API endpoint and data structure
//       await axios.post(`http://localhost:8090/api/v1/items/computers/${computerId}/rewards`, { points: selectedPoints });
//       alert(`Rewards of ${selectedPoints} points given to computer ID ${computerId}`);
//     } catch (error) {
//       console.error('Error giving rewards:', error);
//     }
//     onClose(); // Close the dropdown after submitting
//   };

//   const generatePointsOptions = () => {
//     const options = [];
//     for (let i = 300; i <= 5000; i += 50) {
//       options.push(<option key={i} value={i}>{i}</option>);
//     }
//     return options;
//   };

//   return (
//     <div className="rewards-container">
//       <select className="rewards-select" value={selectedPoints} onChange={handlePointsChange}>
//         {generatePointsOptions()}
//       </select>
//       <button className="rewards-submit" onClick={handleRewardSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Rewards;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rewards.css';
import API_BASE_URL from '../api/api';

const Rewards = ({ userId, onClose }) => {
  const [selectedPoints, setSelectedPoints] = useState(300);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const fetchTotalPoints = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/api/v1/rewards/${userId}`);
        setTotalPoints(response.data.totalPoints);
      } catch (error) {
        console.error('Error fetching total points:', error);
      }
    };

    fetchTotalPoints();
  }, [userId]);

  const handlePointsChange = (e) => {
    setSelectedPoints(e.target.value);
  };

  const handleRewardSubmit = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/v1/rewards`, { userId, points: selectedPoints });
      alert(`Rewards of ${selectedPoints} points given to user ID ${userId}`);
      setTotalPoints(totalPoints + parseInt(selectedPoints));
    } catch (error) {
      console.error('Error giving rewards:', error);
    }
    onClose(); // Close the dropdown after submitting
  };

  const generatePointsOptions = () => {
    const options = [];
    for (let i = 300; i <= 5000; i += 50) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className="rewards-container">
      <div>Total Points: {totalPoints}</div>
      <select className="rewards-select" value={selectedPoints} onChange={handlePointsChange}>
        {generatePointsOptions()}
      </select>
      <button className="rewards-submit" onClick={handleRewardSubmit}>Submit</button>
    </div>
  );
};

export default Rewards;
