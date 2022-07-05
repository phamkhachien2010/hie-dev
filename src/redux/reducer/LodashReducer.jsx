import { GET_ALL_LODASH_METHOD } from "../constant/ConstantReducer"

const initialState = {
    listLodashMethods: []
}

export const LodashReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_LODASH_METHOD: {
            return { ...state, listLodashMethods: action.listLodashMethods }
        }

        default:
            return { ...state }
    }
}
