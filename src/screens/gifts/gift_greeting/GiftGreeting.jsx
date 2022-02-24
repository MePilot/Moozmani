
import style from './GiftGreeting.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";

function GiftGreeting() {
  const [greetText, setGreetText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>הענקת מתנה</h1>
}
bodyContent={
  <>
     <p>?להוסיף ברכה</p>

     <textarea  
     name='text'
     className={style.input_greet}
     value={greetText.text}
     onChange={handleChange}
     >

     </textarea >

    
      <button 
      className={style.btn_confirm}
      onClick={()=>navigate('/giftcreditcard')}
      >
        אישור
        </button>
  </>
}

/>

  );
}

export default GiftGreeting;
