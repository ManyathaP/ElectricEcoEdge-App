

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rewards from './Rewards';
import API_BASE_URL from '../api/api';
const ComputerList = () => {
  const [computers, setComputers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComputerId, setSelectedComputerId] = useState(null);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/computers`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setComputers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching computers:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchComputers();
  }, []);

  const handleRewardsClick = (computerId) => {
    setSelectedComputerId(computerId);
  };

  const closeRewards = () => {
    setSelectedComputerId(null);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
  <br/>   <br/>
       <div className='center'>
       <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
      <center><h2>Computers</h2></center> <br/>
      {computers.length === 0 ? (
        <p>No computers found.</p>
      ) : (
        computers.map((computer) => (
          <div key={computer.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
             <p><strong>ID:</strong> {computer.signupId}</p>
            <p><strong>Name:</strong> {computer.signupName}</p>
            <p><strong>Email:</strong> {computer.signupEmail}</p>
            <p><strong>Phone No:</strong> {computer.signupPhoneNo}</p>
            <p><strong>Location:</strong> {computer.signupLocation}</p>
            <p><strong>Brand:</strong> {computer.computerBrand}</p>
            <p><strong>Years Used:</strong> {computer.computerYearsUsed}</p>
            <p><strong>Description:</strong> {computer.computerDescription}</p>
            <p><strong>Image URL:</strong> <a href={computer.computerImageUrl}>{computer.computerImageUrl}</a></p>
            <div>
              <button onClick={() => handleRewardsClick(computer.id)}>REWARDS</button>
              {selectedComputerId === computer.id && (
                <Rewards computerId={computer.id} onClose={closeRewards} />
              )}
            </div>
            
           
          </div>
        ))
      )}
    </div>
  );
};

export default ComputerList;
