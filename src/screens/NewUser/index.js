import React, { useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { StyledInput, PasswordInput } from '../../components/Input'
import StyledForm from '../../components/Form';
import Button from '../../components/Button';
import { setUser } from '../../actions/users';

const NewUserForm = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .then((res) => props.dispatch(setUser(res)))
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput value={username} onChange={e => setUsername(e.target.value)} placeholder="username" />
            <StyledInput value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
            <PasswordInput value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
            <Button>Go</Button>
        </StyledForm>
    )
}

export default connect()(NewUserForm);