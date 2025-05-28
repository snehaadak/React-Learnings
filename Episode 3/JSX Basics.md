## Basic JSX, React Elements & Components

# Topics Covered

- What are `Scripts`?
- How to `create`and `run` scripts?
- What is `React-Element`, and how it works in background?
- What is `JSX`? 
- What is `Babel` and how it works in background?
- Few common tags in `HTML` and `JSX`.
- What are react `components` and what are its `types`?
- What are `functional components`?
- What is `Component Composition`?



# Answers: 

## What are `Scripts`?
A: Scripts make our way easy to work on terminal. we don't need to keep using the whole npm and npx commands on terminal.


## How to `create`and `run` scripts?
A: For creating the scripts we mention them in package.json under scripts section and create and run scripts using below syntaxes:
 --- Creating Script ---
 "script_name": "parcel index.html"
 "script_name": "parcel build index.html"

 --- Running Script ---
 npm run script_name


## What is `React-Element`, and how it works in background?
A: React Elements are equivalent to the DOM elements or HTML elements. but we can't say they are directly the HTML elements. when we do `React.createElement` we actually create a React eElement which is a JS object. This JS object is further converted to the actual HTML element when we use `render`. So basically we create a separate root inside react using JS(document.getElementById) which is further rendered to HTML element.

React.createElement => creates and react element i.e. a JS object => This JS object is created to HTMLelment using render


## What is `JSX`? 
A: JSX is a syntax type which could be used to make the developer life easy. JSX is not any pure or valid JS syntax. On high level our JS engines and browsers cannot understand our JSX directly. So in backend this JSX needs to be transpiled (converted) to something JS engines can understand. which is done with the help of parcel


## What is `Babel` and how it works in background?
A: Babel is a package that `transpiles` (converts) JSX to our normal ReactElement

JSX => Transpiled to React.createElement => JS object => HTML Element


## Few common tags in `HTML` and `JSX`.
A: 
    - Self-Closing Tags: In JSX, all tags must be explicitly closed, even self-closing ones
        <img src="image.jpg" alt="Description" />
        <input type="text" />

    - Attribute Naming (camelCase): JSX uses camelCase for attributes to avoid conflicts with JavaScript reserved words.
        class -> className
        for -> htmlFor
        onclick -> onClick
        tabindex -> tabIndex

    - JavaScript Expressions in Curly Braces: JSX allows embedding JavaScript expressions inside curly braces.
        const name = 'John';
        <h1>Hello, {name}!</h1>

    - Event Handling: JSX uses camelCase for event handlers and passes functions directly.
        <button onClick={handleClick}>Click Me</button>
    
    - Inline Styles as Objects: Inline styles in JSX are passed as objects with camelCase properties.
        const style = { backgroundColor: 'blue', fontSize: '16px' };
        <div style={style}>Styled Text</div>


## What are react `components` and what are its `types`?
A: Everything is a component in React. For e.g. in a webpage we have a button, header,footer, card, heading, title, input box, search bar, etc. we can say all of this things are components. There are two types of components: 1. Class based Components. 2. Functional Components.


## What are `functional components`?
A: A react functional component is a function that returns a piece of JSX code or returns a React element. Every functional component should be created starting with capital letter. 


## What is `Component Composition`?
A: Rendering one or more components inside one another is known as Component Composition. Which can be easily done by <RenderingComponent/>

