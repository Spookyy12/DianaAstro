import React from 'react';
import { Service } from '../types';
import FadeInSection from './ui/FadeInSection';

export const services: Service[] = [
  {
    id: 1,
    title: 'Натальная Карта',
    category: 'Самопознание',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&auto=format&fit=crop',
    price: '12 000 ₽'
  },
  {
    id: 2,
    title: 'Синастрия',
    category: 'Совместимость в любви',
    imageUrl: 'https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&auto=format&fit=crop',
    price: '15 000 ₽'
  },
  {
    id: 3,
    title: 'Таро Прогноз',
    category: 'Взгляд в будущее',
    imageUrl: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?q=80&auto=format&fit=crop',
    price: '5 000 ₽'
  }
];

export const ServicesIntro: React.FC = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-mystic-cream px-8 md:px-24 relative overflow-hidden">
      <div className="stars-bg"></div>
      <div className="max-w-4xl text-center md:text-left z-10">
        <FadeInSection>
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-mystic-brown">Космические<br /><span className="text-mystic-gold">Услуги</span></h2>
          <div className="h-0.5 w-24 bg-mystic-gold mb-8 mx-auto md:mx-0"></div>
          <p className="text-mystic-brown/80 text-lg md:text-xl max-w-md mx-auto md:mx-0 font-sans leading-relaxed">
            Откройте тайны своей судьбы. Выберите путь, чтобы осветить свое путешествие.
          </p>
          <div className="mt-12 hidden md:flex items-center gap-4 text-sm font-medium animate-pulse text-mystic-gold uppercase tracking-widest">
            <span>Изучить предложения</span>
            <span>→</span>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

interface ServiceSlideProps {
  service: Service;
  index: number;
  total: number;
}

export const ServiceSlide: React.FC<ServiceSlideProps> = ({ service, index, total }) => {
  const srcSet = `
    ${service.imageUrl}&w=600 600w,
    ${service.imageUrl}&w=1200 1200w,
    ${service.imageUrl}&w=1920 1920w
  `;

  return (
    <article className="w-full h-full relative group overflow-hidden bg-mystic-cream">
      {/* Background Image with Sepia Tone for Vintage Feel */}
      <div className="absolute inset-0">
         <img
          src={`${service.imageUrl}&w=1920`}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, 100vw"
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 opacity-30 sepia-[.5]"
          loading="eager" 
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-cream via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 text-mystic-brown z-10">
        <FadeInSection delay="0.2s">
          <div className="border-l-2 border-mystic-gold pl-6 md:pl-8 backdrop-blur-[2px] py-4 bg-mystic-cream/30 rounded-r-lg">
            <p className="text-sm md:text-base tracking-[0.2em] uppercase mb-2 text-mystic-gold font-bold font-sans">{service.category}</p>
            <h3 className="text-3xl md:text-6xl font-serif font-bold mb-4">{service.title}</h3>
            <p className="text-xl font-light italic text-mystic-brown/80 mb-8">{service.price}</p>
            
            <button 
              className="inline-block px-8 py-3 border border-mystic-brown/50 hover:bg-mystic-gold hover:border-mystic-gold hover:text-white transition-all duration-300 font-sans uppercase tracking-widest text-sm"
            >
              Записаться
            </button>
          </div>
        </FadeInSection>
      </div>
      
      {/* Counter */}
      <div className="absolute top-24 right-8 md:right-24 text-mystic-gold font-serif text-xl md:text-4xl opacity-50">
        {['I', 'II', 'III'][index]} <span className="text-xs align-top opacity-50">/ III</span>
      </div>
    </article>
  );
};