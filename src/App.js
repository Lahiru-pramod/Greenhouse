import './App.css';
import React from 'react';
import Navbar from './Components/Home/Navbar';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';

function App() {
  return (
    
        <Router>
           <Navbar/>
          <div className="container-fluid">
          <div className="row">
            <div className="col">
               Lahiru

        </div>


      </div>
      </div>
        </Router>
       
    
  );
}

export default App;
