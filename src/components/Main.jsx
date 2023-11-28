import React from 'react';
import Homeİmg from '../img/home-bg.png';
import Printerİmg from '../img/printer2.png';
import Whatsapp from '../img/whatsapp-logo-8AE44BBBB0-seeklogo.com.png';
import Uty from '../img/u-ty-logo.png';
import Postman from '../img/postman.png';

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

      {/* About section start */}
      <div className='about-container'>
        <div className='about-inner'>
          <div className='about-header'>
            <h2>hakkımızda</h2>
          </div>
          <div className='about-dsc'>
            <p>
              Ada'm kırtasiye olarak, yılların vermiş olduğu tecrübe ile tüm
              Türkiye'ye baskı, fotokopi ve ciltleme hizmeti sunmak amacıyla
              çıktığımız bu yolda "ONLİNE BASKI MERKEZİ" kavramının ÖNCÜSÜ
              olmaktan gurur duyuyoruz. Misyonumuz sürekli değişen ve gelişen
              teknoloji içerisinde,sahip olduğumuz bilgi ve tecrübemizi,insana
              ve çevreye duyarlı bir şekilde, dünyada ki gelişmeleri de göz
              önüne alarak uygulamak ve müşteri memnuniyetini ön planda tutarak
              hizmet vermektir.
            </p>
          </div>
        </div>
      </div>
      {/* About section end */}

      {/* univer section start */}
      <section className='uty-container'>
        <div className='uty-header'>
          <h2> aöf ders özetleri ve ders kitapları </h2>
        </div>
        <div className='uty-inner'>
          <div className='uty-img'>
            <img src={Uty} alt='' />
          </div>
          <div className='uty-title'>
            <ul>
              <li> ders kitap içerikleri</li>
              <li> genel Kısa özetler</li>
              <li> çıkmış sorular</li>
              <li> vitamin bilgiler</li>
              <li> atom notlar</li>
            </ul>
          </div>
        </div>
      </section>
      {/* univer section end */}

      <section className='deliver-container'>
        <div className='deliver-inner'>
          <div className='deliver-img'>
            <img src={Postman} alt='' />
          </div>
          <div className='deliver-title'>
            <h3>Lütfen derslerinizi iletiniz. Hızlıca gönderelim.</h3>
          </div>
        </div>
      </section>

      {/* Whatsapp Section start */}
      <div className='whatsapp'>
        <a href='https://wa.me/05412240841'>
          <img src={Whatsapp} alt='' />
        </a>
      </div>
      {/* Whatsapp Section end */}
    </div>
  );
};

export default Main;
