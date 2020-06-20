
import React from 'react';
import { connect } from 'react-redux';


class DropdownCard extends React.Component {
    state = {
    }

    componentDidMount() {
        const track = this.props.track
        this.setState(() => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            image: track.album.images[0].url,
            uri: track.uri
        }))
    }

    handleClick = () => {
    }

    render() {
        return(
        <div className="dropdown-item" onClick={this.handleClick}>
            <img className="track-image" src={this.state.image} height="100px" width="100px" alt="album"/>   
            <div className="track-name">
                {this.state.name}
            </div>
        </div>
        )
    }
}
    

    export default connect()(DropdownCard);