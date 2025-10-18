import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster />
          
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;