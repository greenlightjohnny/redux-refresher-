import React, { useEffect } from "react"
import { fetchUsers } from "../redux/index"
import axios from "axios"
import { connect } from "react-redux"
import {
  userRequestSend,
  userRequestSuccess,
  userRequestFailure,
} from "../redux"

function useContainer(props) {
  //   const fetchUsers = () => {
  //     console.log("Clickc")
  //     props.userRequestSend()
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users"
  //       .then((res) => {
  //         const userId = res.data.map((i) => i.id)

  //         console.log(res.data)
  //         props.userRequestSuccess(userId)
  //       })
  //       .catch((error) => {
  //         props.userRequestFailure(error.message)
  //       })
  //   }
  //   console.log(props.user)

  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <div>
      <p>Users: {props.user.user ? props.user.user : "Emppty"}</p>
      <button onClick={() => props.fetchUsers()}>Get Users</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // userRequestSend: () => dispatch(userRequestSend()),
    // userRequestSuccess: (e) => dispatch(userRequestSuccess(e)),
    // userRequestFailure: (e) => dispatch(userRequestFailure(e)),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(useContainer)
