import React, { useState, useEffect } from 'react';

const TrackOrder = ({ progress }) => {
    const steps = [33, 66, 100];

    return (
        <div className="p-12 bg-gray-900 text-white rounded-lg shadow-lg max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
            <div className="w-full bg-gray-700 rounded-full flex justify-between mb-8 h-12">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            progress >= step ? 'bg-green-500' : 'bg-yellow-300'
                        }`}
                    >
                        <span className="text-white font-bold">{index + 1}</span>
                    </div>
                ))}
            </div>
            <div className="w-full bg-gray-700 rounded-full h-10">
                <div
                    className="bg-green-500 h-10 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

const App = () => {
    const [progress, setProgress] = useState(0);

    // Fetch progress data from an API or external source
    useEffect(() => {
        const fetchProgress = async () => {
            try {
                // Replace this with your API call
                const response = await fetch('https://api.example.com/progress');
                const data = await response.json();
                setProgress(data.progress);
            } catch (error) {
                console.error('Failed to fetch progress data', error);
            }
        };

        fetchProgress();
    }, []); // Only run once when the component mounts

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <TrackOrder progress={progress} />
        </div>
    );
};

export default App;
