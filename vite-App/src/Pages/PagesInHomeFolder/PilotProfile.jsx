import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
//as "PilotProfile"

const PilotProfile = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")' }}>
            <h1>פרופיל הטייס</h1>
            <form >
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <input type="text" dir="rtl" placeholder="חיפוש על פי שם" style={{ direction: 'rtl', ...inputStyle }} />
                </div>
                <button style={buttonStyle}>חפש</button>
                <br />
                <br />
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span ><b>מספר רישיון:  </b></span> 123456789
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                        <span><b>שם מלא: </b></span>נסרין קדרי
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span><b>תאריך לידה : </b></span>20.05.1995
                        
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span><b>מספר טלפון: </b></span>052-6188857
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span><b>כתובת אימייל: </b></span>liavhalperin@gmail.com
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span><b>תוקף מבחן רמה : </b></span>22.05.2025
                    </p>
                </div>
                <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
                    <p type="text" dir="rtl" style={inputStyle} >
                    <span><b>תוקף תעודה רפואית: </b></span>24.07.2029
                    </p>
                </div>
                <br />
                <button onClick={() => navigate('/HomePage')} style={buttonStyle}>חזור</button>
            </form>
        </div>
    );
};

const inputStyle = {
    borderRadius: '20px',
    fontFamily: 'Arial, sans-serif',
    color: 'black',
    backgroundColor: 'white',
    padding: '10px',
    width: '300px',
};

const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'blue',
    padding: '10px 20px',
    margin: '10px',
};

buttonStyle[':hover'] = {
    backgroundColor: 'blue',
    color: 'white',
}

export default PilotProfile;
