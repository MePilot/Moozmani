import style from './GiftsReceived.module.css'
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import searchSVG from './search.svg'

const contactList = [
  {name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {name:'מיכאל', tel:'054-7536568',sum: '₪500'},
  {name:'סלבה', tel:'053-7568568',sum: '₪500'}, 
  {name:'ירון', tel:'058-7536568', sum: '₪500'},
  {name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {name:'מיכאל', tel:'054-7536568', sum: '₪500'},
  {name:'סלבה', tel:'053-7568568', sum: '₪500'}, 
  {name:'ירון', tel:'058-7536568', sum: '₪500'},
  {name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {name:'מיכאל', tel:'054-7536568', sum: '₪500'},
  {name:'סלבה', tel:'053-7568568', sum: '₪500'}, 
  {name:'ירון', tel:'058-7536568', sum: '₪500'}
]

function GiftsReceived() {
  const [state, setState] = useState('auto')
  const [data, setData] = useState({})
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [contacts, setContacts] = useState(contactList)
  const navigate = useNavigate()

  const handleData= (event)=> {
    setData((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  return (
    
<Container1
headerContent={
  <h1>המתנות שקיבלתי</h1>
}

bodyContent={
  <>
    
<div className={style.sum_container}>
  <p className={style.sum_label}>התקבל באשראי<br/><span className={style.sum}>₪24,000</span> </p>
</div>

<div className={style.reg_input_container}>
<input 
      className={style.reg_input}
      name='contactName1'
      placeholder='חיפוש איש קשר'
      value={search}
      onChange={
        event => setSearch(event.target.value)
      }
       type='text'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
  <img className={style.card_icon} src={searchSVG} alt='search'></img>
  </div>
  <ul className={style.payment_list}>
        {
          contacts.map((contact)=> {
            return (
              <li className={style.payment_list_item}>
               
                <label className={style.form_control}>
                  <input type="checkbox" name="guestList" className={style.input_my} value={state.guestList}
                    // onChange={
                    //   event => handleData(event)
                    // }
                   />
                 <span>{contact.name}</span>
                </label>

               {contact.tel}
                 
                </li>
            )
          })
        }
       </ul>
        
        <button 
      className={style.btn_ok}
      onClick={()=>navigate('/eventcreateguestlistfinal')}
      
      >
        אישור
          
        </button>
  </>
}

/>
  );
}

export default GiftsReceived;
