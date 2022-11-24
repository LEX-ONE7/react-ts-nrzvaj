import * as React from 'react';
import Contact from '../section/Contact';
import Header from '../section/Header';
import Navbar from '../section/Navbar';
import Services from '../section/Services';
import Skills from '../section/Skills';

const Portfolio = () => (
  <div>
    <Navbar />
    <Header />
    <Skills />
    <Services />
    <Contact />
  </div>
);

export default Portfolio;
