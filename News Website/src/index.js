import React from "react";

import ReactDOM from "react-dom"

import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



import Myapp from "./App";

ReactDOM.render(
    <>
        <BrowserRouter>
            <Myapp/>
        </BrowserRouter>
    </>,
    document.getElementById("root")
)

