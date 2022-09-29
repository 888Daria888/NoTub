import Phone from '../img/phone_two.webp';
import CircleLightBig from '../img/png/el4.png';
import CircleLightMini from '../img/png/el5.png';

function Mission() {
   
   return (
      <section className='page__mission mission'>
         <div className='mission__container _container'>
            <div className='mission__body'>
               <div className='mission__mission-cards mission-cards'>
                  <div className='mission-cards__mission-contact'>
                     <p className='mission_title'>Would like to become <br />
                        a member, please <br /> contact us</p>
                     <a href='#' className='mission_subtitle'>support@notab.com</a>
                  </div>
                  <div className='mission-cards__mission-login'>
                     <p className='mission_title'>Already a partner?</p>
                     <a href='#' className='mission_subtitle'>Login</a>
                  </div>
               </div>
               <div className='mission__mission-content mission-content'>
                  <div>
                     <div className='mission-content__mission-phone'>
                        <img className='mission-phone_light' alt='light' draggable="false" src={CircleLightBig} />
                        <img className='mission-phone_phone' alt='phone' draggable="false" src={Phone} />
                     </div>
                  </div>
                  <div>
                     <div className='mission-content__mission-text'>
                        <img className='mission-text_light' draggable="false" alt='light' src={CircleLightMini} />
                        <h2 className='mission-text_title _title'>Our mission and vision</h2>
                        <p className='mission-text_subtitle _subtitle'>While technology is our sweet spot, we’ve developed our vision alongside
                           our customers to ensure your everyday problems are solved through simplistic tools. And as your business grows, we’ll grow right alongside with you. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Mission;