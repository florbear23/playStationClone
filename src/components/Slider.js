import { useState } from 'react';
import '../css/slider.css';


function Slider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBulletClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider__image-container">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={`Slider Image ${index}`}
            className={`slider__image ${index === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="slider__text-container">
        <h2 className="slider__title">{slides[activeIndex].title}</h2>
        <p className="slider__description">{slides[activeIndex].description}</p>
        <button className='slider--buton'>{slides[activeIndex].button}</button>
      </div>
      <div className="slider__bullets">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider__bullet ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
