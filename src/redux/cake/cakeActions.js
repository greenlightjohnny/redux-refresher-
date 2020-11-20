import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (payload) => {
  console.log(payload)
  return {
    type: BUY_CAKE,
    payload,
  }
}
