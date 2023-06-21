import React, { Component } from "react";
import "./tictactoe.css"; // Import the CSS file for styling

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: "X",
      winner: null,
    };
  }

  handleClick(index) {
    if (!this.state.board[index] && !this.state.winner) {
      const newBoard = [...this.state.board];
      newBoard[index] = this.state.currentPlayer;

      this.setState(
        {
          board: newBoard,
          currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
        },
        () => {
          this.checkWinner();
        }
      );
    }
  }

  checkWinner() {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      const board = this.state.board;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          winner: board[a],
        });
        return;
      }
    }

    if (this.state.board.every((cell) => cell !== null)) {
      this.setState({
        winner: "draw",
      });
    }
  }

  render() {
    return (
      <div className="tic-tac-toe">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          {this.state.board.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => this.handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {this.state.winner && (
          <div className="message">
            {this.state.winner === "draw" ? (
              <span>It's a draw!</span>
            ) : (
              <span>Player {this.state.winner} wins!</span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default TicTacToe;
