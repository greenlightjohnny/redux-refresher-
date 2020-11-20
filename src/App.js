import React from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import logo from "./logo.svg"
import CakeContainer from "./components/CakeContainers"
import "./App.css"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamsContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import ItemContainer from "./components/ItemContainer"
import UserContainer from "./components/useContainer"

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />

        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App
