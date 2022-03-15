import style from './notification.module.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef} from 'react';
import checkCircleSVG from './checkcircle.svg'
import XSVG from './x.svg'
import ExclamSVG from './exclam.svg'

function Item({date, arrive, content}) {
  const navigate = useNavigate()
  const [curIcon, setCurIcon] = useState(null)

  useEffect(()=> {
      switch (arrive) {
          case true:
                setCurIcon(checkCircleSVG)
                break
            case false:
                setCurIcon(XSVG)
                break
            case undefined:
                setCurIcon(ExclamSVG)
                break
      }        
  }, [arrive])
  return (
    <div className={style.container_inner}>
                        <img className={style.icon} src={curIcon}></img>
                        <div className={style.data}>
                            <p className={style.date}>{date}</p>
                            <p className={style.content}>{content}</p>

                        </div>
    </div>
    
  );
}

export default Item;
