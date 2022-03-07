import style from './PresentsList.module.css'
import Container2 from '../../containers/container_2/Container2';
import Present from './present/Present';
import {useNavigate} from 'react-router-dom'
import brand1 from './brand1.svg'
import brand2 from './brand2.svg'
import brand3 from './brand3.svg'
import brand4 from './brand4.svg'


const presents = [
 { 
   title:'החתונה של דניאל וירון',
   date:'יום חמישי, 21.09.22',
   location:'אולמי אבניו',
   icon:brand1,
   price:'₪500'
},
{ 
  title:'בת המצווש של יהלי',
  date:'יום חמישי, 21.09.22',
  location:'אולמי נסיה',
  icon:brand2,
  price:'₪500'
},
{ 
  title:'החינה של לירון ואנה',
  date:'יום חמישי, 21.09.22',
  location:'אולמי אגמים',
  icon:brand3,
  price:'₪500'
},
{ 
  title:'בר המצווה של בן',
  date:'יום חמישי, 21.09.22',
  location:'אולמי סופיה',
  icon:brand4,
  price:'₪500'
}

 
]
function PresentsList() {
  const navigate = useNavigate();
  return (
    
<Container2 
headerContent={
  <>
  

<div className={style.container_buttons}>
  <div className={style.btn_gift}
  
  >
    <span className={style.btn_text}>הענקת מתנה</span>

  </div>
  <div className={style.btn_gift_shadow}
   onClick={()=>navigate('/eventsearch')}
  >
   

  </div>
  <div className={style.btn_create}>
    <span className={style.btn_text}>יצירת אירוע</span>
  </div>
  <div className={style.btn_create_shadow}
   onClick={()=>navigate('/eventcreate')}
  >
  
  </div>
</div>
  </>
  
}
bodyContent={
  <>
  <p>מתנות אחרונות</p>
  
  
  <div className={style.presents_list}>
  {
    
    presents.map(present=>{ return (
<Present
      image={present.icon}
      title={present.title}
      date={present.date}
      location={present.location}
      price={present.price}
      />
    )
      
    })
  }
      </div>

  </>
}
/>
  );
}

export default PresentsList;
