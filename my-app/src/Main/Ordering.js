import Phone from '../img/phone_eight.webp';
import ElCircle from '../img/png/el7.png';

function Ordering() {
   return (
      <section className='page__ordering ordering'>
         <div className='ordering_container container'>
            <div className='ordering__body'>
               <div className='ordering__ordering-text'>
                  <img src={ElCircle} draggable="false" alt='circle' className='ordering-text_circle' />
                  <h2 className='ordering-text_title title'>Easier ordering.<br />
                     Happier guests.</h2>
                  <p className='ordering-text_subtitle subtitle'>NoTab makes it simple for patrons to easily</p>
               </div>
               <div className='ordering__ordering-content'>
                  <p className='ordering-content_text-one txt'>No more lost or<br />
                     forgotten credit cards</p>
                  <p className='ordering-content_text-two txt'>No more lost or<br />
                     forgotten credit cards</p>
                  <p className='ordering-content_text-three txt'>Skip the line</p>
                  <p className='ordering-content_text-four txt'>No more split
                     your tab</p>
                  <img alt='phone' draggable="false" src={Phone} className='ordering-content_phone' />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Ordering;