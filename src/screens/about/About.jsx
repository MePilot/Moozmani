
import style from './About.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";

function About() {
  const [greetText, setGreetText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>קצת עלינו</h1>
}
bodyContent={
  <>
     <label className={style.lbl_message} for text>מוזנים ליצור איתנו קשר בכל נושא ואנו נשיב לכם בהקדם</label>

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

export default About;
