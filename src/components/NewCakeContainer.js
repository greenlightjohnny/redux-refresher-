import React, { useState } from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux/index.js"

function NewCakeContainers(props) {
  const [number, setNumber] = useState(1)
  console.log(number)
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (e) => dispatch(buyCake(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainers)
