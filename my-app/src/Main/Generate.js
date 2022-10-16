import Phone from '../img/phone_seven.webp';
import ElCircle from '../img/png/el6.png';
import Arrow from '../img/png/arrow.svg';
import Bg from '../img/background-text.webp';

function Generate() {
   return (
      <section className='page__generate generate'>
         <div className='generate__bg'>
            <img src={Bg} alt='background' />
         </div>
         <div className='generate_container container'>
            <div className='generate__body'>
               <div className='generate__generate-phone'>
                  <img src={Phone} draggable="false" className='generate-phone_phone' alt='phone' />
                  <img src={ElCircle} draggable="false" className='generate-phone_circle' alt='circle' />
                  <div className='generate-phone__block-text'>
                     <img src={Arrow} draggable="false" className='block-text_arrow' alt='arrow' />
                     <p className='block-text_text'>Scan QR-code</p>
                  </div>
               </div>
               <div className='generate__generate-text'>
                  <h2 className='generate-text_title title'>Generate your QR-code</h2>
                  <p className='generate-text_subtitle subtitle'>The guest QR code is scanned <br />
                     by the staff and automatically sent</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Generate;