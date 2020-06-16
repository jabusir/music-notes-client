import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 30px;
    width: 55px;
    background-color: black;
    color: white;
    border: black solid 3px;
    border-radius: 5px;
    cursor: pointer;
`

const Button = () => {
    return (
        <StyledButton>
            Go
        </StyledButton>
    )
}

export default Button;