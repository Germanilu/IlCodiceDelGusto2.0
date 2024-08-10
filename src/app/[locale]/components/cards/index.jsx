'use client'

import Card from './card';
import cards from '@/static/cards';
import { useSelector }      from 'react-redux';
import {Tilt}                     from "react-tilt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
const Cards = () => {

  const isMobile = useSelector(state => state.responsive.isMobile);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    
  };
  return (
    <div className='cards-container'>
      {
      isMobile ? 
      <Slider className='slider'>
        {
        cards.map(card => (
          <Card key={card.id} title={card.title} text={card.text} img={card.img} />
        ))
      }
      </Slider>
      :
      
     <>
        {
          cards.map(card => (
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <Card key={card.id} title={card.title} text={card.text} img={card.img} />
              </Tilt>
          ))
        }
      </>
      }
    </div>
  );
}

export default Cards;
