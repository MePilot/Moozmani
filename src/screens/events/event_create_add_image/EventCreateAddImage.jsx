
import style from './EventCreateAddImage.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";
import cameraSVG from './camera.svg'

function EventCreateAddImage() {
  const [greetText, setGreetText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>יצירת האירוע שלך</h1>
}
bodyContent={
  <>
     <p>הוספת תמונה</p>

     <div className={style.input_greet}>
       <img src={cameraSVG}></img>

     </div >

    
      <button 
    
      onClick={()=>navigate('/eventcreateguests')}
      >
        אישור
        </button>
  </>
}

/>

  );
}

export default EventCreateAddImage;
