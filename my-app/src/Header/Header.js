
import logo from '../img/png/logo.svg';
import Avatar from '../img/png/avatar.svg';

function Header() {
   return (
      <header className='header'>
         <div className='header__wrapper'>
            <div className='header_container container'>
               <div className='header__body'>
                  <a href='' className='header__logo'>
                     <img src={logo} alt='logo' />
                  </a>
                  <div className='header__login'>
                     <img src={Avatar}/>
                     <a className='login-text' href=''>Login</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;