import React from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux/index.js"

function CakeContainers(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainers)
