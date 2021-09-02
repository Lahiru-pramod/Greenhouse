import './App.css';
import React from 'react';
import Navbar from './Components/Home/Navbar';
import Banner from './Components/Home/banner';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';


function App() {
  return (
    
        <Router>
           <Navbar/>
           <Banner/>
           
        </Router>
       
    
  );
}

export default App;
