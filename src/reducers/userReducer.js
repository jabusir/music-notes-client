const defaultState = {
    user: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}