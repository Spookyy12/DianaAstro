import React from 'react';
import FadeInSection from './ui/FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-screen h-full flex items-center justify-center px-8 md:px-24 flex-shrink-0 bg-mystic-sand text-mystic-brown snap-start relative overflow-hidden">
      
      {/* Animated Gradient Background - Soft Sunrise */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-rotateSlow bg-[conic-gradient(from_0deg,transparent_0deg,#F7F5F0_100deg,#E6DCC8_180deg,#BFA15F_260deg,transparent_360deg)] filter blur-[100px]"></div>
      </div>
      
      <div className="stars-bg z-0 opacity-40"></div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <FadeInSection>
          <h2 className="text-sm uppercase tracking-widest text-mystic-brown/60 font-bold mb-8">Консультации</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-16 text-mystic-brown">Синхронизируйтесь со звездами</h3>
        </FadeInSection>

        <FadeInSection delay="0.1s">
          <a
            href="mailto:diana.stars@cosmos.com"
            className="text-3xl md:text-5xl font-serif text-mystic-brown hover:text-mystic-gold transition-colors duration-500 block mb-12"
          >
            diana.stars@cosmos.com
          </a>
          <p className="text-mystic-brown/70 max-w-lg mx-auto mb-16 font-sans">
            Консультации доступны через Zoom. Пожалуйста, ожидайте ответа в течение 48 часов для записи.
          </p>
        </FadeInSection>
        
        {/* Footer Info */}
        <FadeInSection delay="0.2s">
            <div className="flex flex-col items-center gap-6 mt-12">
                <div className="h-[1px] w-24 bg-mystic-brown/30"></div>
                <div className="text-xs tracking-widest uppercase text-mystic-brown/50">
                © {new Date().getFullYear()} Астрология Дианы. Все права защищены.
                </div>
            </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;