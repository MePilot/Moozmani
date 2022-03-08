import style from './EventExpences.module.css'
import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';


function EventExpences() {
 
  const [entry, setEntry] = useState({category:'', price:0})
  const [expences, setExpences] = useState([])
  const [sum, setSum] = useState(0)
  console.log(expences)
  const navigate = useNavigate()
  
  const handleData= (event)=> {
   setEntry((prev)=>({...prev, [event.target.name]:event.target.value}))
  }
  
  useEffect(() => {
    
    let total=0
    expences.forEach(element => {
      total+=parseInt(element.price)
    });

    setSum(total)
  },[expences]);

  const addData= (data)=> {
    setExpences(prev=>[...prev, data])
  }
  const changeData= (data)=> {
    setExpences(prev=>[...prev, data])
  }

  return (
    
<Container1
headerContent={
  <h1>ניהול הוצאות האירוע</h1>
}

bodyContent={
  <>
    
<div className={style.sum_container}>
  <p className={style.sum_label}>:סכ הכל הוצאות<br/><span className={style.sum}>₪{sum}</span> </p>
</div>

<input 
      className={style.reg_input}
      name='category'
      placeholder='שם הוצאה'
      value={entry.category}
      onChange={handleData}
      type='text'
     ></input>
 <input 
      className={style.reg_input}
      name='price'
      placeholder='סכום'
      value={entry.price || ''}
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
          <tr 
            key={key} 
            className={entry.id===item.id ? style.category_selected : style.category} 
            // onClick={()=>setExpences(expences.filter(e=>e.category!==item.category))}
            onClick={()=>setEntry(item)}
            >
              <td>{item.category}</td>
              <td className={style.line}>₪{parseInt(item.price)}</td>
          </tr>
        )
      })
      }
     
 </tbody>
</table>

    </div>
    <div  className={style.btn_group}>
    <button 
      className={style.btn_ok}
       onClick={()=>addData({...entry, id:Math.random()}) }
      
      >
        הוספת הוצאה
          
        </button>
        <button 
      className={style.btn_ok}
      
      onClick={()=>setExpences(expences.map(e=> e.id!==entry.id ? e :entry ))}
      
      >
        עריכת הוצאה
          
        </button>
        <button 
      className={style.btn_ok}
      onClick={()=>setExpences(expences.filter(e=>e.id!==entry.id))}
      
      >
        מחיקת הוצאה
          
        </button>

    </div>
      
  </>
}

/>
  );
}

export default EventExpences;
