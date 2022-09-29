import PhoneOne from '../img/phone_three.webp';
import PhoneTwo from '../img/phone_four.webp';



function Scanner() {
   return (
      <section className='page__scanner scanner'>
         <div className='scanner__container'>
            <div className='scanner__body _container'>
               <div className='scanner__scanner-phones'>
                  <img alt='phone' draggable="false" src={PhoneOne} className='scanner-phones_left' />
                  <img alt='phone' draggable="false" src={PhoneTwo} className='scanner-phones_right' />
               </div>
               <div className='scanner__scanner-info'>
                  <h2 className='scanner-info_title _title'>ID Scanner</h2>
                  <p className='scanner-info_subtitle _subtitle'>Scan, verify, and collect data on each person that walks through your door
                     to humanize your data. You also get
                     a digital 86 list as well as a citywide ban list to keep your venue safe.</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Scanner;