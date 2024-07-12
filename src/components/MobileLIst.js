

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/api';

const MobileList = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/mobiles`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setMobiles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching computers:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchMobiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div><br/>   <br/>
    <div className='center'>
    <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
   <center> 
      <h2>Mobiles</h2></center>
      {mobiles.length === 0 ? (
        <p>No mobiles found.</p>
      ) : (
        mobiles.map((mobile) => (
          <div key={mobile.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {mobile.signupName}</p>
            <p><strong>Email:</strong> {mobile.signupEmail}</p>
            <p><strong>Phone No:</strong> {mobile.signupPhoneNo}</p>
            <p><strong>Location:</strong> {mobile.signupLocation}</p>
            <p><strong>Brand:</strong> {mobile.mobileBrand}</p>
            <p><strong>Years Used:</strong> {mobile.mobileYearsUsed}</p>
            <p><strong>Description:</strong> {mobile.mobileDescription}</p>
            <p><strong>Image URL:</strong> <a href={mobile.computerImageUrl}>{mobile.mobileImageUrl}</a></p>
            {/* <button onClick={() => handleRewardsClick(computer.id)}>Rewards</button>
            <button onClick={() => handleStatusClick(computer.id)}>Status</button> */}
           <button> REWARDS</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MobileList;
