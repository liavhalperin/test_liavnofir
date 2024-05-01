import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const Submit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")' }}>
      <h1>הרשמה</h1>
      <form onSubmit={Submit}>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} dir="rtl" placeholder="שם פרטי" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} dir="rtl" placeholder="שם משפחה" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} dir="rtl" placeholder="כתובת מייל" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} dir="rtl" placeholder="שם משתמש" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} dir="rtl" placeholder="סיסמה" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" dir="rtl" placeholder="מספר רישיון טייס" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" dir="rtl" placeholder="תאריך לידה" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" dir="rtl" placeholder="תוקף תעודה רפואית" style={inputStyle} />
        </div>
        <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <input type="text" dir="rtl" placeholder="תוקף מבחן רמה" style={inputStyle} />
        </div>

        <div value="divs_of_files" style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px' }}>
          <div style={{ marginBottom: '20px', marginRight: '2px', marginLeft: '-10px' }}>
            <input type="file" style={{ marginRight: '-70px', marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>תמונת פרופיל</label>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '30px' }}>
            <input type="file" style={{ marginRight: '-65px',marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>צילום ת"ז</label>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-25px' }}>
            <input type="file" style={{ marginRight: '-70px',marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>צילום רישיון טיסה</label>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-45px' }}>
            <input type="file" style={{marginRight: '-70px', marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>צילום תעודה רפואית</label>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '-20px' }}>
            <input type="file" style={{ marginRight: '-70px',marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>צילום מבחן רמה</label>
          </div>
          <div style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '46px' }}>
            <input type="file" style={{ marginRight: '-69px', marginLeft: '30px' }} />
            <label style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>לוגבוק</label>
          </div>
        </div>
        <button type="submit" style={buttonStyle}>הגש</button>
        <br />
        <button onClick={() => navigate('/LoginPage')} style={buttonStyle}>חזור</button>
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
  color: 'green',
  padding: '10px 20px',
  margin: '10px',
};

export default RegistrationPage;
