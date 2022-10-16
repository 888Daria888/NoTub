import AppStore from '../img/buttonAppStore.webp';
import GooglePlay from '../img/buttonGooglePlay.webp';
import PhoneOne from '../img/phone_five.webp';
import PhoneTwo from '../img/phone_six.webp';
import NightLite from '../img/png/Nightlife.svg';
import Bg from '../img/backgroundWhiskey.webp';


function QRCode() {
   return (
      <section className='page__qrcode qrcode'>
         <div className='qrcode__bg'>
            <img src={Bg} alt='background' />
         </div>
         <div className='qrcode_container container'>
            <div className='qrcode__body'>
               <div className='qrcode__qrcode-text'>
                  <h2 className='qrcode-text_title title'>QR code</h2>
                  <p className='qrcode-text_subtitle subtitle'>No more conflict situations due to wrong order. The guest selects the positions, and after that an individual QR code of his order is generated</p>
                  <div className='qrcode-text__qrcode-store'>
                     <button>
                        <img className='qrcode-store_app' draggable="false" src={AppStore} alt='App Store' />
                     </button>
                     <button>
                        <img className='qrcode-store_google' draggable="false" src={GooglePlay} alt='Google Play' />
                     </button>
                  </div>
               </div>
               <div className='qrcode__qrcode-phone'>
                  <img className='qrcode_nightlite' draggable="false" src={NightLite} alt='Nightlite' />
                  <img className='qrcode-phone_one' src={PhoneOne} alt='phone' />
                  <img className='qrcode-phone_two' src={PhoneTwo} alt='phone' />
               </div>
            </div>
         </div>
      </section>
   );
}

export default QRCode;