import React from 'react';
import { Board as MSBoard } from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super()
    
    this.state = {
      board: new MSBoard(10, 10)
  
    }

    this.updateGame.bind(this);
  }

  updateGame(tile, flagging) {
    if (flagging) {
      tile.toggleFlag()
    } else {
      tile.explore();
      if (tile.explored && !tile.bombed) {
        if (tile.adjacentBombCount()) {
        }
      } else if (tile.explored && tile.bombed) {
        tile.board.lost();
      }
    }
    
  }

  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame}/>
    )
  }

}

export default Game;