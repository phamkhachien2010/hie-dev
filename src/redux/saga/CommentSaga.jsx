import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { commentService } from '../../service/CommentService'
import { DELETE_COMMENT_API, GET_ALL_COMMENT_API, SEND_COMMENT_API } from '../constant/ConstantSaga'
import Swal from 'sweetalert2'
import { DISPLAY_LOADING, GET_ALL_COMMENT, HIDE_LOADING } from '../constant/ConstantReducer'
import { STATUS_CODE } from '../../util/setting/config'

function* sendCommentSaga(action) {
    yield put({type:DISPLAY_LOADING})
    yield delay(500)
    try {
        const { data, status } = yield call(() => commentService.sendComment(action.comment))
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'Success!',
                text: 'Gửi thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
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

export function* theoDoiCommentSaga() {
    yield takeLatest(SEND_COMMENT_API, sendCommentSaga)
}

function* getAllCommentSaga(action) {
    try {
        const { data, status } = yield call(() => commentService.getAllComment())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_COMMENT,
                listComment: data
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

export function* theoDoiGetAllCommentSaga() {
    yield takeLatest(GET_ALL_COMMENT_API, getAllCommentSaga)
}

function* deleteCommentSaga(action){
    try {
        const { data, status } = yield call(() => commentService.deleteComment(action.id))
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            })
            yield put({
                type: GET_ALL_COMMENT_API
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

export function* theoDoiDeleteCommentSaga(){
    yield takeLatest(DELETE_COMMENT_API, deleteCommentSaga)
}