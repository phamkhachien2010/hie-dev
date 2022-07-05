import { takeLatest, put, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import { lodashService } from '../../service/LodashService'
import { STATUS_CODE } from '../../util/setting/config';
import { GET_ALL_LODASH_METHOD } from '../constant/ConstantReducer';
import { GET_ALL_LODASH_METHOD_API } from '../constant/ConstantSaga'

function* getAllLodashMethodsSaga(action) {
    try {
        const { data, status } = yield call(() => lodashService.getAllLodashMethods(action.description));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_ALL_LODASH_METHOD,
                listLodashMethods: data.content
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

export function* theoDoiGetAllLodashMethodsSaga() {
    yield takeLatest(GET_ALL_LODASH_METHOD_API, getAllLodashMethodsSaga)
}