
import logo from '../img/logo.webp'

function Header (){
   return (
      <header className='header'>
         <div className='header__wrapper'>
            <div className='header__container _container'>
               <div className='header__body'>
                  <a href='' className='header__logo'>
                     <img src={logo} alt='logo' />
                  </a>
                  <div className='header__login'>
                     <div className='_icon-avatar' ></div>
                     <a className='login-text' href=''>Login</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;