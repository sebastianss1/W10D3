import React from 'react';
import { Board as MSBoard } from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      board: new MSBoard(10, 10)
  
    }

    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, flagging) {
    // debugger
    if (flagging) {
      tile.toggleFlag()
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  restartGame() {
    const newBoard = new MSBoard(10, 10);
    this.setState({ board: newBoard });
  }

  render() {
    if (this.state.board.lost()) {
      alert('YOU LOSE. TRY AGAIN!')
    } else if (this.state.board.won()) {
      alert('You win!')
    }
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame}/>
        <button onClick={this.restartGame}>Restart</button>
      </div>
    )
  }

}

export default Game;