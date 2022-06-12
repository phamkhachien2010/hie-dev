import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { CREATE_TODOLIST, DELETE_TODOLIST_SAGA, EDIT_TODOLIST_SAGA, GET_ALL_TODOLIST_SAGA } from '../constant/ConstantSaga';
import Swal from 'sweetalert2'
import { todoListService } from '../../service/TodoListService';
import { STATUS_CODE } from '../../util/setting/config';
import { CLOSE_FORM_EDIT_TODOLIST, SET_LIST_TODO } from '../constant/ConstantReducer';

function* createTodoSaga(action) {
    try {
        const { data, status } = yield call(() => todoListService.createTodo(action.todo));
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'Success!',
                text: 'Thêm việc thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield delay(1000)
            window.location.reload()
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiCreateTodoListSaga() {
    yield takeLatest(CREATE_TODOLIST, createTodoSaga)
}


function* getAllTodoList(action) {
    try {
        const { data, status } = yield call(() => todoListService.getallTodoLists())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: SET_LIST_TODO,
                listTodo: data
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiGetAllTodoList() {
    yield takeLatest(GET_ALL_TODOLIST_SAGA, getAllTodoList)
}


function* editTodoListSaga(action) {
    const { id, todoList } = action
    try {
        const { data, status } = yield call(() => todoListService.editTodoList(id, todoList));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_TODOLIST_SAGA
            })
            yield put({
                type: CLOSE_FORM_EDIT_TODOLIST
            })
            Swal.fire({
                title: 'Success!',
                text: 'Sửa thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiEditTodoListSaga() {
    yield takeLatest(EDIT_TODOLIST_SAGA, editTodoListSaga)
}

function* deleteTodolistSaga(action) {
    try {
        const { data, status } = yield call(() => todoListService.deleteTodoList(action.id));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_TODOLIST_SAGA
            })
            window.location.reload()
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiDeleteTodoListSaga() {
    yield takeLatest(DELETE_TODOLIST_SAGA, deleteTodolistSaga)
}