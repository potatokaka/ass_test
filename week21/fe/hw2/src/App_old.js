import React, {Component} from 'react';
import './bootstrap.min.css';
import './App.css';

const boardSize = 19;

class Square extends React.Component {
  render() {
    return (
        <button className="square" onClick={this.props.onClick}>
          <div className={`circle ${this.props.value ? this.props.value : ''} `}></div>
            {/* {this.props.value} */}
        </button>
      )
    }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(boardSize * boardSize).fill(null),
      blackIsNext: true,
      winner: false, 
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  handleClick(i) {
    const {squares, blackIsNext, winner} = this.state;
    const current = squares.slice();
    if (winner || current[i]) return; //同一個位置不能重覆下

    current[i] = blackIsNext ? 'black' : 'white'; //下棋子

    this.setState({
      squares: current,
      blackIsNext: !blackIsNext,
      winner: this.checkWinner(current)
    });
    // this.checkWinner(current)

  }

  renderSquare(i) {
    return (
      <Square key={i} value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} />
    );
  }

  checkWinner(current) {
    const winPatterns = []; // 獲勝的組合
    for (let i = 0; i < boardSize * boardSize; i += 1) {
      winPatterns.push([i, i+1, i+2, i+3, i+4]); //橫向
      winPatterns.push([i, i+19, i+38, i+57, i+76]); //直向
      winPatterns.push([i, i+20, i+40, i+60, i+80]); //斜向
      winPatterns.push([i, i+18, i+36, i+54, i+72]); //反斜向
    }

    for (let i = 0; i < winPatterns.length; i += 1) { //驗証
      const [a, b, c, d, e] = winPatterns[i];
      if (current[a] && 
          current[a] === current[b] &&
          current[a] === current[c] &&
          current[a] === current[d] &&
          current[a] === current[e]) {
        alert('you win');
        return current[a];
      } 
    }
  }

  render() {
    let n = 0;
    let board = [];
    for (let i = 0; i < boardSize; i += 1) {
      let row = [];
      for (let j = 0; j < boardSize; j += 1, n += 1) {
       row.push(this.renderSquare(n)) 
      }
      board.push(<div className="board-row">{row}</div>);
    }

    const status = 'Next player: '　+ (this.state.blackIsNext ? 'Black' : 'White');

    return (
      <div>
        <h1>{status}</h1>
        <div className="board-wrapper"> {board} </div>
        
        {/* <div className="board-wrapper">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
        </div> */}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    const status = 'Next player: X';
    

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div className="game-info__title">GOMOKU</div>
          <div className="status">{status}</div>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
