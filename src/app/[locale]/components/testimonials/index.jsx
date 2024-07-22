'use client'
import React, { useState }  from 'react';
import { useTranslations } from "next-intl";
import { GoDotFill }        from "react-icons/go";
import reviews              from '@/static/reviews';

import './index.scss';

const Testimonials = () => {

  const t = useTranslations("Reviews");

  const [selected,setSelected] = useState(reviews[0]);
  
  const renderText = () => {
    return(
      <div className="review">
        <span key={selected.id} className='review-text' >{t(selected.text)}</span>
        <p className='author-name'>{`${selected.author}`}</p>
      </div>
    )
  }

  return(
    <div className="testimonial">
      <div className="images">
        {
          reviews.map((review) => {
            return(
            <div key={review.id} className={`img-container ${review.id == 2 ? "" : "right"}`}>
              <div className={`bubbles ${selected.id == review.id ? "active" : ""} ${selected.id == 2 ? " invert" : ""}`}>
                <div className='bubble'></div>
                <div className='bubble2'></div>
              </div>

              <div className={`figure ${selected.id == review.id ? "active" : ""}`}>
                <img id={review.id} src={review.src} className={`img-fluid ${review.id == 2 ? "bigger":""} `} alt="" onClick={() => setSelected(review)}/>
              </div>
            </div>
            )
          })
        }
      </div>
      <div className="reviews">
        <p className='our-client'>{t('title')}</p>
        <h3 className='title'>TESTIMONIALS</h3>
          {renderText()}
          <div className='selectors'>
            <span onClick={() => setSelected(reviews[0])}><GoDotFill size={10}/></span>
            <span onClick={() => setSelected(reviews[1])}><GoDotFill size={10}/></span>
            <span onClick={() => setSelected(reviews[2])}><GoDotFill size={10}/></span>
          </div>
      </div>
    </div>
  )
}


export default Testimonials;
