import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { CREATE_WORK, DELETE_WORK_API, EDIT_WORK_API, GET_ALL_WORK_API } from '../constant/ConstantSaga'
import Swal from 'sweetalert2'
import { workService } from '../../service/WorkService'
import { STATUS_CODE } from '../../util/setting/config'
import { CLOSE_WORK_MODAL_EDIT, GET_ALL_WORK } from '../constant/ConstantReducer'

function* createWorkSaga(action) {
    try {
        const { data, status } = yield call(() => workService.createWork(action.work))
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'SUCCESS!',
                text: 'Tạo work thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
        } else {
            Swal.fire({
                title: 'Error1!',
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

export function* theoDoiCreateWorkSaga() {
    yield takeLatest(CREATE_WORK, createWorkSaga)
}

function* getAllWorkSaga(action) {
    try {
        const { data, status } = yield call(() => workService.getAllWork());
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_WORK,
                listWork: data
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

export function* theoDoiGetAllWorkSaga() {
    yield takeLatest(GET_ALL_WORK_API, getAllWorkSaga)
}

function* editWorkSaga(action) {
    const { id, workEdit } = action;
    try {
        const { data, status } = yield call(() => workService.ediWork(id, workEdit));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_WORK_API
            })
            yield put({
                type: CLOSE_WORK_MODAL_EDIT
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

export function* theoDoiEditWorkSaga() {
    yield takeLatest(EDIT_WORK_API, editWorkSaga)
}

function* deleteWorkSaga (action){
    try {
        const {data, status}= yield call(()=> workService.deleteWork(action.id));
        if(status===STATUS_CODE.SUCCESS){
            yield put({
                type: GET_ALL_WORK_API
            })
        }else{
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

export function* theoDoiDeleteWorkSaga(){
    yield takeLatest(DELETE_WORK_API, deleteWorkSaga)
}