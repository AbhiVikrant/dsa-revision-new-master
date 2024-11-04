import { useState } from "react";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      content: `Excellent revision tool, specially when you have an interview coming up in 15 days or so. It's so hard to find everything in one place.`
    },
    {
      id: 2,
      content: `Highly recommended if you're interviewing or preparing these days - this guide will help you revise concepts and practice things before the interview.`
    },
    {
      id: 3,
      content: `Awesome! Love how the concepts are explained + all the wonderful resources mentioned. Having everything in one guide is super helpful. `
    }
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative  mx-auto  border-l-4 border-yellow-500">
      <div className="overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map(slide => (
            <div key={slide.id} className="min-w-full">
              <blockquote className="mx-12 py-12 theme-bg-light flex justify-between items-center">
                {slide.content}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;
