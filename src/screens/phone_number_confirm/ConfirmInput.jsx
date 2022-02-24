import style from './PhoneNumberConfirm.module.css'

function ConfirmInput({confirmNumber}) {
 
  return (

    <div className={style.container_input}>
      <div className={style.confirm_digit}>
          {confirmNumber[0]}
      </div>
     <div className={style.confirm_digit}>
     {confirmNumber[1]}
      </div>
      <div className={style.confirm_digit}>
      {confirmNumber[2]}
      </div>
      <div className={style.confirm_digit}>
      {confirmNumber[3]}
      </div>
    </div>
  );
}

export default ConfirmInput;
