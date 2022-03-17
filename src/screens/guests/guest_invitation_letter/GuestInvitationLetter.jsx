
import style from './GuestInvitationLetter.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container1 from '../../../containers/container_1/Container1';
import { useNavigate } from "react-router-dom";
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
function GuestInvitationLetter() {
  const [greetText, setGreetText] = useState('')
  const [greetTextFinal, setGreetTextFinal] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setGreetText({[event.target.name]:event.target.value})
}
// useEffect(()=>{

// }) 


  return (
<Container1
headerContent={
  <h1>אישורי הגעה</h1>
}
bodyContent={
  <>
     <label className={style.lbl_message} for text>נוסח ההודעה</label>

     <textarea  
     name='text'
     className={style.input_greet}
     value={greetText.text}
     onChange={handleChange}
     >

     </textarea >

     {/* <button 
     disabled={greetText===greetTextFinal}
      className={style.btn_confirm}
      onClick={()=>setGreetTextFinal(greetText)}
      >
     שמירה
      </button> */}
      <button 
      className={style.btn_confirm}
      onClick={()=>navigate('/guestinvitationlettersent')}
      >
      SMS שליחת אישורי הגעה דרך
      </button>
      <div className={style.divider}>
        <span className={style.divider_text}>
          או
    
        </span>
      </div>
        <button 
    //  disabled={greetText===greetTextFinal}
      className={style.btn_confirm}
      onClick={()=>navigate('/guestinvitationpreview',{state:greetText})}
      >
     ראה ושתף עמוד הזמנה
      </button>
      {/* <div className={style.share_container}>
      <EmailShareButton url={window.location.href}>
     <EmailIcon size={32} />
      </EmailShareButton>
      <FacebookShareButton url={window.location.href}>
     <FacebookIcon size={32} />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href}>
     <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.href}>
     <WhatsappIcon size={32} />
      </WhatsappShareButton>
      <TelegramShareButton url={window.location.href}>
     <TelegramIcon size={32} />
      </TelegramShareButton>
      </div> */}
      <button 
      className={style.btn_confirm}
      onClick={()=>navigate('/eventsummary')}
      >
      סיום
      </button>
  </>
}

/>

  );
}

export default GuestInvitationLetter;
