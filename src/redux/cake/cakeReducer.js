import { BUY_CAKE } from "./cakeTypes"

const initialState = {
  numOfCakes: 10,
  payload: 1,
}

const cakeReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      }
    default:
      return state
  }
}

export default cakeReducer
