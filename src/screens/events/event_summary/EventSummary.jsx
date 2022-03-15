import style from './EventSummary.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';
import eventImageJPG from './event_image.jpg'
import calendarSVG from './calendar.svg'
import locationSVG from './location.svg'
import envelopeSVG from './envelope.svg'

function EventSummary() {
 
  const location = useLocation();
  const navigate = useNavigate();


  return (
<Container1
headerContent={
  <h1>האירוע שלי</h1>
}

bodyContent={
  <>
  <img src={eventImageJPG} className={style.summary_image}></img>
  <p className={style.title}>החתונה של דניאל וירון</p>


  <div className={style.data_stats_container}>
       <div className={style.stat_container}>
         <img src={calendarSVG}></img>
         <span className={style.data}>יום רביעי, 02/02/2022</span>
       </div>
       <div className={style.stat_container}>
         <img src={locationSVG}></img>
         <span className={style.data}>אולמי אגדתא</span>
       </div>
       <div className={style.stat_container}>
         <img src={envelopeSVG}></img>
         <span className={style.data}>700 מוזמנים</span>
       </div>
  </div>

  <div className={style.chart_container}>
    <div className={style.chart_data_container}>
        <span className={style.chart_data1}>500</span>
         <span className={style.chart_data2}>יגיעו</span>
    </div>
    <div className={style.chart_data_container}>
        <span className={style.chart_data1}>50</span>
         <span className={style.chart_data2}>לא יגיעו</span>
    </div>
    <div className={style.chart_data_container}>
        <span className={style.chart_data1}>50</span>
         <span className={style.chart_data2}>מתלבטים</span>
    </div>
    <div className={style.chart_data_container}>
        <span className={style.chart_data1}>50</span>
         <span className={style.chart_data2}>טרם השיבו</span>
    </div>
</div>

<p style={{width:'100%'}}>התקבל באשראי:<span className={style.sum}>₪24,000</span></p>

<div className={style.btn_group}>
<button 
      className={style.btn_details}
      onClick={()=>navigate('/guestlist')}
      >
        פירוט המוזמנים
        </button>
     <button 
      className={style.btn_details}
      onClick={()=>navigate('/giftsreceived')}
      >
        פירוט המתנות שהתקבלו
        </button>
        <button 
      className={style.btn_manage}
      onClick={()=>navigate('/eventexpences')}
      >
        ניהול הוצאות
          
        </button>
</div>
  </>

}

/>
  );
}

export default EventSummary;
