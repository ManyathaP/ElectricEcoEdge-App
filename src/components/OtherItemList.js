

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/api';
const OtherItemList = () => {
  const [otherItems, setOtherItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOtherItems = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/other_items`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setOtherItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching computers:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchOtherItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div><br/>   <br/>
    <div className='center'>
    <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
   <center>
      <h2>Other Items</h2></center>
      {otherItems.length === 0 ? (
        <p>No computers found.</p>
      ) : (
        otherItems.map((otherItem) => (
          <div key={otherItem.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {otherItem.signupName}</p>
            <p><strong>Email:</strong> {otherItem.signupEmail}</p>
            <p><strong>Phone No:</strong> {otherItem.signupPhoneNo}</p>
            <p><strong>Location:</strong> {otherItem.signupLocation}</p>
            <p><strong>Brand:</strong> {otherItem.otherItemBrand}</p>
            <p><strong>Years Used:</strong> {otherItem.otherItemYearsUsed}</p>
            <p><strong>Description:</strong> {otherItem.otherItemDescription}</p>
            <p><strong>Image URL:</strong> <a href={otherItem.otherItemImageUrl}>{otherItem.otherItemImageUrl}</a></p>
            {/* <button onClick={() => handleRewardsClick(computer.id)}>Rewards</button>
            <button onClick={() => handleStatusClick(computer.id)}>Status</button> */}
           <button> REWARDS</button> 
          </div>
        ))
      )}
    </div>
  );
};

export default OtherItemList;
