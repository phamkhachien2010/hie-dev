import { CLOSE_MODAL_TEMINAL_EDIT, CLOSE_MODAL_TEMINAL_USE, GET_ALL_COMMAND, OPEN_MODAL_TEMINAL_EDIT, OPEN_MODAL_TEMINAL_USE } from "../constant/ConstantReducer"

const initialState = {
  showModalTerminal: false,
  showModalTerminalEdit: false,
  listCommand: [],
  commandEdit: {}
}

export const TerminalInUseReducer = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_MODAL_TEMINAL_EDIT: {
      return { ...state, commandEdit: action.commandEdit, showModalTerminalEdit: true }
    }

    case CLOSE_MODAL_TEMINAL_EDIT: {
      return { ...state, showModalTerminalEdit: false }
    }

    case OPEN_MODAL_TEMINAL_USE: {
      return { ...state, showModalTerminal: true }
    }

    case CLOSE_MODAL_TEMINAL_USE: {
      return { ...state, showModalTerminal: false }
    }

    case GET_ALL_COMMAND: {
      return { ...state, listCommand: action.listCommand }
    }


    default:
      return { ...state }
  }
}
