import style from './Container1.module.css'
import arrowSVG from './arrow_right.svg'
import { useNavigate } from "react-router-dom";
import bellSVG from './bell.svg'
import menuSVG from './menu.svg'
import iconSVG from './icon.svg'
import MainMenu from '../../screens/main_menu/MainMenu';
import { useState, useEffect, useRef} from 'react';
import Notification from '../../notification/Notification';
const nots = [
  {
    arrive:true,
    date:'לפני 3 שעות',
    content:'ברק אלבז מגיע'

},
{
  arrive:false,
  date:'לפני 3 שעות',
  content:'ברק אלבז מגיע'

},
{
 
  date:'לפני 3 שעות',
  content:'סתם הודעה'

}
]
function Container1({headerContent, bodyContent}) {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  const [toggleNotifications, setToggleNotifications] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setToggleNotifications(false));

  return (

    <div className={style.container}>
       <div className={!toggle ? style.menu : style.menu_opened}> 
        <MainMenu setToggle={setToggle}/>
        </div>
      <div className={style.navbar}>
        <div className={style.bell}
         onClick={()=>setToggleNotifications(toggleNotifications=> !toggleNotifications)}
        
        > 
        <img  src={bellSVG}
        
        
        ></img>
         <div
        className={style.circle}
        onClick={()=>setToggleNotifications(toggleNotifications=> !toggleNotifications)}
        >3</div>
        </div>
       
        <img style={{cursor:'pointer'}} src={iconSVG}
         onClick={()=>navigate('/loggedin')}
        
        ></img>
        <img className={style.menu_icon} src={menuSVG}
        onClick={()=>setToggle(toggle=> !toggle)}
        ></img>
    <Notification 
    data={nots}
    toggle={toggleNotifications} 
    setToggleNotifications={setToggleNotifications}/>


      {/* <div ref={ref} className={!toggleNotifications ? style.notifications_container : style.notifications_container_opened}>
          
          <a href='/guestinvitationmessage'>הזמנה</a>


        </div> */}
      </div>
      <header className={style.header}>
        <img className={style.arrow_icon} src={arrowSVG} alt='arrow'
        onClick={()=>navigate(-1)}
        />
        {headerContent && headerContent}
      </header>

     
        {bodyContent && bodyContent}
     
      
    </div>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default Container1;
