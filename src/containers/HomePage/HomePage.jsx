import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Pricing from '../../components/Pricing/Pricing';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => (
  <div id="home" className="Page">
    <header className="Page-header">
      <Navbar />
      <Hero />
    </header>
    <Features />
    <Pricing />
    <footer className="Page-footer" id="contact">
      <Footer />
    </footer>
  </div>
);

export default HomePage;
