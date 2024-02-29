import React from "react";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Top from "./components/Top";
import Business from "./components/Business";
import Bitcoin from "./components/Bitcoin";
import Technology from "./components/Technology";
import Agriculture from "./components/Agriculture";
import Sports from "./components/Sports";

function Myapp() {
    return (
        <>
                <Navbar />
                <Routes>
                    <Route exact path="/" Component={Top} />
                    <Route exact path="/business" Component={Business} />
                    <Route exact path="/bitcoin" Component={Bitcoin} />
                    <Route exact path="/technology" Component={Technology} />
                    <Route exact path="/agri" Component={Agriculture} />
                    <Route exact path="/sports" Component={Sports} />
                    <Route Component={Top} />

                </Routes>
        </>
    )
}

export default Myapp