import React from 'react';
// import { Tile } from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.clickTile = this.clickTile.bind(this)
        this.altClickTile = this.altClickTile.bind(this)
    }

    clickTile(e) {
        e.preventDefault(); 

        const currTile = this.props.tile;
        currTile.explore();
        // debugger
        if (currTile.explored && !currTile.bombed) {
            // debugger
            if (currTile.adjacentBombCount()) {
                // debugger
                this.setState({ text: currTile.adjacentBombCount() })
            }
        } else if (currTile.explored && currTile.bombed) {
            this.setState({ text: '\u{1F4A3}' })
            currTile.board.lost();
        }

        this.props.updateGame();
    }

    altClickTile(e) {
        // debugger;
    }
    
    render() {
        let currTile = this.props.tile;
        return(
            <div className={currTile.explored ? "tile revealed" : "tile"} onClick={ this.clickTile }>
                {this.state.text}
            </div>
        );
    }
}

export default Tile;