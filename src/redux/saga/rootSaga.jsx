import { all } from 'redux-saga/effects'
import * as UserSaga from './UserSaga'
import * as LibrariesSaga from './LibrariesSaga';
import * as CommentSaga from './CommentSaga'
import * as TodoListSaga from './TodoListSaga'
import * as WorkSaga from './WorkSaga'
import * as CommandSaga from './CommandSaga'


export function* rootSaga() {
    yield all([
        UserSaga.theoDoiLoginSaga(),
        UserSaga.theoDoiRegisterSaga(),
        UserSaga.theoDoiGetAllUserSaga(),
        UserSaga.theoDoiEditTypeUserSaga(),
        UserSaga.theoDoiDeleteUserSaga(),

        LibrariesSaga.theoDoiGetAllLibrariesSaga(),
        LibrariesSaga.theoDoiCreateLibrarySaga(),
        LibrariesSaga.theoDoiEditLibrarySaga(),
        LibrariesSaga.theoDoiDeleteLibrarySaga(),

        CommentSaga.theoDoiCommentSaga(),
        CommentSaga.theoDoiGetAllCommentSaga(),

        TodoListSaga.theoDoiCreateTodoListSaga(),
        TodoListSaga.theoDoiGetAllTodoList(),
        TodoListSaga.theoDoiEditTodoListSaga(),
        TodoListSaga.theoDoiDeleteTodoListSaga(),

        WorkSaga.theoDoiCreateWorkSaga(),
        WorkSaga.theoDoiGetAllWorkSaga(),
        WorkSaga.theoDoiEditWorkSaga(),
        WorkSaga.theoDoiDeleteWorkSaga(),

        CommandSaga.theoDoiGetAllCommandSaga(),
        CommandSaga.theoDoiCreateCommand(),
        CommandSaga.theoDoiEditCommandSaga(),
        CommandSaga.theoDoiDeleteCommandSaga(),
    ])
}