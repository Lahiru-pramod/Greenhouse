import './App.css';
import React from 'react';
import Navbar from './Components/Home/Navbar';
import Banner from './Components/Home/banner';
import Items from './Components/Home/items';
import Footer from './Components/Home/footer';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';


function App() {
  return (
    
        <Router>
           <Navbar/>
           <Banner/>
           <Items/>
           <Footer/>
           
        </Router>
       
    
  );
}

export default App;
