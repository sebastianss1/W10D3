import React from 'react';
import { Board as MSBoard } from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super()
    
    this.state = {
      board: new MSBoard(10, 2)
  
    }

    this.updateGame.bind(this);
  }

  updateGame() {
    console.log("hello")
  }


  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame}/>
    )
  }

}

export default Game;