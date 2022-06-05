import { CHANGE_TYPE_WORK, CLOSE_WORK_MODAL_EDIT, GET_ALL_WORK, OPEN_WORK_MODAL_EDIT } from "../constant/ConstantReducer"

const initialState = {
    listWork: [],
    showEditWorkModal: false,
    workEdit: {}
}

export const WorkReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_WORK: {
            return { ...state, listWork: action.listWork }
        }

        case CHANGE_TYPE_WORK: {
            let newListWork = [...state.listWork]
            let { work } = action;
            const index = state.listWork.findIndex((workCr) => workCr.id === work.id);
            if (index !== -1) {
                if (work.type === 'WILL_DO') {
                    work.type = 'DONE'
                }
                if (work.type === 'DONE') {
                    work.type = 'WILL_DO'
                }
                newListWork = [...state.listWork, state.listWork[index] = work]
            }
            return { ...state, listWork: newListWork }
        }

        case OPEN_WORK_MODAL_EDIT: {
            return { ...state, workEdit: action.workEdit, showEditWorkModal: true }
        }

        case CLOSE_WORK_MODAL_EDIT: {
            return { ...state, showEditWorkModal: false }
        }

        default:
            return { ...state }
    }
}
