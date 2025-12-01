import React from 'react';
import FadeInSection from './ui/FadeInSection';

interface FinalProps {
  onRestart: () => void;
}

const Final: React.FC<FinalProps> = ({ onRestart }) => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center bg-mystic-brown text-mystic-cream px-8 snap-start relative overflow-hidden">
      <div className="stars-bg opacity-30"></div>
      
      {/* Decorative center ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-mystic-gold/20 rounded-full animate-pulse"></div>

      <FadeInSection>
        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 tracking-widest text-center text-mystic-gold">
          Что наверху,<br/>то и внизу
        </h2>
        <div className="h-0.5 w-16 bg-white/20 mx-auto mb-12"></div>
      </FadeInSection>
      
      <FadeInSection delay="0.2s">
        <button 
          onClick={onRestart}
          className="group relative inline-flex items-center gap-3 text-sm uppercase tracking-widest hover:text-mystic-gold transition-colors py-4 px-8 border border-white/20 rounded-sm hover:border-mystic-gold transition-all duration-300"
        >
          <span>Вернуться в начало</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      </FadeInSection>
    </section>
  );
};

export default Final;