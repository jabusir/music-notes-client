import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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


const Header = (props) => {
    return (
        <Container>
            <StyledLink to="/">music notes</StyledLink>
            {!props.user.token ? (
            <div>
                <StyledLink to="/login">login</StyledLink>
                <StyledLink to="/create">create an account</StyledLink>
            </div>)
            :
            (
                <StyledLink to="/me">profile</StyledLink>
            )
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps)(Header);