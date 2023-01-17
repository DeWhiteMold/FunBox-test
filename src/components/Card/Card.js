function Card(props) {
  return (
    <div className="card">
      <div className="card__box">
        <h4 className="card__title">Сказочное заморское яство</h4>
        <h2 className="card__name">Нямушка</h2>
        <h3 className="card__taste">{props.cardData.taste}</h3>
        <span className="card__caption-box">
          <span className="card__caption">{props.cardData.portions}</span>
          <span className="card__caption">{props.cardData.gift}</span>
        </span>
        <div className="card__weight">
          <span className="card__weight-amount">{props.cardData.weight}</span>
          <span className="card__weight-currency">кг</span>
        </div>
      </div>
      <div className="card__subscription">Чего сидишь? Порадуй котэ, <button className="card__buy-link">купи</button>.</div>
    </div>
  )
}

export default Card;