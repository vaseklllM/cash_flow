import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/Containers"
import { Provider } from "react-redux"
import rootReducer from "./store"
import { createStore } from "redux"

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
