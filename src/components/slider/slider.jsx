import { useState, useEffect } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";

import { sliderData } from "./slider-data";

import "./slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // return (
  //   <div className="slider">
  //     {sliderData.map((slide, index) => {
  //       return (
  //         <div
  //           className={index === currentSlide ? "slide current" : ""}
  //           key={index}
  //         >
  //           {index === currentSlide && (
  //             <div>
  //               <img src={slide.imageUrl} alt="slide" className="image" />
  //               {/*<div className="content">
  //                 <h2>{slide.heading}</h2>
  //                 <p>{slide.desc}</p>
  //                 <hr />
  //                 <button className="--btn --btn-primary">Get Started</button>
  //           </div>*/}
  //             </div>
  //           )}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <section className="slider" id="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide.imageUrl} alt="slide" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
