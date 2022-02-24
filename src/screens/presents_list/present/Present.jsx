import style from './Present.module.css'

function Present({image, title, date, location, price}) {
  
  return (
   <div className={style.item}>
     <div className={style.image_container}>
      <img className={style.image} src={image}></img>
     </div>
     <div>
      <p className={style.title}>{title}</p>
      <p className={style.date}>{date}</p>
      <p className={style.location}>{location}</p>
     </div>
    <span className={style.price}>{price}</span>
    
   </div>
    

  );
}

export default Present;
