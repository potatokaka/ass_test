import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.mark = this.mark.bind(this);
  }

  delete() {
    const {todo, deleteTodo} = this.props;
    deleteTodo(todo.id);
  }

  mark() {
    const {todo, markTodo} = this.props; //去 call parent，讓 parent來處理
    markTodo(todo.id); //目的是要提供id給 parent 的 markTodo 去執行
  }

  render() {
    const {todo} = this.props;
    return (
      <li className={`list-group-item ${todo.isCompleted? 'done' : ''} `}>
        <div className="form-check">
          <input className="form-check-input" checked={todo.isCompleted} type="checkbox" name="completion" value={todo.isCompleted} onChange={this.mark}/>
          <span className='todo_content'>{todo.content}</span>
        </div>
        <div>
          <span className="btn-close" onClick={this.delete}><i aria-hidden="true" className="material-icons">close</i></span>
        </div>
      </li>
    )
  }
}

export default Todo;