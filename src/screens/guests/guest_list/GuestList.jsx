import style from './GuestList.module.css'
import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import searchSVG from './search.svg'
import triangle from './triangle.svg'
import teamSVG from './team.svg'

const contactList = [
  {id:0, name:'אריאל', tel:'054-7568568', sum: '1/3', arrive:'yes'}, 
  {id:1, name:'מיכאל', tel:'054-7536568',sum: '1/3', arrive:'no'},
  {id:2, name:'סלבה', tel:'053-7568568',sum: '1/3', arrive:'maybe'}, 
  {id:3,name:'ירון', tel:'058-7536568', sum: '1/3', arrive:'yes'},
  {id:4,name:'אריאל', tel:'054-7568568', sum: '2/3', arrive:'yes'}, 
  {id:5,name:'מיכאל', tel:'054-7536568', sum: '3/3', arrive:'yes'},
  {id:6,name:'סלבה', tel:'053-7568568', sum: '1/3', arrive:'yes'}, 
  {id:7,name:'ירון', tel:'058-7536568', sum: '1/3', arrive:'yes'},
  {id:8,name:'אריאל', tel:'054-7568568', sum: '1/3', arrive:'yes'}, 
  {id:9,name:'מיכאל', tel:'054-7536568', sum: '1/3', arrive:'yes'},
  {id:10,name:'סלבה', tel:'053-7568568', sum: '1/3', arrive:'yes'}, 
  {id:11,name:'ירון', tel:'058-7536568', sum: '1/3', arrive:'yes'}
]

function GuestList() {
  const [toggle, setToggle] = useState('')
  const [state, setState] = useState('yes')
 console.log(toggle)
  const [search, setSearch] = useState('')
  const [contacts, setContacts] = useState(contactList)
  const navigate = useNavigate()

  useEffect(() => {
    setToggle(contacts.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {}))
  }, [])

  return (
    
<Container1
headerContent={
  <h1>רשימת מוזמנים</h1>
}

bodyContent={
  <>
    
    <div className={style.switch_container}>
    <button className={state==='yes' ? style.switch_button_right_selected : style.switch_button_right}
    onClick={()=>setState('yes')}
    >
    מגיעים
    </button>
  <button className={state==='no' ? style.switch_button_left_selected : style.switch_button_left}
    onClick={()=>setState('no')}
  >
 לא מגיעים
    </button>
    <button className={state==='maybe' ? style.switch_button_left_selected : style.switch_button_left}
    onClick={()=>setState('maybe')}
  >
  עולי 
    </button>
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
              <li className={style.payment_list_item} key={contact.id}
             
              onClick={()=>navigate('/guestdata',{state:contact})}
              >

                <div  className={style.payment_list_item_container}>
                <span>{contact.name}</span>
               
               <div className={style.payment_list_item_price}>
               <span className={style.payment_list_item_sum}>{contact.sum}</span>
               
               <img 
               className={style.img_icon}
               src={teamSVG}
               ></img>
               
               
               </div>
                  
                </div>
               
               
                  
                </li>
            )
          })
        }
       </ul>
       
        
  </>
}

/>
  );
}

export default GuestList;
