import style from './Registration.module.css'
import { useState } from 'react';
import maleSVGPressed from './male_pressed.svg'
import maleSVGUnpressed from './male_unpressed.svg'
import femaleSVGPressed from './female_pressed.svg'
import femaleSVGUnpressed from './female_unpressed.svg'
import facebook from './facebook.svg'
import google from './google.svg'
import { Link } from 'react-router-dom';
import Container1 from '../../containers/container_1/Container1';

function Registration() {
  const [state, setState] = useState({condition:false})
  
  const handleData= (event)=> {
    setState((prev)=>({...prev,[event.target.name]:event.target.value}))
  }
  const handleSexSelect= (sex)=> {
    setState((prev)=>({...prev,sex:sex}))
  }
 
  return (
<Container1
headerContent={
  <h1>הרשמה</h1>
}
bodyContent={
  <>
 <input 
        className={style.reg_input}
        placeholder='שם פרטי'
        name='name'
        value={state.name}
        onChange={
        event => handleData(event)
        }
        type='text'
        autoComplete='given-name'
     
     ></input>
     
     <input 
        className={style.reg_input}
        placeholder='שם משפחה'
        name='fname'
        value={state.fname}
        onChange={
          event => handleData(event)
        }
        type='text'
        autoComplete='family-name'
     ></input>
     
     <input 
      className={style.reg_input}
      placeholder='דואר אלקטרוני'
      value={state.email}
      onChange={
        event => handleData(event)
      }
      type='email'
      inputMode='email'
      autoComplete='email'
     ></input>

     <div className={style.container_sex}>
       <div className={style.container_male}>
        <div className={style.container_circle}
          style={state.sex === 'male' ? {backgroundColor:'#E9A6A6'} : {backgroundColor:'transparent'}}  
          onClick={()=>handleSexSelect('male')}>
          <img 
            src={state.sex === 'male' ? maleSVGPressed: maleSVGUnpressed}
            alt='male'
          >
          </img>
       </div>
       גבר
       </div>
       <div className={style.container_male}>
        <div 
           className={style.container_circle}
          style={state.sex === 'female' ? {backgroundColor:'#E9A6A6'} : {backgroundColor:'transparent'}} 
          onClick={()=>handleSexSelect('female')}
        >
            <img 
              src={state.sex === 'female' ? femaleSVGPressed: femaleSVGUnpressed}
              alt='female'
            >

            </img>
        </div>
      אישה
       </div>
      
     </div>


     <label className={style.form_control}>
       <input type="checkbox" name="guestList" className={style.input_my} value={state.guestList}
                     onChange={
                      event => handleData(event)
                    }
                   />
                 <span>אני מאשר/ת את תנאי השימוש</span>
      </label>


    <div className={style.btn_group}>
    <Link to="/payment" style={{width:'100%'}}>
        <button className={style.btn_continue_reg}>המשך</button>
      </Link>
     
      <div className={style.divider}>
        <span className={style.divider_text}>
   או
        </span>
      </div>

      <button className={style.btn_facebook_register}>
        <span>רשמה עם פייסבוק</span>
        <img src={facebook} alt='facebook'></img>
      </button>
      <button className={style.btn_google_register}>
        <span>הרשמה עם גוגל</span>
        <img src={google} alt='google'></img>
      </button>
    </div>

      
   
     
  </>
}
/>

  );
}

export default Registration;
