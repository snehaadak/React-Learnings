## React Hooks: UseEffect & UseState in detail


# Topics Covered

- What is a `monolith` architecture?
- What is `microservices` architecture?
- What is `difference` between nonolith and microservice architecture?
- What is `useEffect`? 
- What is `Shimmer UI`?
- What is `Async Await`?
- What is `Optional Chaining`?
- What is `Conditional Rendering`?
- What is `CORS`?
- Can we use the normal javascript variables instead of `State Variables`? If Not `Why`?
- If `State Varibales` are defined using `const` how is it getting updated?





# Answers:

## What is a `Monolith` architecture?
A: A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. It is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications.


## What is `Microservices` architecture?
A:is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.
    - Benefits of Microservices:
    - Flexible Scaling
    - Easy Deployment
    - Technological Freedom
    - Reusable Code
    - Resilience


## What is `difference` between nonolith and microservice architecture?
A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.


## What is `useEffect`? 
A: There are 2 approches how the data is rendered.(1)As soon as page loads we make API call and we render the data. until the rendering takes place the page is complete blank. This is a bad UX practise. (2) As soon as the page loads we render the basic outline(Shimmer UI) or something on the page instead of keeping it blank then we make the API call and then the new data is rerendered. This approach gives a better UX.`By using this Hook, we tell React that your component needs to do something after render`. 
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.
    ```
    useEffect(() => {}, [])
    ```
The `() => {}` is callback function and `[]` is called a empty dependency array.
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.

    ```
        useEffect(() => {
        setCurrentState("true");
        }, [currentState])
    ```
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```


## What is `Shimmer UI`?
A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.


## What is `Async Await`?
A:`Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example:
    ```
        // async function getRestaurant to fetch Swiggy API data
            async function getRestaurants() {
            const data = await fetch(
            "Swiggy_API_URL"
            );
            const json = await data.json();
        // we get the Swiggy API data in json format
            console.log(json);
            }
    ```


## What is `Optional Chaining`?
A:`Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.


## What is `Conditional Rendering`?
A: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:
    ```
        // Using Ternary operator as a shorthand way or writing an if-else statement
            {isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
        // Using an if…else Statement
            {
                (if (isLoggedIn) {
                return <UserGreeting />;
            }else {
                return <GuestGreeting />;
            })
            }
        // Using Logical &&
            {isLoggedIn && <button>Logout</button>}
    ```


## Can we use the normal javascript variables instead of `State Variables`? If Not `Why`?
A: Normal javascript variables do not help with updating or refreshing our UI. Local state variables are responsible for this action of updating the Virtual DOMs and then the actual DOM.


## If `State Varibales` are defined using `const` how is it getting updated?
A: Every time we render a component it means a function is called newly. on every render cycle we dont actually update the value of state varible but we give the state varible a new default value via setState variable.

