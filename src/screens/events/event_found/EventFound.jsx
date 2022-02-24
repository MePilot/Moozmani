import style from './EventFound.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container2 from '../../../containers/container_2/Container2';
import heartSVG from './heart.svg'

const event = 
{
  title:'החתונה של דניאל וירון',
  date:'יום רביעי, 12/01/2022',
  dateHebrew: 'י׳ בשבט התשפ״ב',
  location:'אולמי הנסיכה',
  time:'20:00'
}

function EventFound() {
  const navigate = useNavigate();

  return (
<Container2
headerContent={
  <>
  <img src={heartSVG}></img>
  <h1>מצאנו<br/> !את האירוע</h1>
  </>
  
}

bodyContent={
  <>
  <p className={style.title}>{event.title}</p>
  <p className={style.data}>{event.date}</p>
  <p className={style.data}>{event.dateHebrew}</p>
  <p className={style.data}>{event.location}</p>
  <p className={style.data}>{event.time}</p>

<button 
className={style.btn_give_present}
onClick={()=>navigate('/')}
>להעניק מתנה לזוג</button>  

   
  </>

}

/>
  );
}

export default EventFound;
