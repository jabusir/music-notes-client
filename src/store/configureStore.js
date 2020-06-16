import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';


export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
        }),
        applyMiddleware()
    );
    return store;
};