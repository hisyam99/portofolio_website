// page.tsx
import React from 'react';
import Header from './components/Header';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Header />
      <PortfolioSection />
      <AboutSection />
      <Footer />
    </div>
  );
}