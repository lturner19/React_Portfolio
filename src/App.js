import React from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>  
      <Header/>
      <Switch>
      {/* this ensures that either / or home can be used to bring up homepage w/o breaking*/}
      <Route exact path={["/", "/home"]}><Home /></Route>
      <Route exact path="/about"><About/></Route>
      <Route exact path="/portfolio-projects"><Projects/></Route>
      <Route exact path="/contact"><Contact/></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
