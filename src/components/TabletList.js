

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/api';

const TabletList = () => {
  const [tablets, setTablets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTablets = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/tablets`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setTablets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tabletss:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTablets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div><br/>   <br/>
    <div className='center'>
    <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
   <center>
      <h2>Tablets</h2></center>
      {tablets.length === 0 ? (
        <p>No computers found.</p>
      ) : (
        tablets.map((tablet) => (
          <div key={tablet.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {tablet.signupName}</p>
            <p><strong>Email:</strong> {tablet.signupEmail}</p>
            <p><strong>Phone No:</strong> {tablet.signupPhoneNo}</p>
            <p><strong>Location:</strong> {tablet.signupLocation}</p>
            <p><strong>Brand:</strong> {tablet.tabletBrand}</p>
            <p><strong>Years Used:</strong> {tablet.tabletYearsUsed}</p>
            <p><strong>Description:</strong> {tablet.tabletDescription}</p>
            <p><strong>Image URL:</strong> <a href={tablet.tabletImageUrl}>{tablet.tabletImageUrl}</a></p>
            {/* <button onClick={() => handleRewardsClick(computer.id)}>Rewards</button>
            <button onClick={() => handleStatusClick(computer.id)}>Status</button> */}
           <button>REWARDS</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TabletList;
