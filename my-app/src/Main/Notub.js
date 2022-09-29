import Phone from '../img/phone_nine.webp';

function Notub() {
   return (
      <section className='page__notub notub'>
         <div className='notub__container'>
            <div className='notub__body _container'>
               <img className='notub_phone' draggable="false" alt='phone' src={Phone} />
            </div>
         </div>
      </section>
   );
}

export default Notub;