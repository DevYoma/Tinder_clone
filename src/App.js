import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SwipeButtons from './Components/SwipeButtons';

function App() {
  
 
  return (
    <div className="app">
      <Router>
        {/* all routes sit in here */}
        <Switch>
            <Route path="/chat">
              <Header backbutton="/" />
              <h1>I am the Chat Page</h1>
            </Route>
            <Route path="/yoma">
              <h1>Yo, Yoma on this one 🔥</h1>
            </Route>
            <Route path="/">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
//npm install react-tinder-card