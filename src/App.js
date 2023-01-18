import Card from './components/Card/Card.js';
import { useState } from 'react';
import cardsData from './components/utils/data.js';
import './App.scss';

function App() {
  const [activeCards, setActiveCard] = useState([]);

  function handleClick(card) {
    if(activeCards.includes(card.id)) {
      setActiveCard(
      activeCards.filter((item) => item !== card.id
      ))
    }
    else {
    setActiveCard([...activeCards, card.id]);
    }
  }

  return (
    <div className="block">
      <div className="block__shadow"></div>
      <h2 className="block__title">Ты сегодня покормил кота?</h2>
      <div className="block__cards">
        <Card cardData={cardsData.fuagra} onCard={handleClick} cardState={activeCards} isDisabled={false}/>
        <Card cardData={cardsData.fish} onCard={handleClick} cardState={activeCards} isDisabled={false} />
        <Card cardData={cardsData.chicken} onCard={handleClick} cardState={activeCards} isDisabled={true} />
      </div>
    </div>
  );
}

export default App;
