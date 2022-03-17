
import style from './GuestInvitationPreview.module.css'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";
import checkCircleSVG from './check.svg'
import wazeSVG from './waze.svg'
import questionSVG from './question.svg'
import xSVG from './x.svg'
import dateSVG from './date.svg'
import eventImageJPG from './event_image.jpg'
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

function GuestInvitationPreview() {
 
  const [guestsAmount, setGuestsAmount] = useState(1)
  const [arrive, setArrive] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  
  return (
<Container1
headerContent={
  <h1>אישור הגעה</h1>
}
bodyContent={
  <>
  <img src={eventImageJPG} className={style.summary_image}></img>
  <p className={style.title}>החתונה של דניאל וירון</p>
  <p style={{marginBottom:'2rem', marginTop:'1rem', fontSize:'1.2rem'}}>{location?.state.text}</p>
    <p style={{ margin:0}}>02/02/20 ,יום רביעי בשעה 20:00</p>
    <p style={{margin:0, fontSize:'1rem'}}>  <img className={style.waze_icon}  src={wazeSVG}></img> מקום אירוע: אולמי אגדתא </p>
   
    
   
    

    <div className='btn_group'>
    
      <div className={style.share_container}>
      <EmailShareButton url={window.location.host+'/guestinvitationmessage'}>
     <EmailIcon size={32} />
      </EmailShareButton>
      <FacebookShareButton url={window.location.host+'/guestinvitationmessage'}>
     <FacebookIcon size={32} />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.host+'/guestinvitationmessage'}>
     <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.host+'/guestinvitationmessage'}>
     <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <TelegramShareButton url={window.location.host+'/guestinvitationmessage'}>
     <TelegramIcon size={32} />
      </TelegramShareButton>
      </div>
     
     
      
    </div>
   
  </>
}

/>

  );
}

export default GuestInvitationPreview;
