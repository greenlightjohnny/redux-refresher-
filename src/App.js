import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import logo from "./logo.svg"
import CakeDContainer from "./components/CakeContainers"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeDContainer />
      </div>
    </Provider>
  )
}

export default App
