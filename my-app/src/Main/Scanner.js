import PhoneOne from '../img/phone_three.webp';
import PhoneTwo from '../img/phone_four.webp';
import Bg from '../img/backgroundSalt.webp';


function Scanner() {
   return (
      <section className='page__scanner scanner'>
         <div className='scanner__bg'>
            <img src={Bg} alt='background' />
         </div>
         <div className='scanner_container container'>
            <div className='scanner__body'>
               <div className='scanner__scanner-phones'>
                  <img alt='phone' draggable="false" src={PhoneOne} className='scanner-phones_left' />
                  <img alt='phone' draggable="false" src={PhoneTwo} className='scanner-phones_right' />
               </div>
               <div className='scanner__scanner-info'>
                  <h2 className='scanner-info_title title'>ID Scanner</h2>
                  <p className='scanner-info_subtitle subtitle'>Scan, verify, and collect data on each person that walks through your door
                     to humanize your data. You also get
                     a digital 86 list as well as a citywide ban list to keep your venue safe.</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Scanner;