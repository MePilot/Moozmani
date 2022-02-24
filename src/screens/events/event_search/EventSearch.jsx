import style from './EventSearch.module.css'
import { useState, useEffect } from 'react';
import { useNavigate, Link ,useLocation} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';
import dateSVG from './date.svg'
import chevronSVG from './chevron.svg'
import phoneSVG from './phone.svg'
import CalendarScreen from '../calendar/CalendarScreen';

function EventFound() {
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
  <h1>חיפוש אירוע</h1>
}

bodyContent={
  <>
  <form style={{width:'100%'}}>
  <div className={style.reg_input_container}>
  <input 
        onClick={()=>navigate('/calendar')}
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
  <div className={style.reg_input_container}>
  <input 
      className={style.reg_input}
      name='contactName'
      placeholder='שם אחד מבני הזוג'
      value={state.contactName || ''}
      onChange={
        event => handleData(event)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
  <img className={style.card_icon} src={phoneSVG} alt='phone'></img>
  </div>
    
    
    <input 
      className={style.reg_input}
      name='contactTel'
      placeholder='טלפון של אחד מבני הזוג'
      value={state.contactTel || ''}
      onChange={
        event => handleData(event)
      }
       type='tel'
    //   inputMode='email'
       autoComplete='tel'
     ></input>
  </form>

<div>


</div>
<Link to='/eventfound' style={{width:'100%', marginTop: 'auto'}}>
  <button className={style.btn_continue_payment}>המשך</button>  
</Link>
   
  </>

}

/>
  );
}

export default EventFound;
