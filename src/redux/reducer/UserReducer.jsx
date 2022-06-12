import { USER_LOGIN } from "../../util/setting/config"
import { CHANGE_AVATAR, CLOSE_USER_MODAL_EDIT, GET_ALL_USER, OPEN_USER_MODAL_EDIT } from "../constant/ConstantReducer"

let userLoginDefault = {}

if (localStorage.getItem(USER_LOGIN)) {
    userLoginDefault = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: userLoginDefault,
    listUser: [],
    showModalEditUser: false,
    userEdit: {}
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_USER: {
            return { ...state, listUser: action.listUser }
        }

        case OPEN_USER_MODAL_EDIT: {
            return { ...state, userEdit: action.userEdit, showModalEditUser: true }
        }

        case CLOSE_USER_MODAL_EDIT: {
            return { ...state, showModalEditUser: false }
        }

        case CHANGE_AVATAR: {            
            return { ...state, userLogin: action.user }
        }

        default:
            return { ...state }
    }
}
