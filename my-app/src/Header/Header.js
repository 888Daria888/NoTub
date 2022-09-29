import React, { Component } from 'react';
import { connect } from "react-redux";
import { getclassNameMenuBody } from '../redux/actions';
import logo from '../img/logo.webp'
import textLogo from '../img/png/text-logo.png'

class Header extends Component {

   render() {
      return (
         <header className='header'>
            <div className='header__wrapper'>
               <div className='header__container _container'>
                  <div className='header__body'>
                     <a href='' className='header__logo'>
                        <img src={logo} alt='logo' />
                        <img src={textLogo} width='96' height='25' alt='logo' />
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
}

export default connect(
   (state) => ({ calssMenuBody: state.headerReducer.globalCalssMenuBody }),
   (dispatch) => ({
      getclassNameMenuBody: (globalCalssMenuBody) => dispatch(getclassNameMenuBody(globalCalssMenuBody)),
   })

)(Header);