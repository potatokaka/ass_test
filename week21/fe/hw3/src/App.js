import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav';
import About from './components/about';
import Articles from './components/articles';
import ArticleSingle from './components/articleSingle';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/about" component={About} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/articles/:id" component={ArticleSingle} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;