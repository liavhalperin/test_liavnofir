import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommunicationWithPilots = () => {
    const navigate = useNavigate();
    const [ageRange, setAgeRange] = useState(0);

    const handleAgeRangeChange = (event) => {
        setAgeRange(event.target.value);
    };

    return (
        <div dir="rtl" style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")', padding: '50px' }}>
            <h1> <b>תקשורת עם טייסים</b></h1>
            <label style={{ textAlign: 'right', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '18px', marginRight: '10px' }} htmlFor="vol">סינון על פי טווח גילים: </label>
            <input type="range" min="0" max="50" value={ageRange} onChange={handleAgeRangeChange}></input>
            <span style={{ color: 'white', fontSize: '12px' }}>{ageRange}</span>
            <br />
            <select style={{ margin: '10px', padding: '5px 10px', borderRadius: '20px', backgroundColor: 'white', color: 'green', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                <option value="location" style={{ color: 'white' }}>סינון על פי מיקום</option>
                <option value="north">צפון</option>
                <option value="center">מרכז</option>
                <option value="south">דרום</option>
            </select>
            <select style={{ margin: '10px', padding: '5px 10px', borderRadius: '20px', backgroundColor: 'white', color: 'green', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
                <option value="general" style={{ color: 'white' }}>סינון על פי מטרת טיסה</option>
                <option value="training">אימונים</option>
                <option value="experience">חוויה</option>
                <option value="accumulation_of_hours">צבירת שעות</option>
            </select>
            <br />
            <table style={{ margin: '0 auto', borderCollapse: 'collapse', color: 'white' }}>
                <thead>
                    <tr>
                        <th style={{ ...tableHeaderStyle, color: 'white' }}>WhatsApp</th>
                        <th style={{ ...tableHeaderStyle, color: 'white' }}>מספר טלפון</th>
                        <th style={{ ...tableHeaderStyle, color: 'white' }}>שם פרטי</th>
                        <th style={{ ...tableHeaderStyle, color: 'white' }}>שם משפחה</th>
                        <th style={{ ...tableHeaderStyle, color: 'white' }}>עיר</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ ...tableCellStyle, color: 'white' }}><span > WhatsApp Icon</span></td>
                        <td style={tableCellStyle}>052-6188857</td>
                        <td style={tableCellStyle}>ליאב</td>
                        <td style={tableCellStyle}>הלפרין</td>
                        <td style={tableCellStyle}>כפר יונה</td>
                    </tr>
                    <tr>
                        <td style={{ ...tableCellStyle, color: 'white' }}><span> WhatsApp Icon</span></td>
                        <td style={tableCellStyle}>054-2200346</td>
                        <td style={tableCellStyle}>אופיר</td>
                        <td style={tableCellStyle}>כבביה</td>
                        <td style={tableCellStyle}>כפר סבא</td>
                    </tr>
                    <tr>
                        <td style={{ ...tableCellStyle, color: 'white' }}><span> WhatsApp Icon</span></td>
                        <td style={tableCellStyle}>054-8096735</td>
                        <td style={tableCellStyle}>נועה</td>
                        <td style={tableCellStyle}>בורנפלד</td>
                        <td style={tableCellStyle}>תל אביב</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button
                onClick={() => navigate('/HomePage')}
                style={buttonStyle}
                onMouseOver={(e) => { e.target.style.backgroundColor = 'green'; e.target.style.color = 'black' }}
                onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'green' }}
            >
                חזור
            </button>
        </div>
    );
};

const tableHeaderStyle = {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: '1px solid black',
};

const tableCellStyle = {
    padding: '10px',
    border: '1px solid black',
};

const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: 'white',
    color: 'green',
    padding: '10px 20px',
    margin: '10px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    border: '2px solid green',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    outline: 'none',
};

export default CommunicationWithPilots;
