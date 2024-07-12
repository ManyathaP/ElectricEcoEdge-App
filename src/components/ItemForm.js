
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ItemForm = () => {
//     const [formData, setFormData] = useState({
//         brand: '',
//         yearsUsed: '',
//         description: '',
//         imageUrl: null,
//         signupId: '', // Add signupId to the state
//     });
//     const [itemType, setItemType] = useState('computers');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         if (name === 'imageUrl' && files.length > 0) {
//             setFormData({
//                 ...formData,
//                 imageUrl: files[0],
//             });
//         } else {
//             setFormData({
//                 ...formData,
//                 [name]: value,
//             });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         formDataToSend.append('brand', formData.brand);
//         formDataToSend.append('yearsUsed', formData.yearsUsed);
//         formDataToSend.append('description', formData.description);
//         if (formData.imageUrl) {
//             formDataToSend.append('imageUrl', formData.imageUrl);
//         }
//         formDataToSend.append('signupId', formData.signupId); // Append signupId

//         try {
//             const response = await axios.post(
//                 `http://localhost:8090/api/v1/items/${itemType.toLowerCase()}`,
//                 formDataToSend,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 }
//             );
//             console.log('Item created:', response.data);
//             navigate('/dispose');
//         } catch (error) {
//             console.error('Error creating item:', error);
//         }
//     };

//     return (

//         <form onSubmit={handleSubmit}>
//             <br/>   <br/>
//             <div className='center'>
//             <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8"  /></div>
//             <div >
//                 <label>Brand</label>
//                 <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
//             </div>
//             <div >
//                 <label>Years Used</label>
//                 <input type="number" name="yearsUsed" value={formData.yearsUsed} onChange={handleChange} />
//             </div>
//             <div >
//                 <label>Description</label>
//                 <input type="text" name="description" value={formData.description} onChange={handleChange} />
//             </div>
//             <div>
//                 <label>Image</label>
//                 <input type="file" name="imageUrl" onChange={handleChange} />
//             </div>
//             <div >
//                 <label>Signup ID</label> {/* Add input for signupId */}
//                 <input type="text" name="signupId" value={formData.signupId} onChange={handleChange} />
//             </div>
//             <div >
//                 <label>Item Type</label>
//                 <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
//                     <option value="computers">Computer</option>
//                     <option value="laptops">Laptop</option>
//                     <option value="mobiles">Mobile</option>
//                     <option value="other_items">Other Item</option>
//                     <option value="tablets">Tablet</option>
//                     <option value="watches">Watch</option>
//                 </select>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default ItemForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ItemForm.css'; // Import the CSS file
import videoBg from '../assets/120172-720504774.mp4'
import API_BASE_URL from '../api/api';

const ItemForm = () => {
    const [formData, setFormData] = useState({
        brand: '',
        yearsUsed: '',
        description: '',
        imageUrl: null,
        signupId: '', // Add signupId to the state
    });
    const [itemType, setItemType] = useState('computers');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'imageUrl' && files.length > 0) {
            setFormData({
                ...formData,
                imageUrl: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('brand', formData.brand);
        formDataToSend.append('yearsUsed', formData.yearsUsed);
        formDataToSend.append('description', formData.description);
        if (formData.imageUrl) {
            formDataToSend.append('imageUrl', formData.imageUrl);
        }
        formDataToSend.append('signupId', formData.signupId); // Append signupId

        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/v1/items/${itemType.toLowerCase()}`,
                formDataToSend,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Item created:', response.data);
            navigate('/dispose');
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <div>
        <video src={videoBg} autoPlay loop muted className="bg-vid background-video"/>
        <div className="overlay">
                <div className="min-h-screen flex flex-col items-center justify-center text-white">
                   
                    <div className="w-full md:w-1/2 p-5 flex flex-col items-center  rounded-lg shadow-lg"></div>
        <form onSubmit={handleSubmit} className="item-form">
            <br/>  <br/>
            
            <div className='center'>
                <img src="/Frame 1.png" alt="Electric Eco Edge Logo" className="logos mbs-8" />
            </div>
            <div className="form-group">
                <label>Brand</label>
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label>Years Used</label>
                <input type="number" name="yearsUsed" value={formData.yearsUsed} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label>Image</label>
                <input type="file" name="imageUrl" onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label>Signup ID</label>
                <input type="text" name="signupId" value={formData.signupId} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label>Item Type</label>
                <select value={itemType} onChange={(e) => setItemType(e.target.value)} className="form-input">
                    <option value="computers">Computer</option>
                    <option value="laptops">Laptop</option>
                    <option value="mobiles">Mobile</option>
                    <option value="other_items">Other Item</option>
                    <option value="tablets">Tablet</option>
                    <option value="watches">Watch</option>
                </select>
            </div>
            <button type="submit" className="submit-button">Submit</button>
            <br/>  <br/>
        </form></div></div></div>
    );
};

export default ItemForm;
