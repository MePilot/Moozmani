
import style from './EventNumber.module.css'
import PhoneKeyboard from '../../phone_keyboard/PhoneKeyboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';

function EventNumber() {
  const [eventNumber, setEventNumber] = useState('')
  
  const handleAddDigits= (digit)=> {
    if (eventNumber.length>=10) return
    setEventNumber((prev)=>prev+digit)
  }
  const handleRemoveDigit= ()=> {
    if (eventNumber.length<1) return
    setEventNumber((prev)=>prev.slice(0, -1))
  }
 
  return (
<Container1
headerContent={
  <h1>הענקת מתנה</h1>
}
bodyContent={
  <>
     <p>?מהו קוד האירוע שקיבלת</p>
     <input className={style.eventnumber}
     value={eventNumber}
     onChange={event => setEventNumber(event.target.value)}
     maxlength="10"
     type='numeric'
     inputMode='decimal'
     pattern='[0-9]+'
     ></input>
     
     <Link to="/phoneconfirm" style={{ width: '100%' }}>
      <button 
      className={style.btn_send_confirm}>
        המשך
        </button>
     </Link>
     
     <PhoneKeyboard 
      addDigit={handleAddDigits}
      removeDigit={handleRemoveDigit} 
      />
  </>
}

/>

  );
}

export default EventNumber;
