import React, { useEffect } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Container from '../../components/Container';

const StyledContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    align-items: center;
`

const Landing = (props) => {
    // useEffect(() => {
    //     if (props.user.token) {
    //         props.history.push('/home')
    //     }
    // }, [props.user])

    return (
        <StyledContainer>
            <h1>Welcome to music notes</h1>
            <div>Create and account or login to start recommending songs to your friends</div>
        </StyledContainer>

    );
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps)(Landing);