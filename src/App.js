import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Casino from './pages/Casino';
import Club from './pages/Club'
import Promotions from './pages/Promotions'
import './App.css';
import Entertainment from './pages/Entertainment';
import Dining from './pages/Dining'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/casino' exact component={Casino} />
          <Route path='/club' exact component={Club} />
          <Route path='/promotions' exact component={Promotions} />
          <Route path='/entertainment' exact component={Entertainment} />
          <Route path='/dining' exact component={Dining} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
