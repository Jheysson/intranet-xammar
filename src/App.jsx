import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Page from './components/Page';
function App() {


  return (
    <>
      <Router>        
        <Navbar/>
      </Router>
     
    </>
  );
}

export default App;
