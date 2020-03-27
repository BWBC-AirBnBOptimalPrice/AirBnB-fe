import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import { connect } from 'react-redux';

import Header from "./components/header"
import Login from "./components/login"
import Register from "./components/register"
import PropertyCreate from "./components/propertyCreate";

import PropertyView from "./components/propertyView";


function App() {
  return (
    <div className="App">
      <Route path = "/" component = {Header}/>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/register" component = {Register}/>
      <Route path = "/createhome" component = {PropertyCreate}/>

      <Route path = "/viewproperties" component = {PropertyView}/>

    </div>
  );
}



export default App;
