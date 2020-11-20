import {
  USER_REQUEST_SEND,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
} from "./UserTypes"

const initialState = {
  loading: false,
  user: [],
  error: "",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST_SEND:
      return {
        ...state,
        loading: true,
      }
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.payload,
      }
    case USER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        user: [],
        error: action.payload,
      }
    default:
      return state
  }
}
export default userReducer
