import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Dashboard from "./view/Dashboard"
import About from "./view/About"
import "./assets/css/reset.css"
function App() {
    return (
        <HashRouter >
            <Route path="/" exact component={Dashboard} />
            <Route path="/about" component={About} />
        </HashRouter>
    )
}
export default App