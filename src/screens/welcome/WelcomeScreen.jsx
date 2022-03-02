
import style from './WelcomeScreen.module.css'
import backgroundImage from './background.png'
import brandImage from './brand_icon.png'
import arrowSVG from './arrow_left.svg'
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  
    return (

    <div className={style.container}>
      <img className={style.brand_pic} src={brandImage} alt='Brand'/>
      <img className={style.background_pic} src={backgroundImage} alt='Background'/>
      <div className={style.entry}>
        <p>כל מה שצריך <strong>לאירוע מושלם</strong></p>
      
      </div>
      <div className={style.entry_shadow}>
        
      </div>
      <Link to="/phone">
        <button className={style.btn_enter}>
          <img className={style.arrow_icon1} src={arrowSVG} alt='arrow'/>
            <span>מתכילים מכאן</span>
        </button>
      </Link>
     
      <div className={style.btn_enter_shadow}>
       
      </div>
    </div>
  );
}

export default WelcomeScreen;
