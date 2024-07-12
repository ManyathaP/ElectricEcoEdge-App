


// import React from 'react';
// import './DropdownMenu.css';
// import { Link } from 'react-router-dom';

// const DropdownMenu = ({ isOpen, onMenuItemClick }) => {
//     if (!isOpen) {
//         return null;
//     }
//     return (
//         <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
//             <ul>
//                 <li>
//                     <Link to="/profile" onClick={onMenuItemClick}>Profile</Link>
//                 </li>
//                 <li>
//                     <Link to="/dispose" onClick={onMenuItemClick}>Dispose</Link>
//                 </li>
//                 <li>
//                     <Link to="/rewards" onClick={onMenuItemClick}>Rewards/Points</Link>
//                 </li>
//                 <li>
//                     <Link to="/track-order" onClick={onMenuItemClick}>Track Order</Link>
//                 </li>
//                 <li>
//                     <Link to="/customer-support" onClick={onMenuItemClick}>Customer Support</Link>
//                 </li>
//                 <li>
//                     <Link to="/about-us" onClick={onMenuItemClick}>About Us/Support Us</Link>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default DropdownMenu;

import React from 'react';
import './DropdownMenu.css';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ isOpen, onMenuItemClick }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <ul>
                <li>
                    <Link to="/profile" onClick={onMenuItemClick}>Profile</Link>
                </li>
                <li>
                    <Link to="/dispose" onClick={onMenuItemClick}>Dispose</Link>
                </li>
                <li>
                    <Link to="/rewards-page" onClick={onMenuItemClick}>Rewards/Points</Link>
                </li>
                <li>
                    <Link to="/track-order" onClick={onMenuItemClick}>Track Order</Link>
                </li>
                <li>
                    <Link to="/customer-support" onClick={onMenuItemClick}>Log Out</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default DropdownMenu;
