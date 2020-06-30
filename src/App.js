import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Casino from './pages/Casino';
import Club from './pages/Club'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/casino' exact component={Casino} />
          <Route path='/club' exact component={Club} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
