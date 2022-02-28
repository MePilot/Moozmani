import style from './EventExpences.module.css'
import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';


function EventExpences() {
 
  const [state, setState] = useState({})
  const navigate = useNavigate()
  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  return (
    
<Container1
headerContent={
  <h1>ניהול הוצאות האירוע</h1>
}

bodyContent={
  <>
    
<div className={style.sum_container}>
  <p className={style.sum_label}>:סכ הכל הוצאות<br/><span className={style.sum}>₪100,000</span> </p>
</div>


<input 
      className={style.reg_input}
      name='location'
      placeholder='אולם'
      value={state.location}
      onChange={
        event => handleData(event.target.value)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
 <input 
      className={style.reg_input}
      name='DG'
      placeholder='די ג׳יי'
      value={state.DG}
      onChange={
        event => handleData(event.target.value)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
     <input 
      className={style.reg_input}
      name='light'
      placeholder='הגברה ותאורה'
      value={state.light}
      onChange={
        event => handleData(event.target.value)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
     <input 
      className={style.reg_input}
      name='cameraman'
      placeholder='צלם'
      value={state.cameraman}
      onChange={
        event => handleData(event.target.value)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
  
        
        <button 
      className={style.btn_ok}
      // onClick={()=>navigate('/eventcreateguestlistfinal')}
      
      >
        הוספת הוצאה
          
        </button>
  </>
}

/>
  );
}

export default EventExpences;
