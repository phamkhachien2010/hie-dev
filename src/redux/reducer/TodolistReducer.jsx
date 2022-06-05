import { CLOSE_FORM_EDIT_TODOLIST, OPEN_FORM_EDIT_TODOLIST, SET_LIST_TODO, SET_LIST_TODO_BY_ID, SET_TITLE_TODO } from "../constant/ConstantReducer"

const initialState = {
    listTodo: [],
    listTodoById: [],
    titleTodoClick: '',
    showEditFormTodoList: false,
    todoListEdit: {}
}

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LIST_TODO: {
            return { ...state, listTodo: action.listTodo }
        }

        case SET_LIST_TODO_BY_ID: {
            return { ...state, listTodoById: action.listTodoById }
        }

        case SET_TITLE_TODO: {
            return { ...state, titleTodoClick: action.titleTodoClick }
        }

        case OPEN_FORM_EDIT_TODOLIST: {
            return { ...state, todoListEdit: action.todoListEdit, showEditFormTodoList: true }
        }

        case CLOSE_FORM_EDIT_TODOLIST: {
            return { ...state, showEditFormTodoList: false }
        }

        default:
            return { ...state }
    }
}
