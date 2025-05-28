import React from "react";
import ReactDOM from "react-dom/client";

//****** Code using Core React *******// 

// React.createElement => creates and react element i.e. a JS object => This JS object is created to HTMLelment using render

const heading = React.createElement("h1",
    {id: "heading"}, 
    "Hello, from React!")
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(heading)


//****** Code Using JSX *******//

// JSX => Transpiled to React.createElement => JS object => HTML Element

const heading2 = <h1 id="heading2">Hello, from JSX!</h1>
const root3 = ReactDOM.createRoot(document.getElementById("root3"))
root3.render(heading2)


const reactElement = (
    <h3>Rendering React Element Inside of component</h3>
)


//****** Functional Components *******//

//normal function way
const ChildComponent = function (){
    return(
    <h3>Hello, from inside the  Component!</h3>
)};

//arrow function way, component composition, rendering element inside component
const HeadingComponent = () => (
    <div>
        <h1>Understanding Functional Components</h1>
        <ChildComponent/>
        {reactElement} 
    </div> 
)
     
const root4 = ReactDOM.createRoot(document.getElementById("root4"))
root4.render(<HeadingComponent/>);   //syntax for rendering Functional Component
