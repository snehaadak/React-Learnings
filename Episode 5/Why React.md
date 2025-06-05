## All about Reacts backend working (Reaconciliation), React Hooks 


# Topics Covered

- Why do we need `React` or any other frameworks and Libraries, and why specifically `React`?
- Difference between `Virtual DOM` and `Real DOM`?
- What is `Reconciliation Algorithm (React Fibre)`?
- What is `diff algorithm`?
- What are `import/ export` and its `types`?
- What are `React Hooks`?
- What is `State Variable`?




# Answers: 


## Why do we need `React` or any other frameworks and Libraries, and why specifically `React`?
A: We can directly use HTML, CSS & Javascript to build applications. Yet we use libraries and frameworks beacuse they our developer experience easy. We have pre built set of codes that we can direct use instead of writing the whole concept for it.
React is responsible for faster DOM Manipulation, efficient Dom Manipulation because it uses diff alogorithm, reconcilation.


## Difference between `Virtual DOM` and `Real DOM`?
A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.

- `Virtual DOM`
  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
  - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

| `Real DOM`                                                       | `Virtual DOM`                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| DOM manipulation is very expensive                               | DOM manipulation is very easy                            |
| There is too much memory wastage                                 | No memory wastage                                        |
| It updates Slow                                                  | It updates fast                                          |
| It can directly update HTML                                      | It can’t update HTML directly                            |
| Creates a new DOM if the element updates.                        | Update the JSX if the element update                     |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application                         | It is only a virtual representation of the DOM           |



## What is `Reconciliation Algorithm (React Fibre)`?
A: Keeping track of an actual DOM (HTMLelements) and rendering changes to it is not easy. Hence React uses something called as `Virtual DOM`(representation of an actual DOM) which is nothing else but a javascript Object which makes the processing on virtual DOM much easier. So basically ```When there is a request for change in our UI. React compares the previous virtual DOM and the updated Virtual DOM and refreshes the actual DOM with the updated Virtual DOM``` This is known as reconciliation.

                                                OR

React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.



## What is `diff algorithm`?
A: Reconciliation uses diff algorithm i.e. it finds out the difference between two virtual DOMs i.e. previous virtual DOM and the updated virtual DOM.


## What are `import/ export` and its `types`?
A: To write a clean set of code for our application we place different set of codes like different components, different features or as per our project needs into different files and folders. so to use this files into each other we export these files first from the main code file and use import in the file where we have to use it. 
There are two types of import and export i.e. -`Defualt`, `Named` and `* as export`.

- In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export and we can use any name we like.
Syntax to export default: In `Default export`, the component is exported from MyComponent.js file like
        const MyComponent = () => {}
        export default MyComponent;

Syntax to import default: the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
        import MyComponent from "./MyComponent";


- In `Named export`, one can have multiple named exports per file. Then import the specific exports they want surrounded in `{}` braces. The name of imported module has to be the same as the name of the exported module.
Syntax to export Named: In `Named export`, the component is exported from MyComponent.js file like
        export const MyComponent = () => {}
        export const MyComponent2 = () => {}

Syntax to import Named: the component is imported from MyComponent.js file like: here we must use `{}` in MyComponent.

        // ex. importing a single named export
        import { MyComponent } from "./MyComponent";

        // ex. importing multiple named exports
        import { MyComponent, MyComponent2 } from "./MyComponent";

        // ex. giving a named import a different name by using "as":
        import { MyComponent2 as MyNewComponent } from "./MyComponent";


- In `* as export`, it is used to import the whole module as a component and access the components inside the module.
Syntax to export * as export: In `* as export`, the component is exported from MyComponent.js file like:
        export const MyComponent = () => {}
        export const MyComponent2 = () => {}
        export const MyComponent3 = () => {}

Syntax to import * as export: the component is imported from MyComponent.js file like:
        import * as MainComponents from "./MyComponent";

Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

We can use `Named export` and `Default export` together. So you should export like:
Syntax to export:
        export const MyComponent2 = () => {}
        const MyComponent = () => {}
        export default MyComponent;

Syntax to import:
        import MyComponent, {MyComponent2} from "./MyComponent";



## What are `React Hooks`?
A: It is a normal pre built javascript function/ utitlity given to us by react. which could make some or the other tasks easy for us. two very imp hooks: 
useState(): used to create a State Variable, import from React as a named import i.e. import {useState} from react 
useEffect()



## What is `State Variable`?
A: It is called a state variable because it maintains the state of the component. This super powerful variable helps us keep the sync between our UI and data layer. Whenever a state variable updates react will re-render our component.

-   syntax: `const [variableName, setVaribaleName] = useState(default values of variableName)`;
            where setVaribaleName is the function or paraameter we can use to change the actual VariableName. we can only change the variable name through the other parameter only. 
            inshort we pass in something to the setVariableName(xyz) that needs to be updated for variableName.

-    Eg: const [resList, setresList] = useState([...]);
        const filteredList = resList.filter((res)=>res.info.avgRating > 4.3);
                     setresList(filteredList);>

            Here we have a normal variable filteredList which is carrying out the comparison for our already assigned resList and further we are just passing the filterdList (changed values) to setresList. we passin the filteredList to setresList because we want our normal resList to be updated.