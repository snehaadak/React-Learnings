/* Using the installed react package inside the code by using key word IMPORT*/

import React from "react";
import ReactDOM from "react-dom/client";


const heading2 = React.createElement(
    "h2",
    {id: "heading"},
    "Hello, from React!");
console.log(heading2); 
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(heading2)


const parent = React.createElement("div", {id: "parent" },
    React.createElement("div", {id:"child"} ,
        [React.createElement("h1",{},"I'm an h1 Tag"),
         React.createElement("h2",{},"I'm an h2 Tag")  
        ]
    )
);
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(parent);