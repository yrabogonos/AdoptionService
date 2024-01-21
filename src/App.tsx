import React from 'react';
import Navbar from './components/molecules/Navbar';
import MainBanner from './components/organisms/MainBanner';
import AboutSection from './components/organisms/About';
import AdoptionSection from './components/organisms/AdoptionSection';





function App() {
  return (
    <div className="App overflow-x-hidden">
      <MainBanner />
      <AboutSection />
      <AdoptionSection />
    </div>
  );
}

export default App;
