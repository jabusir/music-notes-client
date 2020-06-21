import url from './url';

export const loginUser = (email, password) => {
    return fetch(`${url}/users/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}

export const newUser = (email, username, password) => {
    return fetch(`${url}/users`, {
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
}

export const getUserProfile = (token) => {
    return fetch(`${url}/users/me`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}