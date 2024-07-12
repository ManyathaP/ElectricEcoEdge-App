

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../api/api';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/items/laptops`);
        console.log('Full fetched response:', response); // Log the full response to check its structure
        setLaptops(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laptopss:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchLaptops();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <br/>   <br/>
       <div className='center'>
       <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
      <center>
      <h2>Laptops</h2></center>
      {laptops.length === 0 ? (
        <p>No Laptops found.</p>
      ) : (
        laptops.map((laptop) => (
          <div key={laptop.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {laptop.signupName}</p>
            <p><strong>Email:</strong> {laptop.signupEmail}</p>
            <p><strong>Phone No:</strong> {laptop.signupPhoneNo}</p>
            <p><strong>Location:</strong> {laptop.signupLocation}</p>
            <p><strong>Brand:</strong> {laptop.laptopBrand}</p>
            <p><strong>Years Used:</strong> {laptop.laptopYearsUsed}</p>
            <p><strong>Description:</strong> {laptop.laptopDescription}</p>
            <p><strong>Image URL:</strong> <a href={laptop.laptopImageUrl}>{laptop.laptopImageUrl}</a></p>
            {/* <button onClick={() => handleRewardsClick(computer.id)}>Rewards</button>
            <button onClick={() => handleStatusClick(computer.id)}>Status</button> */}
           <button> REWARDS</button>
          </div>
        ))
      )}
    </div>
  );
};

export default LaptopList;
