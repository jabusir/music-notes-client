
import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';


const DropDownItem = styled.div`
    height: 100px;
    font-size: 25px;
    display: flex;
    align-items: center;
    border: black solid 1px;
    width: 100%;
`

const TrackName = styled.div`
    margin-left: 5px;
`

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
        <DropDownItem className="dropdown-item" onClick={this.handleClick}>
            <img className="track-image" src={this.state.image} height="100px" width="100px" alt="album"/>   
            <div className="track-name">
                {this.state.name}
            </div>
        </DropDownItem>
        )
    }
}
    

    export default connect()(DropdownCard);