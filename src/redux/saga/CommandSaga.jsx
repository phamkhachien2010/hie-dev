import { call, takeLatest, put, delay } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import { commandService } from '../../service/CommandService';
import { STATUS_CODE } from '../../util/setting/config';
import { CLOSE_MODAL_TEMINAL_EDIT, CLOSE_MODAL_TEMINAL_USE, DISPLAY_LOADING, GET_ALL_COMMAND, HIDE_LOADING } from '../constant/ConstantReducer';
import { CREATE_COMMAND_API, DELETE_COMMAND_API, EDIT_COMMAND_API, GET_ALL_COMMAND_API } from '../constant/ConstantSaga';

function* getAllCommandSaga(action) {
    yield put({type:DISPLAY_LOADING})
    yield delay(1000)
    try {
        const { data, status } = yield call(() => commandService.getAllCommand(action.key))
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_COMMAND,
                listCommand: data
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        yield put({type:HIDE_LOADING})
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
    yield put({type:HIDE_LOADING})
}

export function* theoDoiGetAllCommandSaga() {
    yield takeLatest(GET_ALL_COMMAND_API, getAllCommandSaga)
}

function* createCommandSaga(action) {
    try {
        const { data, status } = yield call(() => commandService.createCommand(action.command))
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Tạo mới command thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_COMMAND_API,
                key: ''
            })
            yield put({
                type: CLOSE_MODAL_TEMINAL_USE
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

export function* theoDoiCreateCommand() {
    yield takeLatest(CREATE_COMMAND_API, createCommandSaga)
}

function* editCommandSaga(action) {
    try {
        const { data, status } = yield call(() => commandService.editCommand(action.id, action.command))
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Sửa command thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_COMMAND_API,
                key: ''
            })
            yield put({
                type: CLOSE_MODAL_TEMINAL_EDIT
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

export function* theoDoiEditCommandSaga() {
    yield takeLatest(EDIT_COMMAND_API, editCommandSaga)
}

function* deleteCommandSaga(action) {
    try {
        const { data, status } = yield call(() => commandService.deleteCommand(action.id))
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Xoá command thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })            
            yield put({
                type: GET_ALL_COMMAND_API,
                key: ''
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

export function* theoDoiDeleteCommandSaga() {
    yield takeLatest(DELETE_COMMAND_API, deleteCommandSaga)
}