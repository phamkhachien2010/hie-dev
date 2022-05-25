import { CLOSE_MODAL_TEMINAL_USE, OPEN_MODAL_TEMINAL_USE } from "../constant/ConstantReducer"

const initialState = {
  showModalTerminal: false
}

export const TerminalInUseReducer = (state = initialState, action) => {
  switch (action.type) {


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
