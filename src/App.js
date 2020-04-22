import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/layouts/Header';
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
      </Router>
    </div>
  );
}

export default App;
