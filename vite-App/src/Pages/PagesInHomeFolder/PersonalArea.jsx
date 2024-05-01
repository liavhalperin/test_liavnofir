import React from 'react';
import { useNavigate } from "react-router-dom";

const PersonalArea = () => {
    const navigate = useNavigate();


    return (
        <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")' }}>
            אזור אישי
            <br />  <br />
            <button onClick={() => navigate('/HomePage')} style={{ marginRight: '5px', borderRadius: '20px', backgroundColor: 'white', color: 'purple' }}>חזור אל דף הבית</button>

        </div>
    );
};
export default PersonalArea;