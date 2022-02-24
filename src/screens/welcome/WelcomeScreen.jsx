
import './WelcomeScreen.css'
import backgroundImage from './background.png'
import brandImage from './brand_icon.png'
import arrowSVG from './arrow_left.svg'
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  
    return (

    <div className='container'>
      <img className='brand_pic' src={brandImage} alt='Brand'/>
      <img className='background_pic' src={backgroundImage} alt='Background'/>
      <div className='entry'>
        <p>כל מה שצריך <br/> לאירוע מושלם</p>
      
      </div>
      <div className='entry_shadow'>
        
      </div>
      <Link to="/phone">
        <button className='btn_enter'>
          <img className='arrow_icon1' src={arrowSVG} alt='arrow'/>
            <span>מתכילים מכאן</span>
        </button>
      </Link>
     
      <div className='btn_enter_shadow'>
       
      </div>
    </div>
  );
}

export default WelcomeScreen;
