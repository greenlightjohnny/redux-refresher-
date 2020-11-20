import {
  USER_REQUEST_SEND,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_FAILURE,
} from "./UserTypes"
import axios from "axios"

export const userRequestSend = () => {
  return {
    type: USER_REQUEST_SEND,
  }
}

export const userRequestSuccess = (success) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: success,
  }
}

export const userRequestFailure = (error) => {
  return {
    type: USER_REQUEST_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequestSend)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data.map((i) => i.id)
        dispatch(userRequestSuccess(user))
      })
      .catch((error) => {
        dispatch(userRequestFailure(error.message))
      })
  }
}

//     const hmmm =  ( => {

//         return {
//         console.log("Clickc")
//       props.userRequestSend()
//       axios
//         .get("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           const userId = res.data.map((i) => i.id)

//           console.log(res.data)
//           props.userRequestSuccess(userId)
//         })
//         .catch((error) => {
//           props.userRequestFailure(error.message)
//         })
//     }
// }
