import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const GotoHomePage = () => {
    navigate('/HomePage');
  };
  const GotoRegistrationPage = () => {
    navigate('/RegistrationPage');
  };

  const Login = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
      GotoHomePage();
    } else {
      alert('אנא הכנס שם משתמש וסיסמה תקינים');
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")', fontFamily: 'Arial, sans-serif' }}>
        {isLoggedIn ? false : (
          <div>

            <h1 style={{ marginBottom: '20px', marginRight: '20px', marginLeft: '20px', fontFamily: 'Arial, sans-serif', color: 'white' }}>ברוכים הבאים</h1>
            <input type="text" dir="rtl" placeholder="שם משתמש" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: 'black', backgroundColor: 'white', padding: '10px', marginBottom: '10px' }} />
            <br />
            <input type="password" dir="rtl" placeholder="סיסמה" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: 'black', backgroundColor: 'white', padding: '10px' }} />
            <h5 style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>שכחתי סיסמה</h5>
            <Button
              onClick={Login} 
              variant="contained"
              sx={{ 
                backgroundColor: 'white', 
                color: '#333',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
            >
              התחבר
            </Button>
            <br /> <br />
            <Button
              onClick={GotoRegistrationPage} 
              variant="contained"
              sx={{ 
                backgroundColor: 'white', 
                color: '#4caf50',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
            >
              להרשמה
            </Button>
            <h6 style={{ fontFamily: 'Arial, sans-serif', color: 'white' }}>עדיין לא נרשמת?? בזריז להירשם</h6>
            <br />
            <br />
          </div>
        )}
    </div>
  );
};

export default LoginPage;
