import React from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Invitation from '../../components/invitation/invitation';
import './home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className='wrapper'>
        <Invitation />
      </div>
    </>
  );
};

export default Home;
