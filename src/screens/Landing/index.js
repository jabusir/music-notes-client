import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';

const StyledContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    align-items: center;
`

const Landing = () => {
    return (
        <StyledContainer>
            <h1>Welcome to music notes</h1>
            <div>Create and account or login to start recommending songs to your friends</div>
        </StyledContainer>

    );
}

export default Landing