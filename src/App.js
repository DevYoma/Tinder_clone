import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import Chats from './Components/Chats';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SwipeButtons from './Components/SwipeButtons';
import ChatScreen from './Components/ChatScreen';

function App() {
  
 
  return (
    <div className="app">
      <Router>
        {/* all routes sit in here */}
        <Switch>
            <Route path="/chat/:name">
              <Header backbutton="/chat" />
              <ChatScreen />
            </Route>

            <Route path="/chat">
              <Header backbutton="/" />
              <Chats />
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