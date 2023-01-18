import { useState } from 'react';
import './Card.scss';

function Card(props) {
  const [isHover, setIsHover] = useState(false);

  function handleMouseMove() {
    setIsHover(!isHover)
  }

  function handleThisCardClick() {
    props.onCard(props.cardData);
  }
  let isActive = props.cardState.includes(props.cardData.id);

  const notActiveSubscription = (<>Чего сидишь? Порадуй котэ, <button className="card__buy-link"  onClick={handleThisCardClick}>купи</button></>)

  return (
    <div className={`card ${isActive ? 'card_active' : ''} ${props.isDisabled ? 'card_disabled' : ''}`}>
      <div className={`card__box ${isActive ? 'card__box_active' : ''}`} onClick={props.isDisabled ? null : handleThisCardClick} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
        <h4 className="card__title">{isActive && isHover ? 'Котэ не одобряет?' : 'Сказочное заморское явство'}</h4>
        <h2 className="card__name">Нямушка</h2>
        <h3 className="card__taste">{props.cardData.taste}</h3>
        <span className="card__caption-box">
          <span className="card__caption">{props.cardData.portions}</span>
          <span className="card__caption">{props.cardData.gift}</span>
        </span>
        <div className={`card__weight ${isActive ? 'card__weight_active' : ''}`}>
          <span className="card__weight-amount">{props.cardData.weight}</span>
          <span className="card__weight-currency">кг</span>
        </div>
      </div>
      <div className="card__subscription">
      {props.isDisabled ? props.cardData.subscriptionIfDisabled : (isActive ? props.cardData.subscriptionIfSelected : notActiveSubscription)} 
      </div>
    </div>
  )
}

export default Card;