import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'; //Higher order component
import axios from 'axios'
import './posts.css';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {
    axios.get('https://qootest.com/posts')
    .then(response => {
        this.setState({
          posts: response.data
        })
      })
  }

  render() {
    const {posts} = this.state;
    const {history} = this.props;
    return (
      <div>
        
        <div className="post-item col-md-8 mx-auto mt-3">
          <img src="https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" width="100%" alt="" />
        </div>
        
        <div className="container mt-2">
          <div className="row post-list">     
              {posts.map((item)=> (
                <div className="post-item col-md-8 mx-auto mt-3 mb-4" key={item.id} onClick={() => {
                  history.push('/post/' + item.id); //一個換頁的 function
                }}>

                  <h4>{item.title}</h4>
                  <div className="post-item__author">
                    Author: {item.author} 
                  </div>
                  <div className="post-item__body">
                    {item.body} 
                  </div>
                </div>
              ))}
          </div>
        </div>



    </div> 
    )
  }
}

// export default PostList;
export default withRouter(PostList);