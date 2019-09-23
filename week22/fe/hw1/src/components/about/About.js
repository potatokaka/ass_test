import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div>
        
        <div className="post-item col-md-8 mx-auto mt-3">
          <img src="https://images.unsplash.com/photo-1524793186508-ac4eab29c957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" width="100%" alt="" />
        </div>
        <div className="post-item col-md-8 mx-auto mt-3 mb-4">
          <h3>About something</h3>
          With designs as colorful as the muses that influence him, Peter Jensen confronts the fashion world with a gentle dose of eccentricity and humor.
          “I’ve never fit into the fashion scene as many other people do. I’m terrible at networking”
        </div>
      </div>
    )
  }
}

export default About;