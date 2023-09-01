import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetchData()
            .then(responseData => {
                
                setData(responseData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    
    async function fetchData() {
        try {
            const response = await fetch('URL_TO_YOUR_API_ENDPOINT');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
