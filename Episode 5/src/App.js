import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import Footer from "./components/Footer";


const Applayout = () => { 
    return(
        <div className ="app">
            <HeaderComp/>
            <BodyComp/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)

