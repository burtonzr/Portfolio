import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home            from  './components/pages/Home';
import TechStore       from './components/pages/TechStore';
import Mosis           from './components/pages/Mosis';
import Remedial        from './components/pages/Remedial';
import Reports         from './components/pages/Reports';
import Header          from './components/layouts/Header';
import HeaderTechStore from './components/layouts/HeaderTechStore';
import HeaderMosis     from './components/layouts/HeaderMosis';
import HeaderRemedial  from './components/layouts/HeaderRemedial';
import HeaderReports   from './components/layouts/HeaderReports';
import Navbar          from './components/layouts/Navbar';
import Footer          from './components/layouts/Footer';
import './App.css';
import './ColdFusion.css';

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
            <Navbar />
            <HeaderTechStore />
            <TechStore />
            <Footer />
          </div>
        )} />
        <Route exact path="/Mosis" render={props => (
          <div>
            <Navbar />
            <HeaderMosis />
            <Mosis />
            <Footer />
          </div>
        )} />
        <Route exact path="/Remedial" render={props => (
          <div>
            <Navbar />
            <HeaderRemedial />
            <Remedial />
            <Footer />
          </div>
        )} />
        <Route exact path="/Reports" render={props => (
          <div>
            <Navbar />
            <HeaderReports />
            <Reports />
            <Footer />
          </div>
        )} />
      </Router>
    </div>
  );
}

export default App;
