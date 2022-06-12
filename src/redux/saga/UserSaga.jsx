import { takeLatest, call, put, delay } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import { history } from '../../App';
import { usersService } from '../../service/UsersService'
import { DOMAINIMG, STATUS_CODE, TOKEN, USER_LOGIN } from '../../util/setting/config';
import { CHANGE_AVATAR, CLOSE_USER_MODAL_EDIT, DISPLAY_LOADING, GET_ALL_USER, HIDE_LOADING } from '../constant/ConstantReducer';
import { DELETE_ACCOUNT_API, DELETE_USER_API, EDIT_TYPE_USER_API, EDIT_USER_CLIENT_API, GET_ALL_USER_API, LOGIN_API, REGISTER_API, UPLOAD_AVATAR } from '../constant/ConstantSaga'

function* loginSaga(action) {

    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(1000)

    try {
        const { data, status } = yield call(() => usersService.login(action.user));
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'SUCCESS!',
                text: data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            })
            localStorage.setItem(TOKEN, data.token);
            localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))

            yield delay(500)
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        history.push('./app/todolist');
        window.location.reload()
        yield put({
            type: HIDE_LOADING
        })
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }

    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiLoginSaga() {
    yield takeLatest(LOGIN_API, loginSaga)
}


function* registerSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(1000)
    try {
        const { data, status } = yield call(() => usersService.register(action.user));
        if (status === STATUS_CODE.CREATE) {
            Swal.fire({
                title: 'Success!',
                text: 'Tạo tài khoản thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            history.push('/login')

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
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiRegisterSaga() {
    yield takeLatest(REGISTER_API, registerSaga)
}

function* getAllUserSaga(action) {
    try {
        const { data, status } = yield call(() => usersService.getAllUsers());
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_USER,
                listUser: data
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

export function* theoDoiGetAllUserSaga() {
    yield takeLatest(GET_ALL_USER_API, getAllUserSaga)
}

function* editTypeUserSaga(action) {
    const { id, user } = action;
    try {
        const { data, status } = yield call(() => usersService.editTypeUser(id, user));
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Edit type of user completed',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: CLOSE_USER_MODAL_EDIT
            })
            yield put({
                type: GET_ALL_USER_API
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

export function* theoDoiEditTypeUserSaga() {
    yield takeLatest(EDIT_TYPE_USER_API, editTypeUserSaga)
}

function* deleteUserSaga(action) {
    try {
        const { data, status } = yield call(() => usersService.deleteUser(action.id));
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Xoá user thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            yield put({
                type: GET_ALL_USER_API
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
        console.log(error);
        Swal.fire({
            title: 'Server Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiDeleteUserSaga() {
    yield takeLatest(DELETE_USER_API, deleteUserSaga)
}

function* editUserClientSaga(action) {
    try {
        const { data, status } = yield call(() => usersService.editUserClient(action.user));
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Edit user completed',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            localStorage.setItem(TOKEN, '');
            localStorage.getItem(USER_LOGIN, '');
            history.push('/login')
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
            title: 'Server error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiEditUserClientSaga() {
    yield takeLatest(EDIT_USER_CLIENT_API, editUserClientSaga)
}

function* uploadAvatarSaga(action) {
    try {
        const { data, status } = yield call(() => usersService.uploadAvatar(action.avatar));
        if (status === STATUS_CODE.SUCCESS) {
            localStorage.setItem(USER_LOGIN, JSON.stringify(data))

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

export function* theoDoiUploadAvatar() {
    yield takeLatest(UPLOAD_AVATAR, uploadAvatarSaga)
}

function* deleteAccountSaga(action) {
    try {
        const { data, status } = yield call(() => usersService.deleteAccount(action.id));
        if (status === STATUS_CODE.SUCCESS) {
            Swal.fire({
                title: 'Success!',
                text: 'Xoá user thành công',
                icon: 'success',
                confirmButtonText: 'OK!'
            })
            localStorage.setItem(TOKEN, '')
            localStorage.setItem(USER_LOGIN, '')
            history.push('/')
        } else {
            Swal.fire({
                title: 'Error!',
                text: data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Server Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

export function* theoDoiDeleteAccount() {
    yield takeLatest(DELETE_ACCOUNT_API, deleteAccountSaga)
}