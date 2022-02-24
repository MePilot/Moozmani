
import style from './GiftPaymentSuccess.module.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Container2 from '../../../containers/container_2/Container2';
import checkCircleSVG from './checkcircle.svg'

function GiftPaymentSuccess() {
 const navigate = useNavigate()
 
 const payment = {
  totalSum:1000,
  paymentsNum:4,
  eachPayment:250
 }
//  const textRepr=payment.totalSum + `₪`
  const textRepr=payment.totalSum + `₪` + '<br>' + 'ב-' + payment.paymentsNum + 'תשלומים' + "<br>" 
  + payment.eachPayment + '₪' + 'כל תשלום'

  return (
<Container2
headerContent={
  <div>
    <img src={checkCircleSVG}></img>
  <h1>!מזל טוב<br></br> התשלום עבר בהצלחה</h1>
  </div>
}
bodyContent={
  <>
     <p className={style.title}>החתונה של דניאל וירון</p>
     <p className={style.date}>יום רביעי, 12/01/2022</p>

     <div className={style.gift_data_container}>
      <p className={style.gift_data}>:הסכום שהוענק במתנה</p>
      <p className={style.gift_totalsum}>₪1000</p>
      <p className={style.gift_data_payments}>ב-<span className={style.marked}>{payment.paymentsNum}</span> תשלומים</p>
      <p className={style.gift_data_payments}>כל תשלום <span className={style.marked}>₪{payment.eachPayment}</span></p>
     </div>
     
     <div className={style.btn_group}>
        <button className={style.btn_share}>שיתוף</button>
        <button className={style.btn_quit} 
        onClick={()=>navigate('/loggedin')}
        >סיום</button>
      </div>

  </>
}

/>

  );
}

export default GiftPaymentSuccess;
