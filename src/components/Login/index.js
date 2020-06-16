import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledInput, PasswordInput } from '../Input';
import Button from '../Button'




const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => res.json())
            .then((res) => console.log(res))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StyledInput value={email} onChange={e => setEmail(e.target.value)} />
                <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
                <Button>Go</Button>
            </form>
        </div>
    );

}

export default Login;