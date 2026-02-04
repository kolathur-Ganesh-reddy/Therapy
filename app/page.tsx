"use client";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Approach />
      <Office />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
