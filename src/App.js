import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import logo from "./logo.svg"
import CakeContainer from "./components/CakeContainers"
import "./App.css"
import HooksCakeContainer from "./components/HooksCakeContainer"

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  )
}

export default App
