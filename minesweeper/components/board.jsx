import React from 'react';
// import { Tile, Board } from '../minesweeper';
import Tile from './tile';


class Board extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.board.grid.map((row, idx) => {
                    // debugger
                    return (
                    <div key={idx}>
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
