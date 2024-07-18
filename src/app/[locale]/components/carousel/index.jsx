'use client';
import React from "react";
import Slider from "react-slick";
import {Link}       from '@/navigation';
import projects from '@/settings/projects/index'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

const Carousel = () => {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth:true,
  };


  return (

    <Slider className="container" {...settings}>
        {
          projects.map(project => {
            return (
              <Link key={project.id} href={project.href}className={`card ${project.className}`} target="_blank">
                  <div className="content">
                    <h2>{project.title}</h2>
                  </div>
              </Link>
            )

          })
        }
      </Slider>
  )
}
export default Carousel