import style from './Payment.module.css'
import styleLoader from './loader.module.css'
import visaSVG from './visa.svg'
import mastercardSVG from './mastercard.svg'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Container1 from '../../containers/container_1/Container1';

function Payment() {
  const [state, setState] = useState({})
  
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
  <h1>אמצעי תשלום</h1>
}
bodyContent={
  <>
  <form>
  <input 
        className={style.reg_input}
        placeholder="מס' כרטיס אשראי"
        name='cardNum'
        value={state.cardNum || ''}
        onChange={
        event => handleData(event)
        }
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
     
     ></input>
     
     {state.cardType==='visa' && <img className={style.card_icon} src={visaSVG} alt='visa'></img>}
     {state.cardType==='mastercard' && <img className={style.card_icon} src={mastercardSVG} alt='mastercard'></img>}

    
     <input 
        className={style.reg_input}
        placeholder='תוקף'
        name='expdate'
        value={state.expdate || ''}
        onChange={
          event => handleData(event)
        }
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
     ></input>
     
     <input 
      className={style.reg_input}
      name='code'
      placeholder='ספרות בגב הכרטיס'
      value={state.code || ''}
      onChange={
        event => handleData(event)
      }
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
    
    <input 
      className={style.reg_input}
      name='id'
      placeholder='ת.ז של בעל הכרטיס'
      value={state.id || ''}
      maxLength="9"
      onChange={
        event => handleData(event)
      }
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}
     ></input>
  </form>

<div>
<div className={styleLoader.lds_dual_ring}>

</div>
<p>אנה המתן</p>
</div>
<Link to='/profilecreated' style={{width:'100%', marginTop: 'auto'}}>
  <button className={style.btn_continue_payment}>המשך</button>  
</Link>
   
     
  </>

}

/>
  );
}

export default Payment;
