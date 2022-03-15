
import style from './MainMenu.module.css'
import brandImage from './brand_icon2.svg'
import closeSVG from './close.svg'
import { useNavigate } from 'react-router-dom';

function MainMenu({setToggle}) {
  const navigate = useNavigate();
    return (

    <div className={style.container}>
      <img className={style.close_icon} 
      src={closeSVG}
      onClick={()=>setToggle(false)}
      
      ></img>

      <div className={style.container_inner_main}>
        <img src={brandImage}></img>

        <ul className={style.menu}>
          <li 
          onClick={()=>navigate('/eventsearch')}
          >הענקת מתנה
          </li>
          <li  onClick={()=>navigate('/eventcreate')}>יצירת אירוע</li>
          <li onClick={()=>navigate('/eventsummary')}>ניהול האירוע שלי</li>
          <li>הגדרות</li>
          <li  onClick={()=>navigate('/contactus')}>צור קשר</li>
          <li  onClick={()=>navigate('/about')}>קצת עלינו</li>
        </ul>
        <button className={style.btn_logout}>התנתקות</button>
      </div>
    

    </div>
  );
}

export default MainMenu;
