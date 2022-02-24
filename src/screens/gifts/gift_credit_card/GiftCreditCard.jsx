import style from './GiftCreditCard.module.css'
import styleLoader from './loader.module.css'
import visaSVG from './visa.svg'
import mastercardSVG from './mastercard.svg'
import { useState, useEffect } from 'react';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";

function GiftCreditCard() {
  const [state, setState] = useState({})
  const navigate = useNavigate()

  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }

  useEffect(() => {
      const type = CardIdentify(state.cardNum || '')
      setState((prev)=>({...prev,cardType:type}))
    },[state.cardNum]);

  const CardIdentify = (number)=> {
      const CARDS = {
          visa:'^4[0-9]{12}(?:[0-9]{3})?$',
          mastercard: '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$',
          americanexpress: '^3[47][0-9]{13}$'
      }

      for (const card in CARDS) {
        if(number.match(CARDS[card])) return card
      }
      return null
  }

  return (
<Container1
headerContent={
  <h1>הענקת מתנה</h1>
}
bodyContent={
  <>
  <p>כרטיס אשראי</p>
  <form>
  <input 
        className={style.reg_input}
        placeholder="מס' כרטיס אשראי"
        name='cardNum'
        value={state.cardNum || ''}
        onChange={
        event => handleData(event)
        }
        // type='text'
        // autoComplete='given-name'
     
     ></input>
     
     {state.cardType==='visa' && <img className='card_icon' src={visaSVG} alt='visa'></img>}
     {state.cardType==='mastercard' && <img className='card_icon' src={mastercardSVG} alt='mastercard'></img>}

    
     <input 
        className={style.reg_input}
        placeholder='תוקף'
        name='expdate'
        value={state.expdate || ''}
        onChange={
          event => handleData(event)
        }
        // type='text'
        // autoComplete='family-name'
     ></input>
     
     <input 
      className={style.reg_input}
      name='code'
      placeholder='ספרות בגב הכרטיס'
      value={state.code || ''}
      onChange={
        event => handleData(event)
      }
    //   type='email'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
    
    <input 
      className={style.reg_input}
      name='id'
      placeholder='ת.ז של בעל הכרטיס'
      value={state.id || ''}
      onChange={
        event => handleData(event)
      }
    //   type='email'
    //   inputMode='email'
    //   autoComplete='email'
     ></input>
  </form>

  <label className={style.form_control}>
       <input type="checkbox" name="guestList" className={style.input_my} value={state.guestList}
                     onChange={
                      event => handleData(event)
                    }
                   />
                 <span>שמור את פרטי הכרטיס בחשבוני</span>
      </label>

<div>

<div className={styleLoader.lds_dual_ring}>

</div>
<p>אנה המתן</p>
</div>

  <button
  className={style.btn_continue_payment}
  onClick={()=>navigate('/giftpaymentsuccess')}
  >תשלום</button>  

   
     
  </>

}

/>
  );
}

export default GiftCreditCard;
