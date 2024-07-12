
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DisposeMenu.css';
import 'react-toastify/dist/ReactToastify.css';
import videoBg from '../assets/120172-720504774.mp4'

const AdminDashboard = () => {
  const navigate = useNavigate();
  const items = [
    { name: 'Computers', image: 'computer.jpg' },
    { name: 'Watches', image: 'watches.jpg' },
    { name: 'Laptops', image: 'laptop.jpg' },
    { name: 'Mobiles', image: 'mobiles.jpg' },
    { name: 'Tablets', image: 'tablet.jpg' },
    { name: 'Other Items', image: 'others.jpg' },
  ];

  const handleClick = (item) => {
    if (item.name === 'Computers') {
      navigate('/computers'); // Navigate to '/computers' route when Computers item is clicked

    }
    else if(item.name === 'Watches'){
      navigate('/watches');
    }

    else if(item.name === 'Laptops'){
      navigate('/laptops');
    }

    else if(item.name === 'Mobiles'){
      navigate('/mobiles');
    }

    else if(item.name === 'Tablets'){
      navigate('/tablets');
    }

    else if(item.name === 'Other Items'){
      navigate('/other_items');
    }

  };

  return (
    <div >
    <video src={videoBg} autoPlay loop muted className="bg-vid background-video"/>

  
    <div className="overlay">
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
            <div className=" dispose-menu-container">

            <br/>
            <div className='center'>
      <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
      <h2>Choose a Category</h2>
      <br /><br />
      <div className="dispose-items">
        {items.map((item, index) => (
          <div key={index} className="dispose-item" onClick={() => handleClick(item)}>
            <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
         <br /><br />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AdminDashboard;

