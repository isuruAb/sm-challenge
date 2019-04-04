import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from './reducers/root_reducer';


const store = createStore(
    rootReducer,
    {},
    applyMiddleware(logger, thunk)
);
export default store;