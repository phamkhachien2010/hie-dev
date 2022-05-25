import {combineReducers, createStore} from 'redux';
import { TerminalInUseReducer } from './reducer/TerminalInUseReducer';

const rootReducer = combineReducers({
    TerminalInUseReducer
})

const store = createStore(rootReducer);

export default store;