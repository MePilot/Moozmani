import style from './EventCreateGuests.module.css'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import excelSVG from './excel.svg'

function EventCreateGuests() {
 const navigate = useNavigate()
  return (
<Container1
headerContent={
  <h1>יצירת האירוע שלך</h1>
}
bodyContent={
  <>
     <p>הזמנת אורחים</p>

     <div className={style.categories_container}>
       <div className={style.category_a}
       onClick={()=>navigate('/eventcreateguestslist',{state:'משפחה'})}
       >
         <span className={style.category_name}>משפחה</span>
       </div>
       <div className={style.category_b}
       onClick={()=>navigate('/eventcreateguestslist',{state:'חברים'})}
       >
         <span className={style.category_name}>חברים</span>
       </div>
       <div className={style.category_b}
        onClick={()=>navigate('/eventcreateguestslist',{state:'צבא'})}
       >
         <span className={style.category_name}>צבא</span>
       </div>
       <div className={style.category_a}
        onClick={()=>navigate('/eventcreateguestslist',{state:'עבודה'})}
       >
         <span className={style.category_name}>עבודה</span>
       </div>
       <div 
      className={style.btn_other}
      onClick={()=>navigate('/eventcreateguestslist',{state:'אחר'})}
      >
        אחר
          
        </div>
     </div>
    
    
     
   

     <div className='btn_group'>
     <button 
      className={style.btn_continue}>
        צירוף מוזמנים באקסל
          <img src={excelSVG} style={{verticalAlign:'middle', marginRight:'1rem'}}></img>
        </button>
        <button 
      className={style.btn_continue}
      onClick={()=>navigate('/eventcreateguestslist',{state:'אחר'})}
      >
        המשך
          
        </button>
     </div>
     
  </>
}

/>

  );
}

export default EventCreateGuests;
