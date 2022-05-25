import {combineReducers, createStore} from 'redux';
import { LibraryReducer } from './reducer/LibraryReducer';
import { TerminalInUseReducer } from './reducer/TerminalInUseReducer';

const rootReducer = combineReducers({
    TerminalInUseReducer,
    LibraryReducer
})

const store = createStore(rootReducer);

export default store;