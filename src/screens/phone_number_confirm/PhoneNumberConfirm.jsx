
import style from './PhoneNumberConfirm.module.css'
import PhoneKeyboard from '../phone_keyboard/PhoneKeyboard';
import { useState , useEffect} from 'react';
import ConfirmInput from './ConfirmInput';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Container1 from '../../containers/container_1/Container1';

function PhoneNumberConfirm() {
  const [phoneNumber, setPhoneNumber] = useState('')
  let navigate = useNavigate();
  const handleAddDigits= (digit)=> {
    if (phoneNumber.length>=4) return
    setPhoneNumber((prev)=>prev+digit)
  }

  const handleRemoveDigit= ()=> {
    if (phoneNumber.length<1) return
    setPhoneNumber((prev)=>prev.slice(0, -1))
  }

  useEffect(() => {
    
    if (phoneNumber.length===4) navigate("/register");
    
  },[phoneNumber, navigate]);
  return (
<Container1
headerContent={
  <h1>קוד אימות</h1>
}
bodyContent={
  <>
 <p>מקלידים כאן את קוד האימות</p>
    
    <ConfirmInput 
    confirmNumber={phoneNumber}
    />
  <Link to="/phone" style={{width:'100%'}}>

  <button className={style.btn_didnt_receive}>לא קיבלתי קוד</button>
  
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

export default PhoneNumberConfirm;
