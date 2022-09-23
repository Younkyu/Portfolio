import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import background from './images/repeated-square-background.png';

function App() {
  return (
    <div id='background' style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/#/about' component={About} />
          <Route path='/#/skills' component={Skills} />
          <Route path='/#/projects' component={Projects} />
          <Route path='/#/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
