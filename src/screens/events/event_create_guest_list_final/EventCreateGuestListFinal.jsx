import style from './EventCreateGuestListFinal.module.css'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';

function EventCreateGuestListFinal() {
 const navigate = useNavigate()
  return (
<Container1
headerContent={
  <h1>הזמנת אורחים</h1>
}
bodyContent={
  <>
     <p className={style.stat_p}>הוזמנו עד עכשיו</p>
     <p className={style.stat_p2}>מוזמנים: 635</p>

     <table className={style.stats}>
       <tbody>
    
  <tr>
    <td className={style.category}>משפחה</td>
    <td className={style.line}>----------------------------</td>
    <td className={style.amount}>251</td>
  </tr>
  <tr>
    <td className={style.category}>חברים</td>
    <td className={style.line}>----------------------------</td>
    <td className={style.amount}>185</td>
  </tr>
  <tr>
    <td className={style.category}>עבודה</td>
    <td className={style.line}>----------------------------</td>
    <td className={style.amount}>120</td>
  </tr>
  <tr>
    <td className={style.category}>צבא</td>
    <td className={style.line}>----------------------------</td>
    <td className={style.amount}>125</td>
  </tr>
       </tbody>
 
</table>
    
    
     <div className={style.btn_group}>
     <button 
      className={style.btn_edit}
      onClick={()=>navigate('/eventcreateguestlisteditable')}
      
      >
        עריכת רשימת מוזמנים
        </button>
        <button 
      className={style.btn_finish}
      onClick={()=>navigate('/guestinvitationletter')}
      >
        סיימנו את כל המוזמנים
          
        </button>
     </div>
     
  </>
}

/>

  );
}

export default EventCreateGuestListFinal;
