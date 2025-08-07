## Redux


# Topics Covered:

- What is `Redux`?
- Redux `Architecture`
- Why do we `use` Redux?
- Steps to use redux in project?






# Answers:

## What is `Redux`?
A: It is a Library used to manage state


## Redux `Architecture` 
A:  The data inside the redux is stored inside the whole javascript object known as `redux store`. just do this javscript object is not flooded with all the data we separate this data into logical pieces known as `slices`. for e.g: we can create a separate slice that handles our webpage's cart, we can have other slice to keep track of user login details, and so on.
How data is `written` to a slice? 
    for Eg: if we have a cart slice and we want to update the data to it once we click on the add to cart button on our page the flow is as follows
    (1) When we click the ADD button it `dispatches an Action`
    (2) Once the action is dispatched it `calls the Function`.
    (3) and these function is used to modify the slice. for our eg it would be the cart slice. These called function is known as a `Reducer Function`. 

How to `read` the data from the slice or redux store to our UI?
    (1) for these we use something called as `selector` to read data from our redux store and this selector will modify our react component on UI.
    (2) when we use the selector these phenomenon is known as `subscribing to the store` i.e our header component is subscribed to the store. which means it is in sync with our redux store. when the data in store changes the react component updates automatically.


## Why do we `use` Redux?
A: 


## Steps to use redux in project?
    - Install @redux/toolkit and react redux
    - Build our store
    - connect our store to app
    - create the slice
    - dispatch action
    - read the data using Selector 