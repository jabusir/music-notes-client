import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 30px;
    width: 30px;
    background-color: gold;
`

const Button = () => {
    return (
        <StyledButton>
            Go
        </StyledButton>
    )
}

export default Button;