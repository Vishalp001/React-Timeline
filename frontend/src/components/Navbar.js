import React from 'react'
import { Link } from "react-router-dom"
import '../App.css';

function Navbar() {
    return (
        <div className="add-data">
            <Link to="/create">Create</Link>
        </div>
    )
}
export default Navbar