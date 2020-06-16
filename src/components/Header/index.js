import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`

const StyledLink = styled(Link)`
    font-size: 20px;
    margin: 0px 15px;
`


const Header = () => {
    return (
        <Container>
            <StyledLink to="/">music notes</StyledLink>
            <div>
                <StyledLink to="/login">login</StyledLink>
                <StyledLink to="/new-account">create an account</StyledLink>
            </div>
        </Container>
    )
}

export default Header;