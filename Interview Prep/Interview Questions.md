## Basic Questions

1. **What is React?**
    - React is a JavaScript library for building user interfaces, developed by Facebook. It allows you to build single-page applications with a component-based architecture.

2. **What are the main features of React?**
   - Component-based architecture
   - Virtual DOM
   - One-way data binding
   - JSX syntax
   - Hooks for managing state and side effects
   - Context API for global state management

3. **What are the advantages of using React?**
   - Efficient update and rendering with Virtual DOM
   - Component reusability
   - Unidirectional data flow
   - Rich ecosystem and community support
   - Strong tooling and developer experience

4. **What is JSX?**
 - JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets compiled into JavaScript code.

   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

5. **How does JSX transform into JavaScript?**
   - JSX is transformed into `React.createElement` calls by Babel. For example:

   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

   Transforms to:

   ```javascript
   const element = React.createElement('h1', null, 'Hello, world!');
   ```

6. **What are components in React?**
  - Components are the building blocks of a React application. They can be either class-based or functional and manage their own state and lifecycle.

7. **Explain the difference between functional and class components.**
   - **Class Components**: Have lifecycle methods, `this` context, and can manage state directly.
   - **Functional Components**: Are simpler and can use hooks for state and side effects. They don’t have lifecycle methods but can use `useEffect` to achieve similar behavior.

   ```jsx
   // Class Component
   class MyComponent extends React.Component {
     render() {
       return <h1>Hello, world!</h1>;
     }
   }

   // Functional Component
   function MyComponent() {
     return <h1>Hello, world!</h1>;
   }
   ```

8. **What is the virtual DOM, and how does it work?**
  - The Virtual DOM is an in-memory representation of the actual DOM. React uses it to optimize rendering by updating only the changed parts of the real DOM, which improves performance.

9. **How do you create a React application?**
  - Use the `create-react-app` command to bootstrap a new React project:

   ```bash
   npx create-react-app my-app
   ```

10. **What are props in React?**
    - Props (short for properties) are read-only attributes passed to components to configure or customize them.

    ```jsx
    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    // Usage
    <Greeting name="Alice" />
    ```

11. **How do you pass data between components?**
    - Pass data through props from a parent component to a child component.

    ```jsx
    function Parent() {
      return <Child message="Hello from Parent" />;
    }

    function Child(props) {
      return <h1>{props.message}</h1>;
    }
    ```

