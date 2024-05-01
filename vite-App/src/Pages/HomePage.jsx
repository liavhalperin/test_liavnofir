import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const HomePage = () => {
  const navigate = useNavigate();

  const MoveToFlightSearch = () => {
    navigate('/FindAFlight');
  };
  const MoveToFlightConditions = () => {
    navigate('/FlightConditions');
  };
  const MoveToPersonalArea = () => {
    navigate('/PersonalArea');
  };
  const MoveToContact = () => {
    navigate('/Contact');
  }; 
  const GoToHamburger = () => {
    navigate('/Hamburger');
  };

  const BackToLoginPage = () => {
    navigate('/LoginPage');
  };
  

  return (
    <div style={{ textAlign: 'center' , display: 'flex', alignItems: 'center', height: '100vh', backgroundImage: `url('src/Pages/imgs/homeimg.png')` }}>
      <div style={{ textAlign: 'center' }}>
        <img src="src/Pages/imgs/logo.png" alt="Logo" style={{ width: '200px', marginBottom: '20px' }} />
        <h2>שלום,</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={MoveToFlightSearch}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff5c8d',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          שריין טיסה
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={MoveToFlightConditions}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#4caf50',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          מזג אויר
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={MoveToPersonalArea}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#2196f3',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          אזור אישי
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={MoveToContact}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          משקל ואיזון
        </Button>
        <br /><br />
        <Button
          onClick={BackToLoginPage}
          sx={{
            marginRight: '7px',
            fontSize: '14px',
            padding: '8px 20px',
            backgroundColor: 'white',
            color: '#9c27b0',
            borderRadius: '20px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          התנתק
        </Button>
        <br /><br />
        <Button
          variant="contained"
          onClick={GoToHamburger}
          sx={{
            marginRight: '10px',
            backgroundColor: 'white',
            color: '#ff9800',
            fontWeight: 'bold',
            borderRadius: '20px',
            padding: '10px 30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#ccc', 
            },
          }}
        >
          המבורגר
        </Button>
        <br /><br />
      </div>
    </div>
  );
};

export default HomePage;
