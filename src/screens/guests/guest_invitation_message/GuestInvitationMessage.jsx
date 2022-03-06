
import style from './GuestInvitationMessage.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";
import checkCircleSVG from './check.svg'
import wazeSVG from './waze.svg'
import questionSVG from './question.svg'
import xSVG from './x.svg'
import dateSVG from './date.svg'
import eventImageJPG from './event_image.jpg'

function GuestInvitationMessage() {
  const [greetText, setGreetText] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>מכתב הזמנה</h1>
}
bodyContent={
  <>
  <img src={eventImageJPG} className={style.summary_image}></img>
    <p style={{width:'80%'}}>!שלום שם המוזמן<br/> בן זוג 1 ובת זוג 2 מזמינים אותכם לחגוג את יום שמחתם ביום <strong>חמישי 5.02.22 בשעה 17:00</strong></p>
    <p><img className={style.waze_icon}  src={wazeSVG}></img>   מקום אירוע: <strong>אולם סופיה</strong></p>
    <p style={{marginTop:'0'}}> הוסיף ליומן <img className={style.date_icon}  src={dateSVG}></img></p>
    <p>אנה אשרו הגעתכם</p>
    <div className={style.btn_container}>
    <div className={style.btn_container_inner}>
    <div className={style.btn}
      // onClick={()=>navigate('/guestinvitationlettersent')}
      >
       <img className={style.btn_icon} src={checkCircleSVG}></img>
    </div>
      <span className={style.btn_label}>מגיע/ה</span>
      </div>
    
      <div className={style.btn_container_inner}>
    <div className={style.btn}
      // onClick={()=>navigate('/guestinvitationlettersent')}
      >
        <img className={style.btn_icon} src={questionSVG}></img>
    </div>
      <span className={style.btn_label}>אולי מגיע/ה</span>
      </div>
      <div className={style.btn_container_inner}>
    <div className={style.btn}
      // onClick={()=>navigate('/guestinvitationlettersent')}
      >
        <img className={style.btn_icon} src={xSVG}></img>
    </div>
      <span className={style.btn_label}>לא מגיע/ה</span>
      </div>
    </div>
   
  </>
}

/>

  );
}

export default GuestInvitationMessage;
