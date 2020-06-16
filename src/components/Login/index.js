import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyledInput, PasswordInput } from '../Input';
import Button from '../Button'
import { setUserToken } from '../../actions/users';
import styled from 'styled-components';
import Container from '../Container'


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: center;
    align-items: center;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
`
const StyledButton = styled(Button)`
    margin: 0 auto;
`

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)

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
        }).then((res) => {
            if (res.status === 200) {
                return res.json()
            }
        }).then((res) => {
            props.dispatch(setUserToken(res.token))
            props.history.push('/home')
        }).catch((e) => {
            setErr(true)
        })

    }
    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <StyledContainer>
                    <StyledInput value={email} onChange={e => setEmail(e.target.value)} />
                    <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
                    {err && <div>Wrong email password combination, try again.</div>}
                    <StyledButton>Go</StyledButton>
                </StyledContainer>

            </StyledForm>
        </div>
    );

}

export default connect()(Login);