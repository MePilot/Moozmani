
import style from './GiftSum.module.css'
import PhoneKeyboard from '../../phone_keyboard/PhoneKeyboard';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';

function GiftSum() {
  const [giftSum, setGiftSum] = useState('')
  
  const handleAddDigits= (digit)=> {
    if (giftSum.length>=10) return
    setGiftSum((prev)=>prev+digit)
  }
  const handleRemoveDigit= ()=> {
    if (giftSum.length<1) return
    setGiftSum((prev)=>prev.slice(0, -1))
  }
 
  return (
<Container1
headerContent={
  <h1>הענקת מתנה</h1>
}
bodyContent={
  <>
     <p>?מהו הסכום</p>
     <input className={style.giftSum}
     value={giftSum}
     onChange={event => setGiftSum(event.target.value)}
     maxlength="10"
     type='numeric'
     inputMode='decimal'
     pattern='[0-9]+'
     ></input>
     
     <Link to="/giftpayments" style={{ width: '100%' }}>
      <button 
      className={style.btn_send_confirm}>
        אישור סכום
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

export default GiftSum;
