## Class Based Components

# Topics Covered

- What is the `Class Based Component`?
- How to use `props`? Why do we need to use `super(props)`?
- Creating `State Variables`
- What is the `LifeCycle` of react class based component?
- What is the use of `componentDidMount()` method?
- How does `Lifecycle` works when we have `two or multiple children`?



# Answers

## What is `Class Based Components`?
A: Just as we know a functional component is nothing else but our normal javascript function that returns a piece of JSX. Similarly, a class based component is our normal javascript class that would return a piecve of JSX. 
Syntax:     import react from "react"
            class ClassName extends React.Component {
                render(){
                    return (
                        <div>
                            <h1></h1>
                            <p></p>
                        </div>
                    )
                }
            }

where we create the class based component with the keyword class, ClassName is the name which we give it to it extends React.Component means our class inherits the properties of already existing React.Component provided us by React. render() is the method of class that is used to render our JSX to HTML.



## How to use `props`? Why do we need to use `super(props)`?
A: In functional components we use props as below
    ```
        const Comp = (props) => {
            return (
                <h1>{props.content}</h1>
            )
        }

        <Comp content="something"/>
    ```

In Class Based Component: We have a constructor that will receive a props
    ```
        construtor(props){
            super(props)
        }
        render(){
            return (
                <h1>{this.props.content}</h1>
            )
        }

        <Comp content={"something"}/>
    ```

Whenever we create a instance of a class a constructor is called this extracts all the props and we can use them anywhere inside our component with suffix this.props



## Creating `State Variables`.
A: In Functional Component: We use useState() Hook
    ```
        const [state1, setstate1] = useState("Initial State")
        const [state2, setstate2] = useState("Other State varible")
    ```

    In Class Based compoent: We create the state inside of constructor
    ```
        construtor(){
            this.state = {
                    state1: Initial State,
                    state2: Other State varible
            }
        }
---------to update the value we have this.setState that takes in the object------------- 
        return(
            this.setState({
                    state1: update the value
            })
        )
    ```


## What is the `LifeCycle` of react class based component?/ How a component is `Mounted` on a webpage?
A: considering below example:
    ```
    class ParentClass extends React.Component {
        constructor(props) {
            super(props);
            console.log("Parent Constructor");
        }

        componentDidMount(){
            console.log("Parent DidMount");
        }

        render(){
            return (
                console.log("Parent Render")
                <ChildClass/>
            )
    }

    class ChildClass extends React.Component {
        constructor(props) {
            super(props);
            console.log("Child Constructor");
        }

        componentDidMount(){
            console.log("Parent DidMount");
        }

        render(){
            return (
                console.log("Child Render")
                <ChildClass/>
            )
    }
    ```

    In case where the method `componentDidMount is not present` the basic life cycle is such a way that when we are loading the Parent class component line by line the very first the parent constructor is called, ahead then the parent's render method is triggered and it starts rendering the elements line by line at the occurance of the Child class component immediatedly the child class component's constructor is triggered and then the child's render method is called.

    In case where the  `componentDidMount is present`. in general the component didmount is triggered in the very last. so in the case if we have componentDidMount in both parent and child the lifecylce is as follows: 
        Parent Constructor --> Parent Render --> Child Constructor --> Child Render --> Child DidMount --> Parent DidMount



## What is the use of `componentDidMount()` method?
A: `compentDidMount()` is used to make API calls. We do API calls inside this because we render the basic UI first and then make the API call to fetch the data to give the better UX. It is similar to the useEffect() hook.



## How does `Lifecycle` works when we have `two or multiple children`?
A: The react lifecycle works in two phases `render` and `commit`. 
In render phase the constructor is called first and then the render method is called. 
In commit phase the actual DOM manipulation takes place and then the final rendering that is componentDidMount
React focuses on the optimization because the DOM manipulation is very expensive. As soon as react gets to know that there are more than one child present it batches its rendering phase together and commit phase together for optimization. hence because of that the lifecycle is as below:

 Parent Constructor --> Parent Render --> Child1 Constructor --> Child1 Render --> Child2 Constructor --> Child2 Render --> Child3 Constructor --> Child3 Render --> Child1 DidMount --> Child2 DidMount --> Child3 DidMount --> Parent DidMount

 this batches the rendering of Child1, Child2, Child3 together and there didMount together.




