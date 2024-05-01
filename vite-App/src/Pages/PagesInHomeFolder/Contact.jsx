import React from 'react';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', height: '100vh', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
            <div style={{ textAlign: 'center' }}>             משקל ואיזון
                <br />  <br />
                <button onClick={() => navigate('/HomePage')} style={{ marginRight: '5px', borderRadius: '20px' , backgroundColor:'white', color:'purple'}}>חזור אל דף הבית</button>
            </div>
        </div>
    );
};
export default Contact;