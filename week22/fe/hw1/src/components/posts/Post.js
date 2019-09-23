import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './posts.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }
  
  componentDidMount() {
    const postId = this.props.match.params.postId; //去抓 ID

    axios.get('https://qootest.com/posts/' + postId)
    .then(response => {
        this.setState({
          post: response.data
        })
      })
  }

  render() {
    const {post} = this.state;
    return (
      <div>
        <div className="post-item col-md-8 mx-auto mt-3">
          <img src="https://images.unsplash.com/photo-1553458287-b25ff2a8a778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80" width="100%" alt="" />
        </div>

        <div className="post-item col-md-8 mx-auto mt-3 mb-4">
          <h2>{!post.title ? 'loading...' : post.title}</h2>
            <p>
              {post.body}
            </p>
            <Link to="/post" className="btn btn-secondary">Back</Link>
        </div>
       
      </div>
    )
  }
}

export default Post;