import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { commentService } from '../../service/CommentService'
import { GET_ALL_COMMENT_API, SEND_COMMENT_API } from '../constant/ConstantSaga'
import Swal from 'sweetalert2'
import { GET_ALL_COMMENT } from '../constant/ConstantReducer'
import { STATUS_CODE } from '../../util/setting/config'

function* sendCommentSaga(action) {
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
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
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