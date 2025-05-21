
/* How to enter the Javascript object(heading) 
    converting it to the HTML element when used render and 
    pushing it into the DOM */

const heading2 = React.createElement(
    "h2",
    {id: "heading"},
    "Hello, from React!");
console.log(heading2); 
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(heading2)


/* Creating the nested HTML element 
*   <div id="parent">
*       <div id="child"
*           <h1>I'm an h1 Tag</h1>
*           <h2>I'm an h2 Tag</h2>  ---------------for creating siblings in React we use array
*       </div>
*   </div>
*/

const parent = React.createElement("div", {id: "parent" },
    React.createElement("div", {id:"child"} ,
        [React.createElement("h1",{},"I'm an h1 Tag"),
         React.createElement("h2",{},"I'm an h2 Tag")  
        ]
    )
);
const root3 = ReactDOM.createRoot(document.getElementById("root"))
root3.render(parent);