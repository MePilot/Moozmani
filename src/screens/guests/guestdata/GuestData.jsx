import style from './GuestData.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';
import dateSVG from './date.svg'
import chevronSVG from './chevron.svg'
import phoneSVG from './phone.svg'

function GuestData() {
  const location = useLocation();
  const [state, setState] = useState({
    name: location?.state.name,
    tel:  location?.state.tel,
    arrive: location?.state.arrive
  })
  const [arrive, setArrive] = useState(location?.state.arrive)
  //const [date, setDate] = useState(location?.state?.toLocaleDateString() || '')
  const navigate = useNavigate();

  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  return (
<Container1
headerContent={
  <h1>פרטי הזמנה</h1>
}

bodyContent={
  <>
 
  <form style={{width:'100%'}}>
  <p className={style.lbl}>שם המוזמנ/ת</p>
  <input 
  id='name'
      className={style.reg_input}
      name='contactName1'
      placeholder='בן/בת זוג 1'
      value={state.name || ''}
      onChange={
        event => handleData(event)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
{/* <div cl>

</div> */}
<p className={style.lbl}>מס' טלפון</p>
<div id='tel' className={style.reg_input_container}>
<input 
      className={style.reg_input}
      name='contactTel'
      placeholder='טלפון בן/בת הזוג'
      value={state.tel || ''}
      onChange={
        event => handleData(event)
      }
       type='tel'
    //   inputMode='email'
       autoComplete='tel'
       onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
  <img className={style.card_icon} src={phoneSVG} alt='date'></img>
  </div>
  <p className={style.lbl}>כמה הוזמנו</p>
<input 
      id='invitation'
      className={style.reg_input}
      name='invitation'
      placeholder='טלפון בן/בת הזוג'
      value={1}
      onChange={
        event => handleData(event)
      }
       type='tel'
    //   inputMode='email'
       autoComplete='tel'
       onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
 <p className={style.lbl}>כמה אישרו</p>
<input 
      id='invitation'
      className={style.reg_input}
      name='accept'
      placeholder='טלפון בן/בת הזוג'
      value={3}
      onChange={
        event => handleData(event)
      }
       type='tel'
    //   inputMode='email'
       autoComplete='tel'
       onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
     </form>
  <div className={style.btn_container}>
      <button className={arrive==='yes' ? style.btn_leftP : style.btn_left}
       onClick={() => setArrive('yes')}
      >
        מגיע
      </button>
      <button className={arrive==='no' ? style.btn_middleP : style.btn_middle}
       onClick={() => setArrive('no')}
      >
        לא מגיע
      </button>
      <button className={arrive==='maybe' ? style.btn_rightP : style.btn_right}
       onClick={() => setArrive('maybe')}
      >
        מתלבט
      </button>
    
    </div>
     
 
  
  

<div>


</div>

  <button 
  className={style.btn_create_next}
  onClick={()=>navigate('/guestlist')}
  >שמור
  </button>  

   
  </>

}

/>
  );
}

export default GuestData;
