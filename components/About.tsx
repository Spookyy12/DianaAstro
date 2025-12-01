import React from 'react';
import FadeInSection from './ui/FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="w-screen h-full flex items-center justify-center px-8 md:px-24 flex-shrink-0 bg-mystic-cream relative snap-start text-mystic-brown overflow-hidden">
      <div className="stars-bg"></div>
      
      {/* Decorative Zodiac Circle */}
      <div className="absolute -left-20 top-20 w-64 h-64 border border-mystic-gold/30 rounded-full flex items-center justify-center opacity-40">
          <div className="w-48 h-48 border border-mystic-gold/20 rounded-full"></div>
      </div>

      <div className="max-w-4xl w-full z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="md:w-1/3 border-t border-mystic-gold pt-8">
             <FadeInSection>
              <h2 className="text-sm uppercase tracking-widest text-mystic-gold font-sans font-bold mb-4">Об Астрологе</h2>
              <div className="text-6xl font-serif text-mystic-brown/10 absolute -top-12 -left-4 select-none">DIANA</div>
            </FadeInSection>
          </div>
          
          <div className="md:w-2/3">
            <FadeInSection delay="0.2s">
              <p className="text-2xl md:text-3xl leading-relaxed font-serif mb-8 text-mystic-brown">
                Уже более десяти лет я перевожу язык небес на язык души.
              </p>
              <p className="text-lg text-mystic-brown/80 leading-relaxed mb-8 max-w-xl font-sans">
                Моя практика сочетает классическую эллинистическую астрологию с современным психологическим анализом. Я верю, что звезды не принуждают, но открывают карту нашего потенциала.
              </p>
              <p className="text-lg text-mystic-brown/80 leading-relaxed mb-12 max-w-xl font-sans">
                 Ищете ли вы ясность в любви, подходящее время для карьеры или глубокое понимание своей природы — планеты хранят ключ.
              </p>
              
              <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                  <div>
                      <span className="block text-4xl font-serif text-mystic-gold mb-2">10+</span>
                      <span className="text-xs uppercase tracking-widest text-mystic-brown/60 font-bold">Лет опыта</span>
                  </div>
                  <div>
                      <span className="block text-4xl font-serif text-mystic-gold mb-2">5k+</span>
                      <span className="text-xs uppercase tracking-widest text-mystic-brown/60 font-bold">Прочитанных карт</span>
                  </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;