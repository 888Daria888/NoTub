import { useState, useEffect } from 'react';
import ElCircle from '../img/png/el8.png';
import ElCircleBig from '../img/png/el9.png';

function Form() {
   const [names, setNames] = useState('');
   const [venueName, setVenueName] = useState('');
   const [venueCity, setVenueCity] = useState('');
   const [stateCity, setStateCity] = useState('');
   const [emails, setEmails] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();
   }

   const onNameChange = (e) => {
      setNames(e.target.value)
   }
   const onVenueNameChange = (e) => {
      setVenueName(e.target.value)

   }
   const onVenueCityChange = (e) => {
      setVenueCity(e.target.value)
   }
   const onStateCityChange = (e) => {
      setStateCity(e.target.value)
   }
   const onEmailChange = (e) => {
      setEmails(e.target.value)
   }
   const onSubjectChange = (e) => {
      setSubject(e.target.value)
   }
   const onMessageChange = (e) => {
      setMessage(e.target.value)
   }
   const onClickButton = (e) => {
      if ((names || venueName || venueCity || stateCity || emails || subject || message) == '') {
         const styleInput = document.querySelectorAll('.form-input');
         for (let i = 0; i < styleInput.length; i++) {
            styleInput.style.color = 'green';
         }
         console.log(styleInput);
      }

   }
   return (
      <section className='page__form form'>
         <div className='form__container _container'>
            <div className='form__body'>
               <div className='form__form-text'>
                  <img src={ElCircle} draggable="false" alt='circle' className='form-text_circle' />
                  <h2 className='form-text_title _title'>Get In Touch</h2>
                  <p className='form-text_subtitle _subtitle'>Have questions about Noble or just want to say hello? <br className='form-text_br' /> Drop us a line and a member of our team will getback to you shortly.</p>
               </div>
               <div className='form__form-block'>
                  <form onSubmit={onSubmit}>
                     <input onChange={onNameChange} className='form-block_name form-input' type='text' placeholder='Name' />
                     <input onChange={onVenueNameChange} className='form-block_venue-name form-input' type='text' placeholder='Venue Name' />
                     <div className='form-block__block'>
                        <input onChange={onVenueCityChange} className='form-block_venue-city form-input-mini' type='text' placeholder='Venue City' />
                        <input onChange={onStateCityChange} className='form-block_state-city form-input-mini' type='text' placeholder='State City' />
                     </div>
                     <input onChange={onEmailChange} className='form-block_email form-input' type='email' placeholder='Email' />
                     <input onChange={onSubjectChange} className='form-block_subject form-input' type='text' placeholder='Subject' />
                     <textarea onChange={onMessageChange} className='form-block_message form-input' type='text' placeholder='Message' />
                     <button
                        className='form-block_button'
                        onClick={onClickButton}
                        // disabled={!names || !venueName || !venueCity || !stateCity || !emails || !subject || !message}
                        type="submit">Send</button>
                     <img src={ElCircleBig} draggable="false" alt='circle' className='form-block_circle' />
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Form;