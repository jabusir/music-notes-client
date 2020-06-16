import React from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
    height: 50px;
    width: 300px;
    margin: 10px 15px;
`
export const PasswordInput = styled.input.attrs(props => ({
    // Every <PasswordInput /> should be type="password"
    type: "password"
}))`
        height: 50px;
        width: 300px;
        margin: 10px 15px;
`
