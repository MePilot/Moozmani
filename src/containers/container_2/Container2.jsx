import style from './Container2.module.css'
import arrowSVG from './arrow_right.svg'
import { useNavigate } from "react-router-dom";

function Container2({headerContent, bodyContent}) {
  const navigate = useNavigate()
  return (

    <div className={style.container}>
      <header className={style.header}>
        <img className={style.arrow_icon} src={arrowSVG} alt='arrow'
       onClick={()=>navigate(-1)}
        />
        {headerContent && headerContent}
      </header>

      <div className={style.container_inner}>
        {bodyContent && bodyContent}
      </div>
      
    </div>
  );
}

export default Container2;
