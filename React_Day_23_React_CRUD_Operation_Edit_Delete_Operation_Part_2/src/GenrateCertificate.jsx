import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const GenerateCertificate = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    // Fetch user data from the server
    const GetData = async () => {
        try {
            const result = await Axios.get(`http://localhost:3000/User/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        GetData();
    }, [id]);

    // Generate the URL for the QR code
    const certificateURL = `${window.location.origin}/genratecertificate/${id}`;

    return (
        <div style={{
            width: '800px',
            height: '600px',
            border: '5px solid #000',
            padding: '50px',
            textAlign: 'center',
            position: 'relative'
        }}>
            <h1>Certificate of Completion</h1>
            <p>This is to certify that</p>
            <h2 style={{ fontSize: '2.5em', margin: '20px 0' }}>{user.name}</h2>
            <p>has successfully completed the</p>
            <h3 style={{ margin: '20px 0' }}>{user.skill}</h3>
            <p>course.</p>

            <QRCode
                value={certificateURL}
                size={128}
                style={{ position: 'absolute', bottom: '50px', right: '50px' }}
            />
        </div>
    );
}

export default GenerateCertificate;
