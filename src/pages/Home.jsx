import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import '../styles/styles.css';

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
