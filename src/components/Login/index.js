import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyledInput, PasswordInput } from '../Input';
import Button from '../Button'
import { setUserToken } from '../../actions/users';




const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
            .then((res) => props.dispatch(setUserToken(res.token)))

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

export default connect()(Login);