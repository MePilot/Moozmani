import style from './EventCreateGuestsList.module.css'
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import searchSVG from './search.svg'

const contactList = [
  {name:'אריאל', tel:'054-7568568'}, 
  {name:'מיכאל', tel:'054-7536568'},
  {name:'סלבה', tel:'053-7568568'}, 
  {name:'ירון', tel:'058-7536568'},
  {name:'אריאל', tel:'054-7568568'}, 
  {name:'מיכאל', tel:'054-7536568'},
  {name:'סלבה', tel:'053-7568568'}, 
  {name:'ירון', tel:'058-7536568'},
  {name:'אריאל', tel:'054-7568568'}, 
  {name:'מיכאל', tel:'054-7536568'},
  {name:'סלבה', tel:'053-7568568'}, 
  {name:'ירון', tel:'058-7536568'}
]


function EventCreateGuestsList() {
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
  <h1>הזמנת אורחים</h1>
}

bodyContent={
  <>
     <p>{location?.state}</p>

<div className={style.switch_container}>
  <button className={state==='auto' ? style.switch_button_right_selected : style.switch_button_right}
  onClick={()=>setState('auto')}
  >
  הוספה מאנשי קשר
  </button>
 <button className={state==='manual' ? style.switch_button_left_selected : style.switch_button_left}
  onClick={()=>setState('manual')}
 >
 הוספה ידנית
  </button>

</div>
{state==='auto' ? 
<>
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
: 
<>
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
      className={style.btn_ok}>
        המשך
          
        </button>
</>

}
  </>
}

/>
  );
}

export default EventCreateGuestsList;
