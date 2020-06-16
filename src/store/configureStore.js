import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userReducer from '../reducers/userReducer';

const compEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;


export default () => {
    const store = createStore(
        combineReducers({
            user: userReducer,
        }),
        compEnhancers(applyMiddleware())
    );
    return store;
};