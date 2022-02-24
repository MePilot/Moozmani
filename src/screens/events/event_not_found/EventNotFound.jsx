import style from './EventNotFound.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container2 from '../../../containers/container_2/Container2';
import heartBrokenSVG from './heart_broken.svg'

function EventNotFound() {
  const navigate = useNavigate();

  return (
<Container2
headerContent={
  <>
  <img src={heartBrokenSVG}></img>
  <h1>מצאנו<br/> !את האירוע</h1>
  </>
  
}

bodyContent={
  <>
  <p className={style.title}>אבל זה לא נורא<br/> אפשר ליצור אותו בשניה</p>
  <p className={style.data}>לאחר יצירת האירוע<br/> והעברת כספים<br/> אחד מבני הזוג יקבל קישור<br/> לקבלתם</p>
  
<br/>
<button 
className={style.btn_give_present}
onClick={()=>navigate('/')}
>ליצור את האירוע</button>  

   
  </>

}

/>
  );
}

export default EventNotFound;
