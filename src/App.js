import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import { connect } from 'react-redux';

import Header from "./components/header"
import Login from "./components/login"
import Register from "./components/register"

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {Header}/>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/register" component = {Register}/>
    </div>
  );
}



export default App;
