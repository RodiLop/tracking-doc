import React, { Component } from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import fire from './config/fire'

import LogInPage from "./pages/LogInPage";
import Home from "./pages/Home"
import Nav from "./components/Nav";
import RegisterPage from "./pages/RegisterPage"
import LogOut from "./components/LogOut"
import Dashboard from "./pages/Dashboard"
import Footer from "./components/Footer"
import DocumentCreationPage from "./pages/DocumentCreationPage"
import DocumentAdmin from "./pages/DocumentAdmin"
import DocumentDisplay from "./pages/DocumentDisplay"
import ReportsPage from "./pages/ReportsPage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount = () => {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <Nav/>
          <Switch>
            <Route path="/" exact={true} render={(props) => <Home {...props}/>}/>
            <Route path="/login" render={(props) => <LogInPage {...props}/>}/>
            <Route path="/register" render={(props) => <RegisterPage {...props}/>}/>
            <Route path="/logout" render={(props) => <LogOut {...props}/> }/>
            <Route path="/dashboard" render={(props) => <Dashboard {...props}/> }/>
            <Route path="/document-create" render={(props) => <DocumentCreationPage {...props}/> }/>
            <Route path="/document-admin" render={(props) => <DocumentAdmin {...props}/>}/>
            <Route path="/document-display" render={(props) => <DocumentDisplay {...props}/>}/>
            <Route path="/reports" render={(props) => <ReportsPage {...props}/>}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

// TODO: dispaly documents page, reports

export default App;