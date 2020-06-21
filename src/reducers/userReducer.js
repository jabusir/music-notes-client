import { useReducer } from "react";

const defaultState = {

}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...action.user,
            }
        case 'SET_TOKEN': 
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}