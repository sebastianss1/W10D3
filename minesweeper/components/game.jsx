import React from 'react';
import { Tile, Board } from '../minesweeper';

class Game extends React.Component {
  constructor() {
    super()
    
    this.state = {
      board: new Board()
  
    }

    this.updateGame.bind(this);
  }

  updateGame() {

  }


  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame}/>

    )


  }

}