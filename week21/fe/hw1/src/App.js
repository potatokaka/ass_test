import React, {Component} from 'react';
import Todo from './todo';
import './bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      filter: 'all', //預設是會看到所有的項目
    }
    this.id = 1

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleKeyAdd = this.handleKeyAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.markTodo = this.markTodo.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterDone = this.filterDone.bind(this);
  }

  // 初始化，把原 localStorage 裡的項目 render 出來
  componentDidMount() {
    const todoData = window.localStorage.getItem('todoApp');
    if (todoData) {
      const jsonData = JSON.parse(todoData);
      this.setState({
        todos: jsonData
      })
      this.id = jsonData[jsonData.length - 1].id + 1 // id 會變成陣列最後一個的 id，再加1，避免重覆
    }
  }

  // 加入 localStorage
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) { //如果 todos 有變的話，就做…事情
      window.localStorage.setItem('todoApp', JSON.stringify(this.state.todos)) //把狀態存到 state
    }
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value //把新 todo 的值帶入 state
    })
  }
  
  addTodo() {
    const {newTodo, todos} = this.state;
    if (newTodo !== '') {
      this.setState({
        todos: [...todos, {
          id: this.id,
          isCompleted: false,
          content: newTodo
        }],
        newTodo: '', //清空 input 的內容
      })
      this.id++
    } else {
      alert('Please enter tasks!');
    }
  }

  // 用鍵盤 Enter 新增 
  handleKeyAdd(e) {
    if (e.key === 'Enter') {
      this.addTodo();
    }
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id),
    })
  }

  markTodo(id) {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id !== id) {
          return item
        }
        return {
          ...item, //解構寫法
          isCompleted: !item.isCompleted
        }
      }),
    })
  }

  filterAll() {
    this.setState({
      filter: 'all',
    })
  }

  filterDone() {
    this.setState({
      filter: 'completed',
    })
  }

  render() {
    const {todos, newTodo, filter} = this.state;
    return (
      <div className="container">
        <div id="todo-list" className="row justify-content-md-center">
          <div className="col-md-6">

            <div className="card">
              <h5 className="card-header">Todo List</h5>
              <div className="card-body">
                <h5 className="card-title">Thursday, 11th 2019</h5>
                <p className="card-text">Be yourself. Everyone else is taken.</p>
                <div className="add-todo">
                  <input className="input-underlined" value={newTodo} onChange={this.handleChange} onKeyPress={this.handleKeyAdd} placeholder="What to do" />
                  <div className="btn-submit" onClick={this.addTodo}><i className="material-icons">library_add</i></div>
                </div>
                <h6>Your Tasks</h6>
                <div className="mb-3">
                  <button type="button" className="btn btn-secondary mr-2" onClick={this.filterAll}>All</button>
                  <button type="button" className="btn btn-light" onClick={this.filterDone} >Done</button>
                </div>
              </div>
            </div>

            <ul className="list-group list-group-flush">
              {todos
                .filter(item => filter === 'completed' ? item.isCompleted : true)
                .map(item => (
                  <Todo key={item.id} todo={item} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />
              ))}

              {/* <li className="list-group-item done">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" />
                  <span className='todo_content'>Breakfast</span>
                </div>
                <div>
                    <span className="btn-close"><i aria-hidden="true" className="material-icons">close</i></span>
                </div>
              </li> */}

            </ul>
            
          </div>
        </div>

      </div>
      
    );
  }
}

export default App;
