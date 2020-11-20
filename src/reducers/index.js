import counterReducer from "./counter"
import loggedReducer from "./isLogged"
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
})

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

export default allReducers
