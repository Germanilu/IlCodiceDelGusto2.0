import Card from './card';
import './index.scss';
import cards from '@/static/cards';

const Cards = () => {

  return (
    <div className='cards-container'>
      {
        cards.map(card => (
          <Card key={card.id} title={card.title} text={card.text} img={card.img} />
        ))
      }
    </div>
  );
}

export default Cards;
