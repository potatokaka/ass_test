import React, {Component} from 'react';
import './app.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import About from './components/about/About';
import PostList from './components/posts/PostList';
import Post from './components/posts/Post';
import { HashRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      //tab: removeHashSymbol(window.location.hash) || 'home'
      tab: 'home', //預設
    }
  }

  render() {
    const {tab} = this.state;
    return (
      <Router>
        <div>
          <Nav onChange={this.onNavChange} activeTab={tab}/>

          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={PostList} />
          <Route path="/about" component={About} />
          <Route path="/post/:postId" component={Post} />

        </div>
      </Router>
    )
  }
}

export default App;
