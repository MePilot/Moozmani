import style from './PhoneNumber.module.css'
import PhoneKeyboard from '../phone_keyboard/PhoneKeyboard';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container1 from '../../containers/container_1/Container1';

function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()
  const handleAddDigits = (digit) => {
    if (phoneNumber.length >= 10) return
    setPhoneNumber((prev) => prev + digit)
  }
  const handleRemoveDigit = () => {
    if (phoneNumber.length < 1) return
    setPhoneNumber((prev) => prev.slice(0, -1))
  }

  return (
    <Container1
      headerContent={
        <h1>מס׳ טלפון נייד</h1>
      }
      bodyContent={
        <>
          <p>מס׳ הטלפון שלך</p>
          <input className={style.telnumber}
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            maxlength="10"
            type='tel'
            inputMode='decimal'
            autoComplete='tel'

          ></input>

          <button
            onClick={() => navigate('/phoneconfirm')}
          >
            שלחו לי קוד אימות
          </button>

<PhoneKeyboard
            addDigit={handleAddDigits}
            removeDigit={handleRemoveDigit}
          />

          
        </>
      }
    />
  );
}

export default PhoneNumber;
