
import style from './MainMenu.module.css'
import brandImage from './brand_icon2.svg'
import closeSVG from './close.svg'
import { useNavigate } from 'react-router-dom';

function MainMenu() {
  const navigate = useNavigate();
    return (

    <div className={style.container}>
      <img className={style.close_icon} src={closeSVG}></img>

      <div className={style.container_inner_main}>
        <img src={brandImage}></img>

        <ul className={style.menu}>
          <li 
          onClick={()=>navigate('/eventsearch')}
          >הענקת מתנה
          </li>
          <li  onClick={()=>navigate('/eventcreate')}>יצירת אירוע</li>
          <li>ניהול האירוע שלי</li>
          <li>הגדרות</li>
          <li  onClick={()=>navigate('/contactus')}>צור קשר</li>
        </ul>
        <button className={style.btn_logout}>התנתקות</button>
      </div>
    

    </div>
  );
}

export default MainMenu;
