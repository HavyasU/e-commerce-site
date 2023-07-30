import React, { useEffect, useState } from 'react';
import './slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/TBS/GW/Skincare-Herofader-PC._CB598928078_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_july_3000x1200._CB598959250_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/GW/Groomingfest/Amazon_GRD_DesktopHero_3000x1200-REC._CB601139434_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/yes/MA_3000._CB598905142_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/saba/july23/5300-Amazon-Kitchen---My-first-kitchen-purchase-heros_3000X1200_HDFC._CB600690896_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/Deals-Unrec-PC-3000_2._CB598748121_.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
    );
  };

  const handleImageError = (index) => {
    // Handle image loading errors here
    console.error(`Error loading image at index ${index}`);
  };

  return (
    <>
      <div className="carousel">
        <button className="btn decrease" onClick={prevSlide}>
        &lt;
        </button>
        <div className="slide-container">
          {slideImages.map((image, index) => (
            <img
              key={index}
              className={`slide ${currentSlide === index ? 'active-slide' : ''}`}
              src={image}
              alt={`Slide ${index + 1}`}
              onError={() => handleImageError(index)}
            />
          ))}
        </div>
        <button className="btn increase" onClick={nextSlide}>
        &gt;
        </button>
      </div>
    </>
  );
};

export default Slider;
