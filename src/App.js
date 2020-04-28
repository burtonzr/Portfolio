import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home      from  './components/pages/Home';
import TechStore from './components/pages/TechStore';
import Mosis     from './components/pages/Mosis';
import Remedial  from './components/pages/Remedial';
import Reports   from './components/pages/Reports';
import Header    from './components/layouts/Header';
import Navbar    from './components/layouts/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={props => (
          <div>
            <Header />
            <Navbar />
            <Home />
          </div>
        )} />
        <Route exact path="/TechStore" render={props => (
          <div>
            <TechStore />
          </div>
        )} />
        <Route exact path="/Mosis" render={props => (
          <div>
            <Mosis />
          </div>
        )} />
        <Route exact path="/Remedial" render={props => (
          <div>
            <Remedial />
          </div>
        )} />
        <Route exact path="/Reports" render={props => (
          <div>
            <Reports />
          </div>
        )} />
      </Router>
    </div>
  );
}

export default App;
