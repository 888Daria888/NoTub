import Line from '../iconsfont/Line.svg';
import ElCircle from '../img/png/el1.png';
import PhoneOne from '../img/phone_one.webp';
import ElCircleBig from '../img/png/el2.png';
import ElCircleMini from '../img/png/el3.png';
import AppStore from '../img/buttonAppStore.webp';
import GooglePlay from '../img/buttonGooglePlay.webp';

function AboutPlatforma() {
   return (
      <section className='page__about-platform about-platform'>
         <div className='about-platform__container _container'>
            <div className='about-platform__body'>
               <div className='about-platform__content'>
                  <div className='about-platform__information'>
                     <h1 >A platform <br /> that works smarter</h1>
                     <div className='information_subtitle'>
                        <img className='information_circle' alt='alt' src={ElCircle} />
                        <img alt="" src={Line}></img>
                        <p className='information_text'>NoTab allows bars & nightclubs <br /> to manage, understand, and grow their business from a single dashboard</p>
                     </div>
                  </div>
                  <div className='about-platform__phone-platform'>
                     <img className='phone-platform_circle-big' alt='' src={ElCircleBig} />
                     <img className='phone-platform_circle-mini' alt='' src={ElCircleMini} />
                     <img className='phone-platform_phone' alt='' src={PhoneOne} />
                  </div>
               </div>
               <div>
                  <div className='about-platform__download-platform'>
                     <h3 className='download-platform__title'>DOWNLOAD OUR APP</h3>
                     <div className='download-platform__store-link'>
                        <button className='store-link_button'>
                           <img src={AppStore} draggable="false" alt='' />
                        </button>
                        <button className='store-link_button'>
                           <img src={GooglePlay} draggable="false" alt='' />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutPlatforma;