
import style from './GuestInvitationLetterSent.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container2 from '../../../containers/container_2/Container2';
import { useNavigate } from "react-router-dom";
import planeSVG from './plane.svg'

function GuestInvitationLetterSent() {
  const navigate = useNavigate()
  return (
<Container2
headerContent={
  <>
    <img src={planeSVG}></img>
    <h1>אישורי ההגעה<br/>!נשלחו</h1>
  </>
  
}
bodyContent={
  <>
    <p>אנו נעדכן אתכם<br/> בנוגע לאורחים שאישרו הגעה<br/> ואורחים שהעניקו מתנה<br/> באשראי</p>
<div  className={style.btn_group}>

        <button 
      className={style.btn_manage}
      onClick={()=>navigate('/eventsummary')}
      >
        לניהול האירוע
        </button>
</div>
    
  </>
}

/>

  );
}

export default GuestInvitationLetterSent;
