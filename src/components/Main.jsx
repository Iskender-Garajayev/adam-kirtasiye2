import React from 'react';
import Homeİmg from '../img/home-bg.png';
import Printerİmg from '../img/printer2.png';
import Whatsapp from '../img/whatsapp-logo-8AE44BBBB0-seeklogo.com.png';
import Uty from '../img/u-ty-logo.png';
import Postman from '../img/postman.png';
import AyuLogo from '../img/ayu_logo.png';
import Books from '../img/books.png';

const Main = () => {
  return (
    <div className='main-container'>
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
              <li>Staj Dosyaları</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Print Section end */}

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

      {/* delivery section start */}
      <section className='deliver-container'>
        <div className='deliver-inner'>
          <div className='deliver-img'>
            <img src={Postman} alt='' />
          </div>
          <div className='deliver-title'>
            <h3>Lütfen derslerinizi iletiniz. Hızlıca gönderelim.</h3>
            <button className='home-btn'>
              <a href='https://wa.me/05412240841'>whatsapp hattı</a>
            </button>
          </div>
        </div>
      </section>

      {/* Delivery section end */}

      {/* yukpl section start */}

      <section className='uty-container'>
        <div className='uty-header'>
          <h2> Ahmet Yesevi Üniversitesi Uzaktan Yüksek Lisans Programları </h2>
        </div>
        <div className='uty-inner'>
          <div className='ayu-img'>
            <img src={AyuLogo} alt='ayu-logo' />
          </div>
          <div className='uty-title'>
            <ul>
              <li>Türkçenin yabancılara öğretimi</li>
              <li>Türk dili</li>
              <li>Ölçme ve değerlendirme</li>
              <li>Eğitim yönetimi</li>
              <li>Uluslararası ilişkiler</li>
              <li>Yerel yönetimler</li>
              <li>Sağlık yöneticiliği</li>
            </ul>
          </div>
        </div>
      </section>

      {/* yukpl section end */}

      <div className='about-container'>
        <div className='about-inner'>
          <div className='about-header'></div>
          <div className='about-dsc'>
            <p>
              TÜM DERS NOTLARI VE YARDIMCI KAYNAKLAR İÇİN LÜTFEN İLETİŞİME
              GEÇİN.
            </p>
          </div>
        </div>
      </div>
      {/* About section end */}

      {/* yabacı dil section start */}

      <section className='uty-container'>
        <div className='uty-header'>
          <h2>
            Bireysel ve doğal yöntemlerle(nature method by english) yabancı dil
            kıtapları
          </h2>
        </div>
        <div className='uty-inner'>
          <div className='ayu-img'>
            <img src={Books} alt='ayu-logo' />
          </div>
          <div className='uty-title'>
            <ul>
              <li>English by the Nature Method</li>
              <li>L'İtaliano Secondo Il Metodo Natura</li>
              <li>Le Français Par La Methode</li>
              <li>Deutsch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* yabancı dil section end */}

      {/* map section start */}
      <div className='map-container'>
        <iframe
          className='map'
          title='map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.0553762574605!2d28.840035174985392!3d40.23007096698044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca0f20761f3d77%3A0xbce48dc16ecd5885!2sADA&#39;M%20KIRTAS%C4%B0YE!5e0!3m2!1str!2str!4v1701352337258!5m2!1str!2str'
          // width='600'
          // height='450'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      {/* map section end */}

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
