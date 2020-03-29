import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import CreateProperty from "./components/CreateProperty";
import PrivateRoute from "./components/PrivateRoute";

import PropertyView from "./components/propertyView";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <PrivateRoute exact path='/createhome' component={CreateProperty} />
          <PrivateRoute exact path='/viewproperties' component={PropertyView} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/' render={(props) => <Login {...props} userId={props.userId}/>} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state =>{
  return {
    userId: state.userId
  };
}

export default connect(mapStateToProps)(App);
