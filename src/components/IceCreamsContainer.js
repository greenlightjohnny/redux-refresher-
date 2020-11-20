import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { buyIceCream } from "../redux/index.js"

function IceCreamsContainer() {
  const iceCream = useSelector((state) => state.iceCream)
  const Dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Ice Creams {iceCream.numOfIceCreams}</h2>
      <button onClick={() => Dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default IceCreamsContainer
