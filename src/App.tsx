import React, { useEffect, useState } from 'react';
import Navbar from './components/molecules/Navbar';
import MainBanner from './components/organisms/MainBanner';
import AboutSection from './components/organisms/About';
import AdoptionSection from './components/organisms/AdoptionSection';
import PetOfTheWeek from './components/organisms/Petoftheweek';
import weekpet from '../src/assets/img/petoftheweek.png';
import Stories from './components/organisms/Stories';
import Footer from './components/organisms/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import RegistrationForm from './components/organisms/RegistrationForm';
import EmailConfirmation from './components/organisms/EmailConfirmation';
import EmailConfirmed from './components/organisms/EmailConfirmed';
import Login from './components/organisms/Login';
import { getUser } from './async/UserRequests';
import { UserStore } from './Stores/userStore';



type User = {
  fullname: string,
  email: string,
  avatar: string,
}

function App() {

  
  

  const { user, fetchUser } = UserStore();
  const token = localStorage.getItem("jwt");
  
  
  useEffect(() => {
    
    if (token) {
      fetchUser(token); 
      
    }

  }, [token]); 

 
  return (
    <div className="App overflow-x-hidden">
      
       <BrowserRouter basename="/AdoptionService">
        <Routes>
          <Route path='/' element={ 
            <>
              <MainBanner />
              <AboutSection />
              <AdoptionSection />
              <PetOfTheWeek imageLink={weekpet} />
              <Stories />
            </>
          }></Route> 

          <Route path='/registration' element={ 
            <>
              <div className='pl-base pr-base pr-b' style={
                {
                  background: 'linear-gradient(91.65deg, #FF8845 9.74%, #FFBF28 104.37%)'
                }
              }>
              <Navbar />
              </div>
              <RegistrationForm />
            
            </>
          }></Route> 
           <Route path='/registration/confirm' element={ 
            <>
              <div className='pl-base pr-base pr-b' style={
                {
                  background: 'linear-gradient(91.65deg, #FF8845 9.74%, #FFBF28 104.37%)'
                }
              }>
              <Navbar  />
              </div>
              <EmailConfirmation />
            
            </>
          }></Route> 

          <Route path='/registration/confirmed' element={ 
            <>
              <div className='pl-base pr-base pr-b' style={
                {
                  background: 'linear-gradient(91.65deg, #FF8845 9.74%, #FFBF28 104.37%)'
                }
              }>
              <Navbar />
              </div>
              <EmailConfirmed />
            
            </>
          }></Route> 

          <Route path='/login' element={ 
            <>
              <div className='pl-base pr-base pr-b' style={
                {
                  background: 'linear-gradient(91.65deg, #FF8845 9.74%, #FFBF28 104.37%)'
                }
              }>
              <Navbar />
              </div>
              <Login />
            
            </>
          }></Route> 


        </Routes>
       </BrowserRouter>
      
      <Footer /> 
    
    </div>
  );
}

export default App;
