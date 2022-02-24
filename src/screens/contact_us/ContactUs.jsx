
import style from './ContactUs.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const [greetText, setGreetText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>צור קשר</h1>
}
bodyContent={
  <>
     <label className={style.lbl_message} for text>מוזנים ליצור איתנו קשר בכל נושא ואנו נשיב לכם בהקדם</label>

     <textarea  
     name='text'
     className={style.input_greet}
     value={greetText.text}
     onChange={handleChange}
     >

     </textarea >

    
      <button 
      className={style.btn_confirm}
      onClick={()=>navigate('/')}
      >
        המשך
        </button>
  </>
}

/>

  );
}

export default ContactUs;
