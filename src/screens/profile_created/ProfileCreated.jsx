import style from './ProfileCreated.module.css'
import checkSVG from './check.svg'
import Container2 from '../../containers/container_2/Container2';
import { useNavigate } from "react-router-dom";

function ProfileCreated() {
  const navigate = useNavigate()
  return (
    
<Container2 
headerContent={
  <>
   <img className={style.check_icon} src={checkSVG} alt='check'/>
         <p>יצרנו את<br></br>!החשבון שלך</p>
  </>
}
bodyContent={
  <>
   <p className={style.change_label}>מהיום עולם האירועים משתנה לחלוטין</p>
      <div className={style.btn_group}>
        <button 
        className={style.btn_present}
        onClick={()=>navigate('/eventsearch')}
        >להעניק מתנה באירוע</button>
        <button 
        className={style.btn_create}
        onClick={()=>navigate('/eventcreate')}
        >ליצור את האירוע שלי</button>
      </div>
  </>
}
/>
  );
}

export default ProfileCreated;
