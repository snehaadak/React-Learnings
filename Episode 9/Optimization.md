## Optimizing our App

# Topics Covered

- What is `Single Responsibility Principle`?
- What are `Custom Hooks`?
- What is `App Chunking` / `Code Splitting`/ `Dynamic Bundling`/ `Lazy loading`/ ` On demand Loading`/ `Dyanamic Import`?
- How to bundle our coad into separate js ? 





# Answers

## What is `Single Responsibility Principle`?
A: If we have any function, a class or any kind of single identity of our code. It should have a single responsibilty. For e.g. we have different components where body is responsible for just rendering the body, resturant cards were responsible for rendering the restuarant card data, etc. It is a good way to put our code in modular fashion. `Modularity` means we break our whole big code into small modules so that our code becomes more maintainable and testable. Testing becomes easy because when we know we are getting error in fetching then we know which module to access and cvheck why we were getting the fetching error.



## What are `Custom Hooks`?
A: Just as we know hooks are already provided functions by react. we can also create our own hooks and import them and use them. It is suggested to start the customized hooks with suffix `use`



## What is `App Chunking` / `Code Splitting`/ `Dynamic Bundling`/ `Lazy loading`/ `Ondemand Loading`/ `Dyanamic Import`?
A: As we know that Bundler does the work of bundling i.e. it merges our whole set of files containing different components and everything into one. when we launch our app on browser and try to see the bundled files in network section we find that our minified code is all in one JS file. This is not a good practise because for the bigger applications the file size might increase alot and which would result in poor perfomance of our app. Hence we bundle our application based on the UI design logic together into smaller JS files `to avoid bloating of our App which degrades the perfomance` . This process is know as App Chunking or known by different names as Code Splitting, Dynamic Bundling, Lazy loading, Ondemand Loading, Dyanamic Import.



## How to bundle our code into separate js? 
A: We dont do import of this components as normal import but instead we use a already existing function called `lazy`. For eg: Suppose our app has 2 functionalities as Page1 and Page2. they themselves have alot of components and we want to chunk each functionality separately we would.
    ```
        import React {Lazy} from "react"
        const Page1 = lazy(()=> import("./components/Page1"))
        const Page1 = lazy(()=> import("./components/Page2"))
    ```