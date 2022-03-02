import style from './EventCreateForm.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';
import dateSVG from './date.svg'
import chevronSVG from './chevron.svg'
import phoneSVG from './phone.svg'

function EventCreateForm() {
  const [state, setState] = useState({})
  const location = useLocation();
  const [date, setDate] = useState(location?.state?.toLocaleDateString() || '')
  const navigate = useNavigate();

  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  return (
<Container1
headerContent={
  <h1>יצירת האירוע שלך</h1>
}

bodyContent={
  <>
  <p>חתונה</p>
  <form style={{width:'100%'}}>
  
  <input 
      className={style.reg_input}
      name='contactName1'
      placeholder='בן/בת זוג 1'
      value={state.contactName1 || ''}
      onChange={
        event => handleData(event)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
<input 
      className={style.reg_input}
      name='contactName2'
      placeholder='בן/בת זוג 2'
      value={state.contactName2 || ''}
      onChange={
        event => handleData(event)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>

<div className={style.reg_input_container}>
<input 
      className={style.reg_input}
      name='contactTel'
      placeholder='טלפון בן/בת הזוג'
      value={state.contactTel || ''}
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
  <div className={style.reg_input_container}>
  <input 
        onClick={()=>navigate('/calendar',{state:'event_create_form'})}
        className={style.reg_input}
        placeholder="תאריך האירוע"
        name='eventDate'
        value={date || ''}
        onChange={
        event => handleData(event)
        }
         type='text'
         pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        // autoComplete='given-name'
     
     ></input>
  <img className={style.card_icon} src={dateSVG} alt='date'></img>
  </div>
  
     
  <div className={style.reg_input_container}>
    <input 
        className={style.reg_input}
        placeholder='שם אולם'
        name='location'
        value={state.location || ''}
        onChange={
          event => handleData(event)
        }
         type='text'
        // autoComplete='family-name'
     ></input>
  <img className={style.card_icon} style={{top:'65%'}} src={chevronSVG} alt='chevron'></img>
  </div>
  
  </form>

<div>


</div>

  <button 
  className={style.btn_create_next}
  onClick={()=>navigate('/eventcreateaddimage',{state:'event_create_form'})}
  >המשך
  </button>  

   
  </>

}

/>
  );
}

export default EventCreateForm;
