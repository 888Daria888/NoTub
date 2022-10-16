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
   const [isColorName, setIsColorName] = useState({});
   const [isColorVenueName, setIsColorVenueName] = useState({});
   const [isColorVenueCity, setIsColorVenueCity] = useState({});
   const [isColorStateCity, setIsColorStateCity] = useState({});
   const [isColorEmail, setIsColorEmail] = useState({});
   const [isColorSubject, setIsColorSubject] = useState({});
   const [isColorMessage, setIsColorMessage] = useState({});
   const [error, setError] = useState(null);

   
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

   function isValidEmail(emails) {
      return /\S+@\S+\.\S+/.test(emails);
   }

   const onEmailChange = (e) => {
      setEmails(e.target.value)

      if (!isValidEmail(e.target.value)) {
         setError('Please! Enter the correct email');
      } else {
         setError(null);
      }
   }
   const onSubjectChange = (e) => {
      setSubject(e.target.value)
   }
   const onMessageChange = (e) => {
      setMessage(e.target.value)
   }

   const onClickButton = () => {
      if (names == '') {
         setIsColorName({ border: '2px solid #FF0000' });
      }
      if (names !== '') {
         setIsColorName({ border: 'none' });
      }
      if (venueName == '') {
         setIsColorVenueName({ border: '2px solid #FF0000' });
      }
      if (venueName !== '') {
         setIsColorVenueName({ border: 'none' });
      }
      if (venueCity == '') {
         setIsColorVenueCity({ border: '2px solid #FF0000' });
      }
      if (venueCity !== '') {
         setIsColorVenueCity({ border: 'none' });
      }
      if (stateCity == '') {
         setIsColorStateCity({ border: '2px solid #FF0000' });
      }
      if (stateCity !== '') {
         setIsColorStateCity({ border: 'none' });
      }
      if (emails == '') {
         setIsColorEmail({ border: '2px solid #FF0000' });
      }
      if (emails !== '') {
         setIsColorEmail({ border: 'none' });
      }
      if (subject == '') {
         setIsColorSubject({ border: '2px solid #FF0000' });
      }
      if (subject !== '') {
         setIsColorSubject({ border: 'none' });
      }
      if (message == '') {
         setIsColorMessage({ border: '2px solid #FF0000' });
      }
      if (message !== '') {
         setIsColorMessage({ border: 'none' });
      }
   }

   return (
      <section className='page__form form'>
         <div className='form_container container'>
            <div className='form__body'>
               <div className='form__form-text'>
                  <img src={ElCircle} draggable="false" alt='circle' className='form-text_circle' />
                  <h2 className='form-text_title title'>Get In Touch</h2>
                  <p className='form-text_subtitle subtitle'>Have questions about Noble or just want to say hello? <br className='form-text_br' /> Drop us a line and a member of our team will getback to you shortly.</p>
               </div>
               <form className='form__form-block' onSubmit={onSubmit}>
                  <input onChange={onNameChange} style={isColorName} className='form-block_name form-input' type='text' placeholder='Name' />
                  <input onChange={onVenueNameChange} style={isColorVenueName} className='form-block_venue-name form-input' type='text' placeholder='Venue Name' />
                  <div className='form-block__block'>
                     <input onChange={onVenueCityChange} style={isColorVenueCity} className='form-block_venue-city form-input-mini' type='text' placeholder='Venue City' />
                     <input onChange={onStateCityChange} style={isColorStateCity} className='form-block_state-city form-input-mini' type='text' placeholder='State City' />
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <input onChange={onEmailChange} style={isColorEmail} className='form-block_email form-input' type='email' placeholder='Email' />
                  <input onChange={onSubjectChange} style={isColorSubject} className='form-block_subject form-input' type='text' placeholder='Subject' />
                  <textarea onChange={onMessageChange} style={isColorMessage} className='form-block_message form-input' type='text' placeholder='Message' />
                  <button
                     className='form-block_button'
                     onClick={onClickButton}
                     type="submit">Send</button>
                  <img src={ElCircleBig} draggable="false" alt='circle' className='form-block_circle' />
               </form>
            </div>
         </div>
      </section>
   );
}

export default Form;
