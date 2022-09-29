import AppStore from '../img/png/buttonAppStore.png';
import GooglePlay from '../img/png/buttonGooglePlay.png';
import NoTub from '../img/png/NOTUB.svg';
import ElCircleBig from '../img/png/el9.png';


function Footer() {
   return (
      <footer className="footer">
         <div className='footer__wrapper'>
            <div className='footer__container _container'>
               <div className='footer__body'>
                  <div className='footer__footer-download'>
                     <h3 className='footer-download_title'>DOWNLOAD OUR APP</h3>
                     <div className='footer-download__footer-link'>
                        <button className='footer-link_button'>
                           <img src={AppStore} alt='#' />
                        </button>
                        <button className='footer-link_button'>
                           <img src={GooglePlay} alt='#' />
                        </button>
                     </div>
                  </div>
                  <div className='footer__footer-navigation'>
                     <div className='footer-navigation__footer-left'>
                        <img src={ElCircleBig} alt='circle' className='footer-left_circle' />
                        <img className='footer-left_logo' src={NoTub} alt='logo' />
                        <p className='footer-left_contact'>Contact us: <span className='footer-left_contact-bold'>support@notab.com</span></p>
                        <p className='footer-left_copyright'>© 2020 - NoTab®</p>
                     </div>
                     <div className='footer-navigation__footer-right'>
                        <p className='footer-right_text'>Terms to use</p>
                        <p className='footer-right_text'>Privacy policy</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;