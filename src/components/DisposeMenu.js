
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DisposeMenu.css';
import videoBg from '../assets/120172-720504774.mp4'
const DisposeMenu = () => {
    const navigate = useNavigate();
    const items = [
        { name: 'Computers', image: 'computer.jpg' },
        { name: 'Laptops', image: 'laptop.jpg' },
        { name: 'Watches', image: 'watches.jpg' },
        { name: 'Mobiles', image: 'mobiles.jpg' },
        { name: 'Tablets', image: 'tablet.jpg' },
        { name: 'Others', image: 'others.jpg' },
    ];

    const handleClick = (item) => {
        navigate(`/dispose/${item.name.replace(/\s+/g, '-').toLowerCase()}`); // Adjust route path
    };

    useEffect(() => {
        const handleBackButton = () => {
            navigate('/dashboard');
        };

        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, [navigate]);

//     return (
//         <div>
//              <video src={videoBg} autoPlay loop muted className="background-video"/>
//         <div className="dispose-menu-container">
//             <br /><br />
//             <div className='center'>
//             <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
//             <h1>Choose a Category</h1><br /><br />
//             <div className="dispose-items">
//                 {items.map((item, index) => (
//                     <div key={index} className="dispose-item" onClick={() => handleClick(item)}>
//                         <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.name} />
//                         <div className="overlay">Select</div>
//                         <p>{item.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div></div>
//     );
// };



return (
    <div >
        <video src={videoBg} autoPlay loop muted className="bg-vid background-video"/>

      
        <div className="overlay">
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <div className=" dispose-menu-container">

                <br/>
                <div className='center'>
                <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logo mb-8" /></div>
                <h1>Choose a Category</h1><br /><br />
             <div className="dispose-items">
                {items.map((item, index) => (
                     <div key={index} className="dispose-item" onClick={() => handleClick(item)}>
                         <img src={process.env.PUBLIC_URL + '/' + item.image} alt={item.name} />
                         <div className="overlay">Select</div>
                         <p>{item.name}</p>
                     </div>
                 ))}
             </div>
                   
                    </div>
                </div>
            </div>
        </div>
);
};


export default DisposeMenu;
