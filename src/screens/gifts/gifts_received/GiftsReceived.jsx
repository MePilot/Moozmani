import style from './GiftsReceived.module.css'
import { useState , useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import searchSVG from './search.svg'
import triangle from './triangle.svg'

const contactList = [
  {id:0, name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {id:1, name:'מיכאל', tel:'054-7536568',sum: '₪500'},
  {id:2, name:'סלבה', tel:'053-7568568',sum: '₪500'}, 
  {id:3,name:'ירון', tel:'058-7536568', sum: '₪500'},
  {id:4,name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {id:5,name:'מיכאל', tel:'054-7536568', sum: '₪500'},
  {id:6,name:'סלבה', tel:'053-7568568', sum: '₪500'}, 
  {id:7,name:'ירון', tel:'058-7536568', sum: '₪500'},
  {id:8,name:'אריאל', tel:'054-7568568', sum: '₪500'}, 
  {id:9,name:'מיכאל', tel:'054-7536568', sum: '₪500'},
  {id:10,name:'סלבה', tel:'053-7568568', sum: '₪500'}, 
  {id:11,name:'ירון', tel:'058-7536568', sum: '₪500'}
]

function GiftsReceived() {
  const [toggle, setToggle] = useState('')
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
  <h1>המתנות שקיבלתי</h1>
}

bodyContent={
  <>
    
<div className={style.sum_container}>
  <p className={style.sum_label}>:התקבל באשראי<br/><span className={style.sum}>₪24,000</span> </p>
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
             
              onClick={()=>setToggle((toggle)=> ({...toggle, [contact.id]: !toggle[contact.id] }))}
              >

                <div  className={style.payment_list_item_container}>
                <span>{contact.name}</span>
               
               <div className={style.payment_list_item_price}>
               <span className={style.payment_list_item_sum}>{contact.sum}</span>
               
               <img 
               className={toggle[contact.id] ? style.triangle_icon_down : style.triangle_icon_up}
               src={triangle}
               ></img>
               
               
               </div>
                  
                </div>
               
                <div className={toggle[contact.id] ? style.payment_list_item_desc_down : style.payment_list_item_desc_up}>
                     
                     <p style={{margin:0, fontSize:'16px', fontWeight:'bold'}}>מזל טוב אח יקר!</p>
                    <span>שיהיה אחלה זוגיות עם דניאל המהממת ושיהיה לכם רק טוב ובהצלחה אוהב, דקל וקנין</span>
               
                    <div className={style.payment_list_item_time}>
                     01/02/22, 20:30
                   </div>
                </div>
                  
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
