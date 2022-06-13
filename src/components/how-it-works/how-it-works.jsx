import { sliderData } from "../slider/slider-data";

import "./how-it-works.scss";

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="heading-container">
        <span className="subheading">Como Funciona</span>
        <h2 className="heading-secondary">Passo a Passo</h2>
      </div>
      {sliderData.map((slide, index) => {
        return index % 2 ? (
          <div className="steps-container" key={index}>
            <div className="step-img-box">
              <img src={slide.imageUrl} className="step-img" alt="" />
            </div>
            <div className="step-text-box">
              <p className="step-number">{slide.step}</p>
              <h3 className="heading-tertiary">{slide.heading}</h3>
              <p className="step-description">{slide.desc}</p>
            </div>
          </div>
        ) : (
          <div className="steps-container" key={index}>
            <div className="step-text-box">
              <p className="step-number">{slide.step}</p>
              <h3 className="heading-tertiary">{slide.heading}</h3>
              <p className="step-description">{slide.desc}</p>
            </div>
            <div className="step-img-box">
              <img src={slide.imageUrl} className="step-img" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HowItWorks;
