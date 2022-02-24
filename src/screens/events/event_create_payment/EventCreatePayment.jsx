import style from './EventCreatePayment.module.css'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';

function EventCreatePayment() {
  const navigate = useNavigate();
  const [state, setState] = useState(
    {
      guestList:false, 
      arrivalApproval:false,
       allowCreditCard:false,
       guestAfter:false
      }
       )
  
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
  <div className={style.container_price}>
    <span className={style.service}>עלות השירות</span>
    <span className={style.price}>₪499</span>
  </div>
  
  <div className={style.container_options}>
    <div>
    <label className={style.form_control}>
    <input type="checkbox" name="guestList" className={style.input_my} value={state.guestList}
     onChange={
      event => handleData(event)
    }
    />
   חיוב כרטיס<span className={style.creditnum}>9854</span> 
  </label>
  <label className={style.form_control}>
    <input type="checkbox" name="arrivalApproval"  className={style.input_my} value={state.arrivalApproval}
     onChange={
      event => handleData(event)
    }
    />
    הוספת כרטיס אחר
  </label>
    </div>
  
  
  </div>

  <button 
className={style.btn_pay}
onClick={()=>navigate('/eventsummary')}
>לתשלום</button> 
   
  </>

}

/>
  );
}

export default EventCreatePayment;
