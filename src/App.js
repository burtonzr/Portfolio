import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home      from  './components/pages/Home';
import TechStore from './components/pages/TechStore';
import Mosis     from './components/pages/Mosis';
import Header    from './components/layouts/Header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" render={props => (
          <div>
            <Header />
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
      </Router>
    </div>
  );
}

export default App;
