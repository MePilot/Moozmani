import style from './EventExpences.module.css'
import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';


function EventExpences() {
 
  const [state, setState] = useState({sum:0})
  const [expences, setExpences] = useState([])
  const navigate = useNavigate()
  
  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }
  useEffect(() => {
    
    let total=0
    expences.forEach(element => {
      total+=parseInt(element.price)
    });

    setState(prev=>({...prev, sum:total}))
  },[expences]);

  const addData= (data)=> {
    setExpences(prev=>[...prev, data])
  }

console.log(expences)
  return (
    
<Container1
headerContent={
  <h1>ניהול הוצאות האירוע</h1>
}

bodyContent={
  <>
    
<div className={style.sum_container}>
  <p className={style.sum_label}>:סכ הכל הוצאות<br/><span className={style.sum}>₪{state.sum}</span> </p>
</div>


<input 
      className={style.reg_input}
      name='category'
      placeholder='שם הוצאה'
      value={state.category || ''}
      onChange={handleData}
       
       type='text'
    
     ></input>
 <input 
      className={style.reg_input}
      name='price'
      placeholder='סכום'
      value={state.price || ''}
      onChange={handleData}
       type='text'
       onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
    
    <div
     className={style.expences_list}
    >

<table className={style.stats}>
  <tbody>
    <tr>
      <td className={style.category}><strong>הוצאה</strong></td>
      <td className={style.line}><strong>סכום</strong></td>
    
    </tr>
    
      {expences.map((item, key)=> {
        return (
          <tr key={key} className={style.category} 
          onClick={()=>setExpences(expences.filter(e=>e.category!==item.category))}>
            <td>{item.category}</td>
            <td className={style.line}>₪{item.price}</td>
          </tr>
        )
      })
      }
     
 </tbody>
</table>

    </div>
        <button 
      className={style.btn_ok}
       onClick={()=>addData(state)}
      
      >
        הוספת הוצאה
          
        </button>
  </>
}

/>
  );
}

export default EventExpences;
