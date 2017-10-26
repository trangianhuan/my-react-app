import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Home content="day la home page"/>
            <Footer/>
        </div>
    );
  }
}

export default App;
