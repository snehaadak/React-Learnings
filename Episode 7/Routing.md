## React Router Library


# Topics Covered

- What is `Routing`?
- What is `routing configuration`?
- How is Router `Error` handled?
- What are `Children Routes`?
- Difference between `a href` and `Link`?
- What are two `types of routing`?
- What is `Single Page Applications (SPA)`?




# Answers


## What is `Routing`?
A: React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes, providing a seamless user experience by mapping various URLs to components.
    
    Install router via `npm install react-router-dom` and then 
    importing as ` import {createBrowseRouter, Routerprovide} from react-router-dom`



## What is `routing Configuration`?
A: We create a routing configuration in our very base App.js page. creating router configuration means some information that will tell what will happen on that specific browser route (path). We create a routing configuration as below where createBrowserRouter takes in the list of paths that we are going to include in out project:
    ```
        const appRouter = createBrowserRouter([]);
    ```

previously we were rending our component into the root now we weill be needing to render our routing element 
    ```
        root.render(<RouterProvider router={appRouter}/>);
    ```


## How is Router `Error` handled?
A: to handle the error occuring while routing via misspelled urls react it self handles it by showing a page of error. we can also modify the Error page ourselves by mentioning it as below where the error component uses the hook provided us by router library. with the help of this hook we can actually fetch the type of error and status of it.
    ```
        [ path : "/",
        element: <Applayout/>,
        errorElement: <Error/> ]   
    ```



## What are `Children Routes`?
A: We see the webpages where the header is intact to the page without it being changed when were are routed from one page to another. In this case we add the routing paths as the children to our header. for which we use the keyword as `<Outlet/>` while rendering. This outlet keyword is like a tunnel where in it takes in the child component to be rendered based on the url.
    ```
        const Applayout = () => { 
        return(
            <div className ="app">
                <HeaderComp/>
                <Outlet/> 
                <Footer/>
            </div>
        )}
        const appRouter = createBrowserRouter([
            {
                path : "/",
                element: <Applayout/>,
                errorElement: <Error/>,
                children: [
                    {
                        path: "/",
                        element: <BodyComp/>
                    },
                    {
                        path: "/about",
                        element: <AboutUs/>
                    },]}]);
    ``` 


## Difference between `a href` and `Link`?
A: `a href` is provided by the HTML we can use it in react as well but the problem is a href refreshes the whole page again as new. where as `Link` just the loads our component onto the page. This makes our react time less compared to the a href.
    Syntax: import {Link} from "react-router-dom"
            <Link to="/comnponentName">Comp</Link>



## What are two `types of routing`?
A: There are two types of routing `Client Side Routing` and `Server Side Routing`
In `Server Side Routing` the at every routing instance a request is made on the server side to fetch the new page. which is a time consuming and old method
In `Client Side Routing` on the very first run our whole app is onto the system then on every route it just navigates throught and loads the component. Hence it is also know as a `Single Page Application (SPA)`


## What is `Single Page Applications (SPA)`?
A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.