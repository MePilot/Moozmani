import style from './EventCreateCode.module.css'
import PhoneKeyboard from '../../phone_keyboard/PhoneKeyboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';

function EventCreateCode() {
  const [phoneNumber, setPhoneNumber] = useState('')
  
  const handleAddDigits= (digit)=> {
    if (phoneNumber.length>=10) return
    setPhoneNumber((prev)=>prev+digit)
  }
  const handleRemoveDigit= ()=> {
    if (phoneNumber.length<1) return
    setPhoneNumber((prev)=>prev.slice(0, -1))
  }
 
  return (
<Container1
headerContent={
  <h1>יצירת האירוע שלך</h1>
}
bodyContent={
  <>
     <p>?מהו קוד האירוע שקיבלת</p>
     <input className={style.telnumber}
     value={phoneNumber}
     onChange={event => setPhoneNumber(event.target.value)}
     maxlength="10"
     type='tel'
     inputMode='decimal'
     autoComplete='tel'
     pattern='[0-9]+'
     ></input>
     
     <Link to="/" style={{ width: '100%' }}>
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

export default EventCreateCode;
