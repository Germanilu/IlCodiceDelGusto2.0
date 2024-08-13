'use client'

import Card from './card';
import cards from '@/static/cards';
import {motion} from "framer-motion"
import { useSelector }      from 'react-redux';
import {Tilt}             from "react-tilt";
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
              key={card.id}
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <motion.div
                 variants={{
                  hidden:{opacity:0, y:75},
                  visible:{opacity:1,y:0},
                }}
                transition={{delay:card.id * 0.5, duration:0.5}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
                  <Card key={card.id} title={card.title} text={card.text} img={card.img} />
                </motion.div>
              </Tilt>
          ))
        }
      </>
      }
    </div>
  );
}

export default Cards;
