
import style from './GuestResponceReceived.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container2 from '../../../containers/container_2/Container2';
import { useNavigate } from "react-router-dom";
import planeSVG from './plane.svg'

function GuestResponceReceived() {
  const navigate = useNavigate()
  return (
<Container2
headerContent={
  <>
    <img src={planeSVG}></img>
    <h1>אישור הגעה</h1>
  </>
}
bodyContent={
  <>
     <p>!תודה<br/>תשובתך נקלתה בהצלחה</p>

  </>
}

/>

  );
}

export default GuestResponceReceived;
