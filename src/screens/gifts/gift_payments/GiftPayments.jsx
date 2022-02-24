
import style from './GiftPayments.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';

function GiftPayments() {
  const [numPayments, setNumPayments] = useState('')
 
  return (
<Container1
headerContent={
  <h1>הענקת מתנה</h1>
}
bodyContent={
  <>
     <p>?לכמה תשלומים לחלק</p>

     <div className={style.payments}>
       <button
        value='1'
        className={style.btn_payment1}
        onClick={(event)=>setNumPayments(event.target.value)}
        >תשלום אחד
        </button>

       <button 
        value='2'
        className={style.btn_payment}
        onClick={(event)=>setNumPayments(event.target.value)}
        >2
        </button>
         <button 
        value='3'
        className={style.btn_payment}
        onClick={(event)=>setNumPayments(event.target.value)}
        >3
        </button>
       <button 
        value='4'
        className={style.btn_payment}
        onClick={(event)=>setNumPayments(event.target.value)}
        >4</button>
         <button 
        value='5'
        className={style.btn_payment}
        onClick={(event)=>setNumPayments(event.target.value)}
        >5</button>
     </div>

<ul className={style.payment_list}>
  <li 
  className={style[`payment_list_item_${numPayments==1}`]}>
    <span className={style.price_first}>תשלום אחד</span> <span className={style.price_digits}>&#8362;1010</span>
  </li>
  <li 
  className={style[`payment_list_item_${numPayments==2}`]}>
    <span className={style.price}>2 תשלומים</span> <span className={style.price_digits}>&#8362;515x2</span>
  </li>
  <li 
  className={style[`payment_list_item_${numPayments==3}`]}>
    <span className={style.price}>3 תשלומים</span> <span className={style.price_digits}>&#8362;515x2</span>
  </li>
  <li 
  className={style[`payment_list_item_${numPayments==4}`]}>
    <span className={style.price}>4 תשלומים</span> <span className={style.price_digits}>&#8362;515x2</span>
  </li>
  <li 
  className={style[`payment_list_item_${numPayments==5}`]}>
    <span className={style.price}>5 תשלומים</span> <span className={style.price_digits}>&#8362;515x2</span>
  </li>
</ul>
    
     <Link to="/giftgreetings" style={{ width: '100%' }}>
      <button 
      className={style.btn_send_confirm}>
         בחרתי
        </button>
     </Link>
     
  </>
}

/>

  );
}

export default GiftPayments;
