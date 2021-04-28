import React from 'react';
// import { Tile } from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)

        this.clickTile = this.clickTile.bind(this)
    }

    clickTile(e) {
        e.preventDefault(); 
        let flagging = null; 
        const currTile = this.props.tile;
        if (e.altKey) {
            flagging = true;
        } else {
            flagging = false;
        }
        this.props.updateGame(currTile, flagging);
    }
    
    
    render() {
        let currTile = this.props.tile;
        let text = "";
        if (currTile.explored && !currTile.bombed) {
            if (currTile.adjacentBombCount()) {
                text = currTile.adjacentBombCount();
            }
        } else if (currTile.explored && currTile.bombed) {
            text = '\u{1F4A3}';
        } else if (currTile.flagged) {
            text = '\u{1F6A9}';
        }

        return(
            <div className={currTile.explored ? "tile revealed" : "tile"} onClick={ this.clickTile }>
                {text}
            </div>
        );
    }
}

export default Tile;