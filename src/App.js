import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Dashboard from "./view/Dashboard"
import About from "./view/About"
import "./assets/css/reset.css"
function App() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
            <Route path="/about" component={About} />
        </BrowserRouter>
    )
}
export default App