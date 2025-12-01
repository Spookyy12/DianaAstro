import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-screen h-full flex flex-col justify-center items-center flex-shrink-0 relative px-4 bg-mystic-cream snap-start overflow-hidden">
      
      {/* Background Stars & Texture */}
      <div className="stars-bg"></div>
      
      {/* Rotating Zodiac Wheel Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-10 animate-rotateSlow pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-mystic-brown">
             <path id="curve" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
             <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2"/>
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" fill="none"/>
             {/* Simple Zodiac Glyphs representation */}
             <text fontSize="4" x="50" y="5">♈</text>
             <text fontSize="4" x="75" y="15">♉</text>
             <text fontSize="4" x="90" y="35">♊</text>
             <text fontSize="4" x="95" y="60">♋</text>
             <text fontSize="4" x="80" y="85">♌</text>
             <text fontSize="4" x="50" y="95">♍</text>
             <text fontSize="4" x="20" y="85">♎</text>
             <text fontSize="4" x="5" y="60">♏</text>
             <text fontSize="4" x="10" y="35">♐</text>
             <text fontSize="4" x="25" y="15">♑</text>
          </svg>
      </div>

      {/* Center glowing orb - Gold for beige theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-mystic-gold rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="max-w-5xl w-full text-center z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold leading-tight tracking-wide text-mystic-brown pointer-events-none">
          <span className="block animate-float">
             Звезды укажут
          </span>
          <span className="block text-mystic-gold mt-2 md:mt-4 animate-float [animation-delay:1s] drop-shadow-sm">
             верный путь
          </span>
        </h1>
        <p className="mt-8 text-mystic-brown/80 text-lg md:text-xl font-sans tracking-widest uppercase animate-[fadeInRight_1s_ease-out_1s_forwards] opacity-0">
          Диана • Профессиональный Астролог • Наставник
        </p>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex items-center gap-4 text-sm text-mystic-brown animate-[fadeInRight_1s_ease-out_2s_forwards] opacity-0 z-10">
        <span className="uppercase tracking-widest text-xs font-serif font-bold">Начать путешествие</span>
        <div className="h-[1px] w-12 bg-mystic-brown/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-mystic-brown animate-[slideRight_2s_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;