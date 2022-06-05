import { applyMiddleware, combineReducers, createStore } from 'redux';
import { LibraryReducer } from './reducer/LibraryReducer';
import { TerminalInUseReducer } from './reducer/TerminalInUseReducer';

import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './saga/rootSaga'
import { UserReducer } from './reducer/UserReducer';
import { LoadingReducer } from './reducer/LoadingReducer';
import { TodoListReducer } from './reducer/TodolistReducer';
import { WorkReducer } from './reducer/WorkReducer';
import { CommentReducer } from './reducer/CommentReducer';



const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    TerminalInUseReducer,
    LibraryReducer,
    UserReducer,
    LoadingReducer,
    TodoListReducer,
    WorkReducer,
    CommentReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga)

export default store;