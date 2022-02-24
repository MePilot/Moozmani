
import style from './PhoneKeyboard.module.css'
import deleteIcon from  './delete.svg'

function PhoneKeyboard({addDigit, removeDigit}) {
  const digits = [3,2,1,6,5,4,9,8,7]
 
  return (

    <div className={style.phone_keyboard}>
      {
        digits.map(digit=> (
          <div className={style.digit} onClick={()=>addDigit(digit)}>
            {digit}
          </div>
      ))
      
      }
     
      <div className={style.digit} onClick={()=>removeDigit()}>
        <img src={deleteIcon} alt='delete'></img>
      </div>
      <div className={style.digit} onClick={()=>addDigit(0)}>
        0
      </div>
    </div>
  );
}

export default PhoneKeyboard;
