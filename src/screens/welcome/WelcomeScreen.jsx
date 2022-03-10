import style from './WelcomeScreen.module.css'
import backgroundImage from './background.png'
import brandImage from './brand_icon.png'
import arrowSVG from './arrow_left.svg'
import { useNavigate } from 'react-router-dom';

function WelcomeScreen() {
  const navigate = useNavigate()

  return (

    <div className={style.container}>
      <img className={style.brand_pic} src={brandImage} alt='Brand' />
      <img className={style.background_pic} src={backgroundImage} alt='Background' />

      
        <p className={style.entry}>כל מה שצריך<br/><strong>לאירוע מושלם</strong></p>
     
      <div className={style.entry_shadow} >
      כל מה שצריך<br/><strong>לאירוע מושלם</strong>
      </div>

      <button className={style.btn_enter}
        onClick={() => navigate('/phone')}
      >
        <img className={style.arrow_icon1} src={arrowSVG} alt='arrow' />
        <span>מתכילים מכאן</span>
      </button>

      <div className={style.btn_enter_shadow} />

    </div>
  );
}

export default WelcomeScreen;
