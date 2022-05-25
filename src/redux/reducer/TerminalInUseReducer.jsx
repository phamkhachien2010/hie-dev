import { CLOSE_MODAL_TEMINAL_EDIT, CLOSE_MODAL_TEMINAL_USE, OPEN_MODAL_TEMINAL_EDIT, OPEN_MODAL_TEMINAL_USE } from "../constant/ConstantReducer"

const initialState = {
  showModalTerminal: false,
  showModalTerminalEdit: false

}

export const TerminalInUseReducer = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_MODAL_TEMINAL_EDIT:{
      return {...state, showModalTerminalEdit:true}
    }

    case CLOSE_MODAL_TEMINAL_EDIT:{
      return {...state, showModalTerminalEdit:false}
    }

    case OPEN_MODAL_TEMINAL_USE:{
      return {...state, showModalTerminal: true}
    }

    case CLOSE_MODAL_TEMINAL_USE:{
      return {...state, showModalTerminal: false}
    }
  
  default:
    return {...state}
  }
}
