import React, { useState } from 'react';
import ItemForm from './ItemForm';

const MainComponent = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedItemType, setSelectedItemType] = useState('');

    const renderForm = (itemType) => {
        setSelectedItemType(itemType);
        setShowForm(true);
    };

    return (
        <div>
            <button onClick={() => renderForm('computer')}>Add Computer</button>
            <button onClick={() => renderForm('mobile')}>Add Mobile</button>
            <button onClick={() => renderForm('tablet')}>Add Tablet</button>
            <button onClick={() => renderForm('laptop')}>Add Laptop</button>
            <button onClick={() => renderForm('watch')}>Add Watch</button>
            <button onClick={() => renderForm('otherItem')}>Add Other Item</button>

            {/* Conditional rendering of item form based on button click */}
            {showForm && <ItemForm itemType={selectedItemType} />}
        </div>
    );
};

export default MainComponent;
