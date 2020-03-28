import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import PropertyCreate from "./components/propertyCreate";
import PrivateRoute from "./components/PrivateRoute";

import PropertyView from "./components/propertyView";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <PrivateRoute exact path='/createhome' component={PropertyCreate} />
          <PrivateRoute exact path='/viewproperties' component={PropertyView} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
