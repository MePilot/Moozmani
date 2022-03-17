import style from './notification.module.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef} from 'react';
import checkCircleSVG from './checkcircle.svg'
import XSVG from './x.svg'
import ExclamSVG from './exclam.svg'
import Item from './Item';

function Notification({data, toggle, setToggleNotifications}) {
  const navigate = useNavigate()
 
  const ref = useRef()
  useOnClickOutside(ref, () => setToggleNotifications(false));

  return (
    <div ref={ref} className={toggle ? style.notifications_container_opened : style.notifications_container }>
          {
              data.length===0 ? 
              <div>
                  <p className={style.notification_text}>!אין הודעות</p>

            </div> :
              data.map((e)=> {
                  return (
                <Item 
                date={e.date}
                arrive={e.arrive}
                content={e.content}
                />
                  )
              })
          }
    

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

export default Notification;
