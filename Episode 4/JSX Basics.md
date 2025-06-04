## Buiding an App (Food ordering App)


# Topics Covered

- Steps to consider while Building an application?
- Structure & Components of our Application.
- What are `Props`(Properties)?
- What is `Config Driven UI`? 
- Destructuring Code with Optional Chaining?
- Why do we need `keys` in React?
- Why should we provide `key` property to the child elements - When creating a list in the UI from an array with JSX ?



# Answers: 

## Steps to consider while Building an application?
A:  1. Planning & Requirements
    2. Design
    3. Setup & Architecture
    4. Development
    5. Testing
    6. Deployment
    7. Maintenance & Updates


## Structure & Components of our Application
A: Components of Our Food-Order App
    * Header
        -Logo
        - Nav Items
    * Body
        - Search Bar
        - Items available Container
        - Restaurant-Container
            - Restaurant-Card
            - Img
            - Name of Res, Star Rating, cuisine, delivery time.
    * Footer
        - Copyright
        - Links
        - Address
        - Contact
 

## What are `Props`(Properties)?
A: Props is short form for properties. Props are the arguments that we pass to our components(functions). It is something that we can pass to the component. If we want to dynamically pass some data to some component we can do that through prop. 
```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```


## What is `Config Driven UI`?
A: A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure (data coming from backend), rather than being hardcoded. Controlling how data looks based on the data coming in. For eg. the offers column changing based on the days and cities.


## Destructuring Code with Optional Chaining?
A: Const {name, avgRating, cuisine, costForTwo, DeliveryTime} = resData?.info -----> Instead of using resdata.info.xyz everytime we clean our code with optional Chaining. this cleaning of code is known as destructiong


## Why do we need `keys` in React?
A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.
Example:    ```
            <li key={0}>1</li>
            <li key={1}>2</li>
            <li key={2}>3</li>
            ```

## Why should we provide `key` property to the child elements - When creating a list in the UI from an array with JSX ?
A: React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered. 


## Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.