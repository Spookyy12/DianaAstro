import React, { useState } from 'react';
import FadeInSection from './ui/FadeInSection';
import { ZodiacSign } from '../types';

const zodiacData: ZodiacSign[] = [
  { name: 'Козерог', dateRange: '22 Дек - 19 Янв', element: 'Земля', traits: ['Амбициозный', 'Организованный', 'Практичный'], horoscope: 'Успех поднимается к вам навстречу. Сохраняйте твердость под ногами.' },
  { name: 'Водолей', dateRange: '20 Янв - 18 Фев', element: 'Воздух', traits: ['Оригинальный', 'Независимый', 'Гуманный'], horoscope: 'Инновации приходят неожиданно. Примите новое.' },
  { name: 'Рыбы', dateRange: '19 Фев - 20 Мар', element: 'Вода', traits: ['Сострадательный', 'Артистичный', 'Интуитивный'], horoscope: 'Сны — это послания. Прислушайтесь к шепоту подсознания.' },
  { name: 'Овен', dateRange: '21 Мар - 19 Апр', element: 'Огонь', traits: ['Активный', 'Динамичный', 'Быстрый'], horoscope: 'Энергия бьет ключом. Сделайте тот смелый шаг, о котором думали.' },
  { name: 'Телец', dateRange: '20 Апр - 20 Май', element: 'Земля', traits: ['Сильный', 'Надежный', 'Творческий'], horoscope: 'Терпение открывает сокровища. Стойте на своем и наблюдайте рост.' },
  { name: 'Близнецы', dateRange: '21 Май - 20 Июн', element: 'Воздух', traits: ['Разносторонний', 'Экспрессивный', 'Любопытный'], horoscope: 'Общение — ключ ко всему сегодня. Ваши слова имеют силу.' },
  { name: 'Рак', dateRange: '21 Июн - 22 Июл', element: 'Вода', traits: ['Интуитивный', 'Сентиментальный', 'Заботливый'], horoscope: 'Берегите свой покой. Ваш внутренний дом требует заботы.' },
  { name: 'Лев', dateRange: '23 Июл - 22 Авг', element: 'Огонь', traits: ['Драматичный', 'Общительный', 'Яркий'], horoscope: 'Сияйте без извинений. Миру нужно ваше тепло.' },
  { name: 'Дева', dateRange: '23 Авг - 22 Сен', element: 'Земля', traits: ['Практичный', 'Лояльный', 'Нежный'], horoscope: 'Детали важны, но совершенство — иллюзия. Найдите красоту в изъянах.' },
  { name: 'Весы', dateRange: '23 Сен - 22 Окт', element: 'Воздух', traits: ['Социальный', 'Справедливый', 'Дипломатичный'], horoscope: 'Баланс не статичен. Это танец. Найдите свой ритм.' },
  { name: 'Скорпион', dateRange: '23 Окт - 21 Ноя', element: 'Вода', traits: ['Страстный', 'Упрямый', 'Находчивый'], horoscope: 'Смотрите вглубь. Истина глубже, чем кажется.' },
  { name: 'Стрелец', dateRange: '22 Ноя - 21 Дек', element: 'Огонь', traits: ['Щедрый', 'Идеалистичный', 'Юмористичный'], horoscope: 'Приключения зовут. Расширяйте горизонты физически или ментально.' },
];

const getZodiacSign = (day: number, month: number): ZodiacSign | undefined => {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacData[1];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return zodiacData[2];
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacData[3];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacData[4];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacData[5];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacData[6];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacData[7];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacData[8];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacData[9];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacData[10];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacData[11];
  return zodiacData[0]; // Capricorn default
};

const ZodiacCalculator: React.FC = () => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [result, setResult] = useState<ZodiacSign | null>(null);

  const calculate = () => {
    const d = parseInt(day);
    const m = parseInt(month);
    // Logic currently only uses day/month for Sun Sign, but interface allows full data entry
    if (d > 0 && d <= 31 && m > 0 && m <= 12) {
      setResult(getZodiacSign(d, m) || null);
    }
  };

  return (
    <section id="calculator" className="w-screen h-full flex items-center justify-center px-4 md:px-24 bg-mystic-sand relative snap-start overflow-hidden text-mystic-brown">
      <div className="stars-bg"></div>
      
      {/* Decorative Elements - More Zodiac Signs */}
      <div className="absolute top-10 left-10 opacity-20 text-6xl text-mystic-gold select-none">♋</div>
      <div className="absolute bottom-20 right-10 opacity-20 text-8xl text-mystic-gold select-none">♑</div>
      <div className="absolute top-1/3 right-1/4 opacity-10 text-4xl text-mystic-brown select-none">♏</div>

      <div className="max-w-3xl w-full z-10 bg-mystic-cream p-8 md:p-12 shadow-xl border border-mystic-gold/30 rounded-lg">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-2 text-mystic-brown">Ваш Знак Зодиака</h2>
          <p className="text-center text-mystic-brown/60 mb-8 font-sans text-sm tracking-widest uppercase">Рассчитайте свою звездную карту</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-mystic-brown/50">День</label>
                <input 
                  type="number" 
                  placeholder="DD" 
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full p-3 bg-white border border-mystic-brown/20 text-center text-xl focus:border-mystic-gold outline-none transition-colors text-mystic-brown"
                />
            </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-mystic-brown/50">Месяц</label>
                <input 
                  type="number" 
                  placeholder="MM" 
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full p-3 bg-white border border-mystic-brown/20 text-center text-xl focus:border-mystic-gold outline-none transition-colors text-mystic-brown"
                />
            </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-mystic-brown/50">Год</label>
                <input 
                  type="number" 
                  placeholder="YYYY" 
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full p-3 bg-white border border-mystic-brown/20 text-center text-xl focus:border-mystic-gold outline-none transition-colors text-mystic-brown"
                />
            </div>
             <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-mystic-brown/50">Место</label>
                <input 
                  type="text" 
                  placeholder="Город" 
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="w-full p-3 bg-white border border-mystic-brown/20 text-center text-base focus:border-mystic-gold outline-none transition-colors text-mystic-brown"
                />
            </div>
          </div>
          
          <div className="text-center mb-8">
            <button 
              onClick={calculate}
              className="px-8 py-3 bg-mystic-brown text-mystic-cream font-bold uppercase tracking-widest hover:bg-mystic-gold transition-colors duration-300 shadow-md"
            >
              Узнать Судьбу
            </button>
          </div>

          {result && (
            <div className="text-center animate-[fadeInRight_0.5s_ease-out_forwards] border-t border-mystic-gold/20 pt-8">
              <h3 className="text-4xl font-serif text-mystic-gold mb-2">{result.name}</h3>
              <p className="text-sm uppercase tracking-widest text-mystic-brown/60 mb-6">{result.dateRange} • {result.element}</p>
              <div className="flex justify-center gap-2 mb-6">
                {result.traits.map(trait => (
                  <span key={trait} className="px-3 py-1 bg-mystic-brown/10 text-xs rounded-full text-mystic-brown font-medium">{trait}</span>
                ))}
              </div>
              <p className="text-lg italic font-serif text-mystic-brown/90 leading-relaxed max-w-lg mx-auto">
                "{result.horoscope}"
              </p>
            </div>
          )}
        </FadeInSection>
      </div>
    </section>
  );
};

export default ZodiacCalculator;