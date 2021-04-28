import React from 'react';
// import { Tile } from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'T'
        }

        this.clickTile = this.clickTile.bind(this)
    }

    clickTile(e) {
        e.preventDefault(); 

        const currTile = this.props.tile;

        if (currTile.explored) {
            if (currTile.adjacentBombCount()) {
                this.setState({ text: currTile.adjacentBombCount() })
            }
        } else if (currTile.bombed) {
            this.setState({ text: '\u{1F4A3}' })
        }
    }

    altClickTile(e) {

    }
    
    render() {
        return(
            <div className="tile" onClick={ this.clickTile }>
                {this.state.text}
            </div>
        );
    }
}

export default Tile;