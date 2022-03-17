import style from './EventCreateGuestsListModify.module.css'
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';


function EventCreateGuestsListModify() {
  const location = useLocation()
  const [data, setData] = useState({...location?.state})
 
  
  const navigate = useNavigate()

  const handleData= (event)=> {
    setData((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  return (
    
<Container1
headerContent={
  <h1>שינוי נתונים</h1>
}

bodyContent={
  <>
     <p>{location?.state.name}</p>

<input 
        className={style.reg_input}
        placeholder='שם פרטי'
        name='name'
        value={data.name || ''}
        onChange={
          event => handleData(event)
        }
         type='text'
        // autoComplete='family-name'
     ></input>
<input 
        className={style.reg_input}
        placeholder='שם משפחה'
        name='fname'
        value={data.fname || ''}
        onChange={
          event => handleData(event)
        }
         type='text'
        // autoComplete='family-name'
     ></input>
     <input 
        className={style.reg_input}
        placeholder='מס׳ טלפון נייד'
        name='tel'
        value={data.tel || ''}
        onChange={
          event => handleData(event)
        }
         type='tel'
         autoComplete='tel'
         onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
     ></input>
      <button 
      className={style.btn_ok}
      onClick={()=>navigate('/eventcreateguestlisteditable',{state:data})}
      >
        שמור
          
        </button>
  </>
}

/>
  );
}

export default EventCreateGuestsListModify;
