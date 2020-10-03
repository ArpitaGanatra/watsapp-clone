import {BrowserRouter as Router } from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">

      {!user ? (
        <Login />
      ):(
        <div className='app__body'> 
      <Router>
      <Switch>

      <Route path='/rooms/:roomId'>
        <Sidebar/>
        <Chat/>
      </Route>  

        <Route path='/'>
        <Sidebar/>
        </Route>

      </Switch>
      </Router>
      </div>
      ) }

      
    </div>
  );
}

export default App;