12. **What is state in React?**
    - State is an object that holds data that may change over time and affects how the component renders.

    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        return <h1>{this.state.count}</h1>;
      }
    }
    ```

13. **How do you manage state in a React component?**
    - Use the `useState` hook for functional components or `this.state` and `this.setState` in class components.

    ```jsx
    // Functional Component with useState
    function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>{count}</button>;
    }
    ```

14. **Explain the lifecycle methods in React.**
    - Lifecycle methods are hooks in class components that allow you to run code at different stages of a component's life:

    - `componentDidMount()`
    - `componentDidUpdate()`
    - `componentWillUnmount()`

    ```jsx
    class MyComponent extends React.Component {
      componentDidMount() {
        console.log('Component mounted');
      }

      componentWillUnmount() {
        console.log('Component will unmount');
      }

      render() {
        return <h1>Hello</h1>;
      }
    }
    ```

15. **What are hooks in React?**
    - Hooks are functions that let you use state and other React features in functional components. Examples include `useState`, `useEffect`, and `useContext`.

16. **Explain the useState hook.**
    - The `useState` hook allows you to add state to functional components.

    ```jsx
    function Counter() {
      const [count, setCount] = useState(0);
      return <button onClick={() => setCount(count + 1)}>{count}</button>;
    }
    ```

17. **Explain the useEffect hook.**
    - The `useEffect` hook allows you to perform side effects in functional components, such as data fetching or subscriptions.

    ```jsx
    useEffect(() => {
      // Code to run on component mount
      console.log('Component mounted');
      return () => {
        // Cleanup code
        console.log('Component unmounted');
      };
    }, []);
    ```

18. **What is the Context API?**
    - The Context API is a feature in React that allows you to pass data through the component tree without having to pass props manually at every level.

    ```jsx
    const MyContext = React.createContext();

    function MyProvider({ children }) {
      const value = "some value";
      return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
    }

    function MyComponent() {
      const value = useContext(MyContext);
      return <h1>{value}</h1>;
    }
    ```

19. **How do you use the Context API to manage state?**
    - Create a context, provide a value in a provider component, and consume the context in child components.

    ```jsx
    const ThemeContext = React.createContext('light');

    function App() {
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar() {
      return <ThemedButton />;
    }

    function ThemedButton() {
      const theme = useContext(ThemeContext);
      return <button>{theme}</button>;
    }
    ```

20. **What are refs in React?**
    - Refs provide a way to access DOM nodes or React elements directly.

    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

      componentDidMount() {
        this.myRef.current.focus();
      }

      render() {
        return <input ref={this.myRef} />;
      }
    }
    ```

21. **How do you create and use refs?**
    - Use `React.createRef()` in class components or `useRef()` in functional components.

    ```jsx
    // Functional Component
    function MyComponent() {
      const myRef = useRef(null);

      useEffect(() => {
        myRef.current.focus();
      }, []);

      return <input ref={myRef} />;
    }
    ```

22. **What is React Router?**
    - React Router is a library for handling routing in React applications, allowing you to create single-page applications with navigation.

23. **How do you perform navigation in a React application?**
    - Use the `react-router-dom` library to set up routes and navigation.

    ```jsx
    import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

    function App() {
      return (
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      );
    }
    ```

24. **What is the difference between controlled and uncontrolled components?**
    - **Controlled Components**: Form data is handled by the state within the component.
    - **Uncontrolled Components**: Form data is handled by the DOM.

    ```jsx
    // Controlled Component
    function ControlledForm() {
      const [value, setValue] = useState('');
      return <input value={value} onChange={e => setValue(e.target.value)} />;
    }

    // Uncontrolled Component
    function UncontrolledForm() {
      const inputRef = useRef(null);
      return <input ref={inputRef} />;
    }
    ```

25. **How do you handle forms in React?**
    - Use controlled components to handle form inputs, or use uncontrolled components with refs.

    ```jsx
    function Form() {
      const [inputValue, setInputValue] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted with: ' + inputValue);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }
    ```

26. **How do you handle events in React?**
    - Handle events by passing event handler functions as props.

    ```jsx
    function MyButton() {
      const handleClick = () => {
        alert('Button clicked!');
      };

      return <button onClick={handleClick}>Click me</button>;
    }
    ```

27. **What is a higher-order component (HOC)?**
    - A higher-order component is a function that takes a component and returns a new component with additional props or behavior.

    ```jsx
    function withExtraProps(WrappedComponent) {
      return function EnhancedComponent(props) {
        return <WrappedComponent extraProp="extra" {...props} />;
      };
    }
    ```

28. **What is the purpose of keys in React?**
    - Keys help React identify which items have changed, are added, or are removed, improving performance in lists.

29. **What is the significance of the key prop?**
    - The `key` prop is used to give elements a stable identity, which helps React efficiently update the UI.

    ```jsx
    function List({ items }) {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      );
    }
    ```

30. **How do you optimize performance in a React application?**
    - Use `React.memo` to memoize functional components
    - Use `shouldComponentUpdate` in class components
    - Implement lazy loading and code splitting
    - Avoid unnecessary re-renders

31. **What are React fragments?**
    - React fragments allow you to group multiple elements without adding extra nodes to the DOM.

    ```jsx
    function List() {
      return (
        <>
          <h1>Title</h1>
          <p>Content</p>
        </>
      );
    }
    ```

32. **How do you use React fragments?**
    - Use `<React.Fragment>` or the shorthand `<>` to wrap multiple elements.

    ```jsx
    function List() {
      return (
        <React.Fragment>
          <h1>Title</h1>
          <p>Content</p>
        </React.Fragment>
      );
    }
    ```

33. **What is the difference between React.Fragment and a regular HTML element?**
    - React.Fragment does not create an additional DOM node, while a regular HTML element does.

34. **What are error boundaries in React?**
    - Error boundaries are components that catch JavaScript errors in their child components, log those errors, and display a fallback UI.

    ```jsx
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError() {
        return { hasError: true };
      }

      componentDidCatch(error, info) {
        console.log(error, info);
      }

      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
      }
    }
    ```

35. **How do you implement an error boundary in React?**
    - Wrap your components with the error boundary component.

    ```jsx
    function App() {
      return (
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      );
    }
    ```

36. **What is PropTypes in React?**
    - PropTypes is a type-checking library for React props. It helps in validating the types of props passed to components.

    ```jsx
    import PropTypes from 'prop-types';

    function MyComponent({ name }) {
      return <h1>Hello, {name}</h1>;
    }

    MyComponent.propTypes = {
      name: PropTypes.string.isRequired,
    };
    ```

37. **How do you validate props using PropTypes?**
    - Define `propTypes` on the component to specify the expected types of props.

    ```jsx
    MyComponent.propTypes = {
      name: PropTypes.string.isRequired,
      age: PropTypes.number,
    };
    ```

38. **What is the difference between Props and State?**
    - **Props**: Passed from parent to child components, immutable.
    - **State**: Managed within a component, mutable and can change over time.

39. **How do you use default props in React?**
    - Define `defaultProps` on the component to set default values for props.

    ```jsx
    function MyComponent({ name }) {
      return <h1>Hello, {name}</h1>;
    }

    MyComponent.defaultProps = {
      name: 'Guest',
    };
    ```

40. **What are React Portals?**
    - Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

    ```jsx
    import ReactDOM from 'react-dom';

    function Modal({ children }) {
      return ReactDOM.createPortal(
        children,
        document.getElementById('modal-root')
      );
    }
    ```

41. **How do you create a portal in React?**
    - Use `ReactDOM.createPortal` to render children into a different part of the DOM.

    ```jsx
    function Modal({ children }) {
      return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        document.getElementById('modal-root')
      );
    }
    ```

42. **What is server-side rendering (SSR)?**
    - SSR is the process of rendering a React application on the server and sending the HTML to the client. It improves performance and SEO.

43. **How does SSR differ from client-side rendering?**
    - **SSR**: Renders content on the server before sending it to the client.
    - **CSR**: Renders content on the client side using JavaScript.

44. **What is the purpose of Redux in React?**
    - Redux is a state management library that helps manage and centralize application state in a predictable way.

45. **Explain the basic concepts of Redux.**
    - **Store**: Holds the state of the application.
    - **Actions**: Payloads of information that send data from the application to the Redux store.
    - **Reducers**: Functions that specify how the application's state changes in response to actions.
    - **Dispatch**: A method to send actions to the store.
    - **Selectors**: Functions to retrieve data from the store.

46. **How do you connect Redux with a React application?**
    - Use the `react-redux` library's `Provider` and `connect` functions.

    ```jsx
    import { Provider, connect } from 'react-redux';
    import { createStore } from 'redux';

    const store = createStore(reducer);

    function App() {
      return (
        <Provider store={store}>
          <MyComponent />
        </Provider>
      );
    }

    function mapStateToProps(state) {
      return { data: state.data };
    }

    const MyComponent = connect(mapStateToProps)(function ({ data }) {
      return <div>{data}</div>;
    });
    ```

47. **What is the difference between Redux and Context API?**
    - **Redux**: More complex, provides a predictable state container, supports middleware, and is more suited for large-scale applications.
    - **Context API**: Simpler, built into React, suitable for small to medium-sized applications or specific use cases.

48. **What is React.memo?**
    - `React.memo` is a higher-order component that memoizes functional components to prevent unnecessary re-renders.

    ```jsx
    const MyComponent = React.memo(function ({ value }) {
      return <div>{value}</div>;
    });
    ```

49. **How do you use React.memo to optimize performance?**
    - Wrap a functional component with `React.memo` to avoid re-rendering when props haven’t changed.

    ```jsx
    const MyComponent = React.memo(function ({ value }) {
      return <div>{value}</div>;
    });
    ```

50. **Explain the useCallback hook.**
    - `useCallback` returns a memoized callback function that only changes if one of the dependencies has changed.

    ```jsx
    function MyComponent() {
      const [count, setCount] = useState(0);

      const handleClick = useCallback(() => {
        setCount(count + 1);
      }, [count]);

      return <button onClick={handleClick}>{count}</button>;
    }
    ```

