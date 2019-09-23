import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './nav.css';

class Item extends Component {
  render() { 
    const {to, children, exact} = this.props;

    return ( 
      <Route
        path={to}
        exact={exact}
        children={({ match }) => ( //就是一個 functional component
          <li className={match ? "nav-link active" : "nav-link"}>
            <Link to={to} className="nav-link">{children}</Link>
          </li>
        )}
      />
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <i className="material-icons">
                visibility
              </i>
          </Link>
          {/* <a className="navbar-brand" href="/">
            <i className="material-icons">
              visibility
            </i>
          </a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Item to="/" exact={true}>
                Home
              </Item>
              <Item to="/post">
                Post
              </Item>
              <Item to="/about">
                About
              </Item>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;