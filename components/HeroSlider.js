import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      url: '/slider/aatma.png',
      title: 'Welcome to SAGES Bhopalpatnam',
      subtitle: 'Nurturing Minds, Shaping Futures',
      description: 'A premier institution committed to academic excellence and holistic development'
    },
    {
      url: '/slider/aatma2.png',
      title: 'Excellence in Education',
      subtitle: 'CBSE Affiliated School',
      description: 'Providing quality education with modern facilities and experienced faculty'
    },
    {
      url: '/slider/aatma3.png',
      title: 'Beyond Academics',
      subtitle: 'Holistic Development',
      description: 'Focus on sports, arts, and extracurricular activities'
    },
    {
      url: '/slider/aatma4.png',
      title: 'Join Our Journey',
      subtitle: 'Building Tomorrow\'s Leaders',
      description: 'Admissions open for academic year 2024-25'
    }
  ];

  return (
    <div className={`relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-screen`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slide.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 md:p-8">
                  <h1 className="text-3xl md:text-6xl font-bold mb-3 md:mb-6 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-4xl font-semibold mb-3 md:mb-6 text-yellow-400 animate-slideUp">
                    {slide.subtitle}
                  </h2>
                  <p className="text-base md:text-xl max-w-3xl animate-slideUp delay-100 mb-6 md:mb-8">
                    {slide.description}
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-indigo-900 font-bold py-2 px-6 md:py-3 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeIn delay-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider; 