import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import DropdownCard from '../DropdownCard';

const Container = styled.div`
    width: 80%
`

class Dropdown extends React.Component {
    state = {
        track: {}
    }

    handleClick = () => {
    }

    render() {
        return (
            <Container>
            {
                this.props.tracks.length > 0 && this.props.tracks.map((track) => (
                        <DropdownCard track={track} key={track.id}/>
                ))
            }
            </Container>
        );
    }
}

export default connect()(Dropdown)