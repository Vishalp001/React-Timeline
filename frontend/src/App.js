import React from "react"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Create from "./components/Create"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
      </Router>
    </div>
  )
}

export default App;
