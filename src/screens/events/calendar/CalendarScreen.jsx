import './CalendarScreen.css'
import { useState, useEffect } from 'react';
import Container1 from '../../../containers/container_1/Container1';
import Calendar from 'react-calendar'
import { useNavigate, useLocation } from 'react-router-dom'

function CalendarScreen() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  const handleData= (dateVal)=> {
    let path
    location?.state ==='event_create_form' ? path='/eventcreateform' : path='/eventsearch'
    navigate(path, {state:dateVal})
  }

  return (
<Container1
headerContent={
  <h1>בחירת תאריך</h1>
}
bodyContent={
  <>
 <Calendar 
 className='react-calendar' 
 formatShortWeekday = {(locale, date) => ["'א","'ב","'ג","'ד","'ה","'ו","'ש"][date.getDay()]}
 locale='he-IL'
 onChange={handleData} 
 value={value}
 

//  onClickDay={()=>navigate('/eventsearch', {value})}
 />
  </>

}

/>
  );
}

export default CalendarScreen;
