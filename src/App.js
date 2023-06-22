import React from 'react';

import Navbar from './components/Navbar.js';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
   
     
        <Route path='/' exact />

        </Routes>
        </BrowserRouter>
 
     
      
    </>
  );
}

export default App;
