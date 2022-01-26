import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__overlay' />
      <div className='hero__body'>
        <h1 className='hero__body--title drop-shadow'>Hugo & Esmeralda</h1>
        <img
          className='hero__body--arrow drop-shadow'
          src='https://res.cloudinary.com/starlink/image/upload/v1642572096/he/arrow_ktmj9t.png'
          alt='arrow'
        />
        <h1 className='hero__body--date drop-shadow'>23-Abril-2022</h1>
      </div>
    </div>
  );
};

export default Hero;
