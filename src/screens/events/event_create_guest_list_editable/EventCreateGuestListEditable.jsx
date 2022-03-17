import style from './EventCreateGuestListEditable.module.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import searchSVG from './search.svg'

const contactList = [
  {name:'אריאל', tel:'054-7568568', cat:'family', id:1}, 
  {name:'מיכאל', tel:'054-7536568', cat:'family',id:2},
  {name:'סלבה', tel:'053-7568568', cat:'friends',id:3}, 
  {name:'ירון', tel:'058-7536568', cat:'friends',id:4},
  {name:'אריאל', tel:'054-7568568', cat:'friends',id:5}, 
  {name:'מיכאל', tel:'054-7536568', cat:'friends',id:6},
  {name:'סלבה', tel:'053-7568568', cat:'army',id:7}, 
  {name:'ירון', tel:'058-7536568', cat:'army',id:8},
  {name:'אריאל', tel:'054-7568568', cat:'army',id:9}, 
  {name:'מיכאל', tel:'054-7536568', cat:'army',id:10},
  {name:'סלבה', tel:'053-7568568', cat:'army',id:11}, 
  {name:'ירון', tel:'058-7536568', cat:'army',id:12}
]


function EventCreateGuestsListEditable() {
  const [state, setState] = useState('auto')
  const [data, setData] = useState({})
  const location = useLocation()
  const [search, setSearch] = useState('')
  const [contacts, setContacts] = useState(contactList)
  const [checked, setChecked] = useState([])
  const navigate = useNavigate()

  // Add/Remove checked item from list
const handleCheck = (event) => {
  //console.log()
  let obj = JSON.parse(event.target.dataset.contact)
  let updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, obj];
  } else {
    updatedList.splice(checked.indexOf(obj), 1);
  }
  setChecked(updatedList);
};
const handleClick= (e) => {
  e.stopPropagation(); 
};
useEffect(()=>{
  if (location.state)
    setContacts(contacts.map(e=> e.id!==location?.state.id ? e :location?.state ))

}
,[location?.state])

  return (
    
<Container1
headerContent={
  <h1>רשימת אורחים</h1>
}

bodyContent={
  <>
    
     <div className={style.categories_container}>
     <div className={style.category_a}
       onClick={()=>setContacts(contactList)}
       >
         <span className={style.category_name}>כולם</span>
       </div>
       <div className={style.category_a}
       onClick={()=>setContacts(contactList.filter(c=>c.cat==='family'))}
       >
         <span className={style.category_name}>משפחה</span>
       </div>
       <div className={style.category_a}
       onClick={()=>setContacts(contactList.filter(c=>c.cat==='friends'))}
       >
         <span className={style.category_name}>חברים</span>
       </div>
       <div className={style.category_a}
        onClick={()=>setContacts(contactList.filter(c=>c.cat==='army'))}
       >
         <span className={style.category_name}>צבא</span>
       </div>
       <div className={style.category_a}
        onClick={()=>setContacts(contactList.filter(c=>c.cat==='work'))}
       >
         <span className={style.category_name}>עבודה</span>
       </div>
       <div 
      className={style.btn_other}>
        אחר
          
        </div>
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
              <li className={style.payment_list_item}
              onClick={()=>navigate('/eventcreateguestlistmodify',{state:contact})}
              >
               
                <label className={style.form_control}>
                  <input 
                  type="checkbox" 
                  name="guestList" 
                  className={style.input_my} 
                  data-contact={JSON.stringify(contact)}
                 onClick={handleClick}
                
                 
                    onChange={handleCheck}
                   />
                 <span
              
                 >{contact.name}</span>
                </label>

               {contact.tel}
                 
                </li>
            )
          })
        }
       </ul>
       <div
       className={style.btn_group}>
 <button 
      className={style.btn_ok}
      onClick={
        ()=>setContacts(
          (contacts)=> contacts.filter(({ id: id1 }) => !checked.some(({ id: id2 }) => id2 === id1)))}
     
      >
        מחיקה
          
        </button>
        <button 
      className={style.btn_ok}
      onClick={()=>navigate('/eventcreateguestlistfinal')}
      
      >
        אישור
          
        </button>
       </div>
      
  </>
}

/>
  );
}

export default EventCreateGuestsListEditable;
