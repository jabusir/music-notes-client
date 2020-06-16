import { useReducer } from "react";

const defaultState = {

}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...action.user,
            }
        default:
            return state;
    }
}