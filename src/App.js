import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './components/Squares';



class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }


  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({squares: squares});
  }


  renderSquare(i) {
    return <Square value={i}/>;
  }


  render() {
    const status = 'Next player: X';

    return (
      <div>
        <h1>Tic-Tac-Toe game built in React!</h1>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>

      </div>
    )
  }



}

export default Board;