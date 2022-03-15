import style from './EventCreateCategory.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import weddingSVG from './wedding.svg'
import hamsaSVG from './hamsa.svg'
import boySVG from './boy.svg'
import girlSVG from './girl.svg'
import britSVG from './brit.svg'
import britaSVG from './brita.svg'


function EventCreateCategory() {
  const [phoneNumber, setPhoneNumber] = useState('')
  
  const handleAddDigits= (digit)=> {
    if (phoneNumber.length>=10) return
    setPhoneNumber((prev)=>prev+digit)
  }
  const handleRemoveDigit= ()=> {
    if (phoneNumber.length<1) return
    setPhoneNumber((prev)=>prev.slice(0, -1))
  }
  const navigate = useNavigate()

  return (
<Container1
headerContent={
  <h1>יצירת האירוע שלך</h1>
}
bodyContent={
  <>
     <p>?מה אנחנו חוגגים</p>

     <div className={style.categories_container}>
       <div className={style.category_a}
       onClick={()=>navigate('/eventcreateform')}
       >
         <img src={weddingSVG}></img>
         <span className={style.category_name}>חתונה</span>
       </div>
       <div className={style.category_b}
        onClick={()=>navigate('/eventcreateform')}
       >
         <img src={hamsaSVG}></img>
         <span className={style.category_name}>חינה</span>
       </div>
       <div className={style.category_b}
        onClick={()=>navigate('/eventcreateform')}
       >
         <img src={britSVG}></img>
         <span className={style.category_name}>ברית</span>
       </div>
       <div className={style.category_a}
        onClick={()=>navigate('/eventcreateform')}
       >
         <img src={britaSVG}></img>
         <span className={style.category_name}>בריתה</span>
       </div>
       <div className={style.category_a}
        onClick={()=>navigate('/eventcreateform')}
       >
         <img src={boySVG}></img>
         <span className={style.category_name}>בר מצווה</span>
       </div>
       <div className={style.category_b}
        onClick={()=>navigate('/eventcreateform')}
       >
         <img src={girlSVG}></img>
         <span className={style.category_name}>בת מצווה</span>
       </div>
       <div 
        className={style.btn_other}
        onClick={()=>navigate('/eventcreateform')}
        >
          אחר
            
        </div>
     </div>
    
  </>
}

/>

  );
}

export default EventCreateCategory;
