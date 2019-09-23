import React, {Component} from 'react';
import axios from 'axios';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    const {title, body} = this.state;

    axios.post('https://qootest.com/posts', {
      title: title,
      body: body,
      author: 'userkk'
    }).then(() => {
      alert('新增成功')
    }).catch(() => {
      alert('新增失敗')
    }).then(this.setState({
      title: '',
      body: ''
    }))
  }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>AddPost</h1>
        <div>
          Title: <input value={title} name='title' onChange={this.handleInputChange} />
        </div>
        <br/>
        <textarea value={body} name='body' onChange={this.handleInputChange} />
        <button onClick={this.onSubmit}>submit</button>
      </div>
    )
  }
}

export default AddPost;