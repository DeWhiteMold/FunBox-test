import Card from './components/Card/Card.js';
import cardsData from './components/utils/data.js';
import './App.scss';

function App() {
  return (
    <div className="block">
      <h2 className="block__title">Ты сегодня покормил кота?</h2>
      <div className="block__cards">
        <Card cardData={cardsData.fish} />
        <Card cardData={cardsData.fish} />
        <Card cardData={cardsData.chicken} />
      </div>
    </div>
  );
}

export default App;