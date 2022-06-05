import { takeLatest, call, put } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import { librariesService } from '../../service/LibrariesService';
import { STATUS_CODE } from '../../util/setting/config';
import { CLOSE_LIBRARY_MODAL_CREATE, CLOSE_LIBRARY_MODAL_EDIT, GET_ALL_LIBRARIES } from '../constant/ConstantReducer';
import { CREATE_LIBRARY_API, DELETE_LIBRARY_API, EDIT_LIBRARY_API, GET_ALL_LIBRARIES_API } from '../constant/ConstantSaga';

function* getAllLibrariesSaga(action) {
    try {
        const { data, status } = yield call(() => librariesService.getAllLibraries(action.key))
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_LIBRARIES,
                listLibraries: data
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

export function* theoDoiGetAllLibrariesSaga() {
    yield takeLatest(GET_ALL_LIBRARIES_API, getAllLibrariesSaga)
}

function* createLibrarySaga(action) {
    try {
        const { data, status } = yield call(() => librariesService.createLibrary(action.library))
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'Success!',
                text: 'Thêm thư viện thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_LIBRARIES_API,
                key: ''
            })
            yield put({
                type: CLOSE_LIBRARY_MODAL_CREATE
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

export function* theoDoiCreateLibrarySaga() {
    yield takeLatest(CREATE_LIBRARY_API, createLibrarySaga)
}

function* editLibrarySaga(action) {
    try {
        const { data, status } = yield call(() => librariesService.editLibrary(action.id, action.library))
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Sửa thư viện thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_LIBRARIES_API,
                key: ''
            })
            yield put({
                type: CLOSE_LIBRARY_MODAL_EDIT
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

export function* theoDoiEditLibrarySaga() {
    yield takeLatest(EDIT_LIBRARY_API, editLibrarySaga)
}

function* deleteLibrarySaga(action){
    try {
        const { data, status } = yield call(() => librariesService.deleteLibrary(action.id))
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Xoá thư viện thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_LIBRARIES_API,
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

export function* theoDoiDeleteLibrarySaga(){
    yield takeLatest(DELETE_LIBRARY_API, deleteLibrarySaga)
}