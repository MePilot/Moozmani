import style from './EventCreate.module.css'
import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import Container1 from '../../../containers/container_1/Container1';

function EventCreate() {
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
  <p>יוצרים את האירוע המיוחד שלכם ומנהלים את הכל באפליקציה</p>

  <div>

  <label className={style.form_control}>
    <input type="checkbox" name="guestList" className={style.input_my} value={state.guestList}
     onChange={
      event => handleData(event)
    }
    />
    יצירת רשימת מוזמנים
  </label>
  <label className={style.form_control}>
    <input type="checkbox" name="arrivalApproval"  className={style.input_my} value={state.arrivalApproval}
     onChange={
      event => handleData(event)
    }
    />
    אישורי הגעה
  </label>
  <label className={style.form_control}>
    <input type="checkbox" name="allowCreditCard"  className={style.input_my} value={state.allowCreditCard}
     onChange={
      event => handleData(event)
    }
    />
    קבלת מתנות באשראי
  </label>
  <label className={style.form_control}>
    <input type="checkbox" name="guestAfter"  className={style.input_my} value={state.guestAfter}
     onChange={
      event => handleData(event)
    }
    />
    טיפול במזומן לאחר האירוע
  </label>
  
  </div>
<div className={style.btn_group}>
<button 
className={style.btn_more}
onClick={()=>navigate('/')}
>לפרטים נוספים</button> 
<button 
className={style.btn_create}
onClick={()=>navigate('/eventcreatecategory')}
>התחל ביצירת האירוע</button> 
<button 
className={style.btn_code}
onClick={()=>navigate('/eventcreatecode')}
>יש לי קוד מהאולם</button> 
</div>
 

   
  </>

}

/>
  );
}

export default EventCreate;
