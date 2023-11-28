import React from 'react';
import Homeİmg from '../img/home-bg.png';
import Printerİmg from '../img/printer2.png';

const Main = () => {
  return (
    <div>
      {/* Home Section start */}
      <section className='home-container'>
        <div className='home-inner'>
          <div className='home-title'>
            <h3>TÜM TÜRKİYE’YE HIZLI KARGO GÖNDERİMİ</h3>
            <button className='home-btn'>
              <a href='https://wa.me/05412240841'>whatsapp hattı</a>
            </button>
          </div>
          <div className='home-image'>
            <img src={Homeİmg} alt='' />
          </div>
        </div>
      </section>
      {/* Home Section end */}

      {/* Print Section start */}

      <section className='print-container'>
        <div className='header-print'>
          <h2> fotokopi / baskı </h2>
        </div>
        <div className='print-inner'>
          <div className='print-img'>
            <img src={Printerİmg} alt='' />
          </div>
          <div className='print-title'>
            <ul>
              <li>Siyah & Beyaz</li>
              <li>Renkli</li>
              <li>Kitapçık</li>
              <li>Spiral</li>
              <li>TEZ</li>
              <li>Staj Dosyalları</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Print Section end */}
    </div>
  );
};

export default Main;
