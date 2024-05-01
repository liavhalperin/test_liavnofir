import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DigitalClock } from '@mui/x-date-pickers';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const Order_a_flight = ({ productName, productDetails }) => {
  const OrderButtonClick = () => {// פונקציה שמפעילה את הפעולה של שליחת הודעה בוואטסאפ
    const recipientPhoneNumber = '+972542200346';
    const message = `הי, אני מעוניין להזמין השכרת ${productName} עם הפרטים הבאים: ${productDetails}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    //const whatsappLink = `https://wa.me/${recipientPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <button className='order-this-product' onClick={OrderButtonClick} style={{ borderRadius: '20px', backgroundColor: 'white', color: 'green' }}>הזן והמשך</button> 
  
  );
};

const FindAFlight = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const navigate = useNavigate();

  // תאריך שנבחר
  const DateChange = (date) => {
    setSelectedDate(date);
  };

  // שעת התחלה שנבחרה
  const StartTimeChange = (time) => {
    setStartTime(time);
  };

  // שעת סיום שנבחרה
  const EndTimeChange = (time) => {
    setEndTime(time);
  };

  const productDetails = `תאריך: ${selectedDate}, שעת התחלה: ${startTime}, שעת סיום: ${endTime}, סוג המטוס: 4X-DBR Plane`;

  return (
    <div style={{ textAlign: 'center', backgroundImage: 'url("src/Pages/imgs/homeimg.png")' }}>
      <h1>בחר טיסה</h1>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '10px', margin: '23px', padding: '20px' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={selectedDate} onChange={DateChange} className='Date-selection' type="date" placeholder="dd-mm-yyyy" min="1997-01-01" max="2030-12-31" />
        </LocalizationProvider>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Adjusted container */}
        <div style={{ marginRight: '10px' }}> {/* Start time container */}
          <h4>שעת התחלה</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DigitalClock value={startTime} onChange={StartTimeChange} className='Select-a-start-time' />
          </LocalizationProvider>
        </div>
        <div> {/* End time container */}
          <h4 >שעת סיום</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DigitalClock value={endTime} onChange={EndTimeChange} className='End-time-selection' />
          </LocalizationProvider>
        </div>
      </div>
      <div style={{ alignItems: 'center' }}>
        <br />
        <button variant="contained" color="primary" onClick={() => navigate('/HomePage')} style={{ marginRight: '5px', borderRadius: '20px', backgroundColor: 'white', color: 'purple' }}>חזור אל דף הבית</button>
      </div>
      <br />
      {/* Integrate the Order_a_flight component */}
      <Order_a_flight productName="טיסה" productDetails={productDetails} />
    </div>
  );
};

export default FindAFlight;

//בחירת שעה שישאר להמשך
//       <div>
//<h4>שעת התחלה</h4>
//<LocalizationProvider dateAdapter={AdapterDayjs}>
// <DigitalClock value={startTime} onChange={StartTimeChange} className='Select-a-start-time' />
//</LocalizationProvider>
//</div>
//<div style={{ marginLeft: '10px' }}>
//<h4 >שעת סיום</h4>
//<LocalizationProvider dateAdapter={AdapterDayjs}>
//<DigitalClock value={endTime} onChange={EndTimeChange} className='End-time-selection' />
//</LocalizationProvider>
//</div>