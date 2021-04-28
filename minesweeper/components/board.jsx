import React from 'react';
// import { Tile, Board } from '../minesweeper';
import Tile from './tile';


class Board extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="board">
                {this.props.board.grid.map((row, idx) => {
                    // debugger
                    return (
                    <div className="row" key={idx}>
                        {row.map((tile, i) => {
                            // debugger
                            return (
                                <Tile key={i} tile={tile} updateGame={this.props.updateGame} />
                            )
                        })}
                    </div>
                    )
                }) }
            </div>
        )
     }
}

export default Board;
