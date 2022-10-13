import Phone from '../img/phone_nine.webp';
import Bg from '../img/backgroundText.webp';

function Notub() {
   return (
      <section className='page__notub notub'>
         <div className='notub__bg'>
            <img src={Bg} alt='background' />
         </div>
         <div className='notub__container _container'>
            <div className='notub__body '>
               <img className='notub_phone' draggable="false" alt='phone' src={Phone} />
            </div>
         </div>
      </section>
   );
}

export default Notub;