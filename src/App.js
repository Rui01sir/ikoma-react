import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hompage from './components/Homepage';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Hompage/>}/>
        <Route path="Page404" element={<Page404/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>  
  );
}

export default App;
