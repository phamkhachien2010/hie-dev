import { GET_ALL_COMMENT } from "../constant/ConstantReducer"

const initialState = {
    listComment:[]
}

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_COMMENT:{
      return {...state, listComment:action.listComment}
  }

  default:
    return {...state}
  }
}
