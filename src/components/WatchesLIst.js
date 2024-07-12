

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/api';

const WatchesList = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/watches`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setWatches(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching computers:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div><br/>   <br/>
    <div className='center'>
    <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
   <center>
      <h2>Watchess</h2></center>
      {watches.length === 0 ? (
        <p>No Watches found.</p>
      ) : (
        watches.map((watch) => (
          <div key={watch.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {watch.signupName}</p>
            <p><strong>Email:</strong> {watch.signupEmail}</p>
            <p><strong>Phone No:</strong> {watch.signupPhoneNo}</p>
            <p><strong>Location:</strong> {watch.signupLocation}</p>
            <p><strong>Brand:</strong> {watch.watchBrand}</p>
            <p><strong>Years Used:</strong> {watch.watchYearsUsed}</p>
            <p><strong>Description:</strong> {watch.watchDescription}</p>
            <p><strong>Image URL:</strong> <a href={watch.computerImageUrl}>{watch.watchImageUrl}</a></p>
            {/* <button onClick={() => handleRewardsClick(computer.id)}>Rewards</button>
            <button onClick={() => handleStatusClick(computer.id)}>Status</button> */}
           <button>REWARDS </button>
          </div>
        ))
      )}
    </div>
  );
};

export default WatchesList;
