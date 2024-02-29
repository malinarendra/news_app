import React from "react";

import { NavLink } from "react-router-dom";

import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">News</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Top Headlines</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/business">Business</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bitcoin">Bitcoin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/technology">Technology</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/agri">Agriculture</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sports">Sports</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <a id="up" href="#navbar">^</a>
        </>
    )
}

export default Navbar;