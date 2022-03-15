
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
  const [guestsAmount, setGuestsAmount] = useState(1)
  const [arrive, setArrive] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}

  return (
<Container1
headerContent={
  <h1>אישור הגעה</h1>
}
bodyContent={
  <>
  <img src={eventImageJPG} className={style.summary_image}></img>
  <p className={style.title}>החתונה של דניאל וירון</p>
    <p style={{ margin:0}}>02/02/20 ,יום רביעי בשעה 20:00</p>
    <p style={{margin:0, fontSize:'1rem'}}>  <img className={style.waze_icon}  src={wazeSVG}></img> מקום אירוע: אולמי אגדתא </p>
   
 
    <div className={style.btn_container}>
      <button className={arrive==='yes' ? style.btn_leftP : style.btn_left}
       onClick={() => setArrive('yes')}
      >
        אגיע
      </button>
      <button className={arrive==='no' ? style.btn_middleP : style.btn_middle}
       onClick={() => setArrive('no')}
      >
        לא אגיע
      </button>
      <button className={arrive==='maybe' ? style.btn_rightP : style.btn_right}
       onClick={() => setArrive('maybe')}
      >
        מתלבט
      </button>
    
    </div>
    <p style={{marginBottom:0, marginTop:'3%', fontSize:'1rem'}}>?כמה תגיעו</p>
   
    <div className={style.btn_container_2}>
      <button className={style.btn_leftamount}
      onClick={() => setGuestsAmount((prev)=>prev+1)}
      >
        +
      </button>
      <input className={style.telnumber}
    
      value={guestsAmount}
      onChange={event => setGuestsAmount(event.target.value)}
     onKeyPress={(event) => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }}
   
     type='tel'
     inputMode='decimal'
     autoComplete='tel'
    
     ></input>
      <button className={style.btn_rightamount}
       onClick={() => setGuestsAmount((prev)=>prev>0 ? prev-1 : prev)}
      >
       -
      </button>
    
    </div>

    <div className='btn_group'>
    <button className={style.btn_pay}
    onClick={()=>navigate('/giftsum')}
      >
       הענקת מתנה באשראי
      </button>
      <button
     className={style.btn_finish}
     onClick={()=>navigate('/loggedin')}
     >
       סיום
      </button>
      <button
     className={style.btn_finish}
     >
       שתף
      </button>
      
    </div>
   
  </>
}

/>

  );
}

export default GuestInvitationMessage;
