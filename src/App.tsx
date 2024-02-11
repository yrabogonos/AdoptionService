import React from 'react';
import Navbar from './components/molecules/Navbar';
import MainBanner from './components/organisms/MainBanner';
import AboutSection from './components/organisms/About';
import AdoptionSection from './components/organisms/AdoptionSection';
import PetOfTheWeek from './components/organisms/Petoftheweek';
import weekpet from '../src/assets/img/petoftheweek.png';
import Stories from './components/organisms/Stories';
import Footer from './components/organisms/Footer';




function App() {
  return (
    <div className="App overflow-x-hidden">
      <MainBanner />
      <AboutSection />
      <AdoptionSection />
      <PetOfTheWeek imageLink={weekpet} />
      <Stories />
      <Footer /> 
    </div>
  );
}

export default App;
