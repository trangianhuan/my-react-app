import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import Add from './pages/Add/index';
import Info from './pages/Info/index';

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/info' component={Info} />
              <Route path='/add' component={Add} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
