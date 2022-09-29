import { useState} from 'react';


function Cookie() {
   const [isDisplay, setIsDisplay] = useState('block');
   const onClickCookie = (e) => {
      setIsDisplay('none')
   }

   return (
      <section style={{display: isDisplay}} className='page__cookie cookie'>
         <div className='cookie__container _container'>
            <div className="cookie__text">We use cookie to improve your experience on our site. By using our site you consent cookies.</div>
            <button className="cookie__apply" onClick={onClickCookie} type="button">OK</button>
         </div>
      </section>
   );
}

export default Cookie;
