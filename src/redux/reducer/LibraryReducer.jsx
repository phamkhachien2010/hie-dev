import { CLOSE_LIBRARY_MODAL_CREATE, CLOSE_LIBRARY_MODAL_EDIT, OPEN_LIBRARY_MODAL_CREATE, OPEN_LIBRARY_MODAL_EDIT } from "../constant/ConstantReducer"

const initialState = {
    showLibraryModalCreate: false,
    showLibraryModalEdit: false,
}

export const LibraryReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_LIBRARY_MODAL_CREATE: {
            return { ...state, showLibraryModalCreate: true }
        }

        case CLOSE_LIBRARY_MODAL_CREATE: {
            return { ...state, showLibraryModalCreate: false }
        }

        case OPEN_LIBRARY_MODAL_EDIT: {
            return { ...state, showLibraryModalEdit: true }
        }
        case CLOSE_LIBRARY_MODAL_EDIT: {
            return { ...state, showLibraryModalEdit: false }
        }

        default:
            return { ...state }
    }
}
