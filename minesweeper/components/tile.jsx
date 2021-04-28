import React from 'react';
// import { Tile } from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.clickTile = this.clickTile.bind(this)
    }

    clickTile(e) {
        e.preventDefault(); 
        let flagging = null; 
        const currTile = this.props.tile;
        if (e.altKey) {
            flagging = true;
            this.setState({ text: '\u{1F6A9}' })
        } else {
            flagging = false;
            if (currTile.explored && !currTile.bombed) {
                if (currTile.adjacentBombCount()) {
                    this.setState({ text: currTile.adjacentBombCount() })
                }
                flagging = false;
            } else if (currTile.explored && currTile.bombed) {
                this.setState({ text: '\u{1F4A3}' })
            }
        }
        this.props.updateGame(currTile, flagging);
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