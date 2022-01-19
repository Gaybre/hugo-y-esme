import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
        <img
          className='icon-pareja'
          src='https://res.cloudinary.com/starlink/image/upload/v1642575339/he/logo_afzge0.png'
          alt='nuestra-boda'
        />
      <div>
        <Navbar />
        <img
          className='icon-profile'
          src='https://www.fakepersongenerator.com/Face/female/female20161025057496582.jpg'
          alt='nuestra-boda'
        />
      </div>
    </header>
  );
};

export default Header;
