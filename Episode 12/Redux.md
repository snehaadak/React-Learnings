## Redux


# Topics Covered:

- What is `Redux`?
- Redux `Architecture`
- Why do we `use` Redux?
- Steps to use redux in project?
- How to optimize our App while using a `selector`?
- Difference between `reducer` and `reducers`?




# Answers:


## What is `Redux`?
A: It is a Library used to manage state. Redux is like a central storage room for your app’s data, so every component can get the latest info without passing props around like a chain letter.
Instead of each component keeping its own copy of data (and getting out of sync), Redux keeps one single source of truth — the store.

    Eg: Imagine an online cart:
        - Without Redux: Each page keeps its own cart data → you add an item on the product page, but the header’s cart count doesn’t update until refresh.
        - With Redux: The cart data lives in the store → when you add an item, the store updates, and all subscribed components (cart icon, cart page, checkout) instantly see the change.
    
In short: Redux = `a global state manager for predictable, synchronized UI updates`.



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
A: Redux makes sure all your components are always on the same page, with no unnecessary data-passing or outdated info.
    - Redux is like a central storage room for your app’s data, so every component can get the latest info without passing props around like a chain letter.
    - Instead of each component keeping its own copy of data (and getting out of sync), Redux keeps one single source of truth — the store.
        



## Steps to use redux in project?
A:  - Install @reduxjs/toolkit and react redux
    - Build our store 
    - connect our store to app
    - create the slice
    - dispatch action
    - read the data using Selector 

1) Build our Store: 
    - we create store in `utilities` of our project
    - we import `configureStore` from reduxjs/toolkit
    - const reduxstore = configurestore({slices.....}) and export the reduxstore

2) Connect the store to our App:
    - we import the provider to our root file from redux-react. we will use this provider to provide(connect) our app to our store.
    - we will wrap our whole application in between the provider tags where our store would be passed in as a prop.
    - <Provider store={reduxstore}>
        <div className="app">
            <HeaderComp/>
            <BodyComp/>
            <FooterComp/>   
        </div>

3) Create a slice: 
    - We will create all the slices under utilities
    - we use a function called `createSlice` to create whater slice we want to. That takes in the configuration we will need to create a slice. we import this createSlice from reduxjs/toolkit
    - const Slicefunctioname = createSlice({
        name: name of that slice,
        initialState: {what will be the initial state of our slice},
        reducer:{action mapping to function....}
    })
    - we will write the reducer function corresponding to each action. we can say actions are like the API to connect to our store.
    - reducer : {
        `actionName :  (state,action) => {reducer function} ` 
    }
    reducer function mapped to it this is the function that actually modifies our slices. It gets access to our state and actions as a parameter.
    - we export two things from our slice i.e. our actions and our reducers where we will export reducer as default export and actions as named imports
        - const cartSlice = createSlice({
            name: cart,
            initialState: {items: []},
            reducer: {          //this is the reducer of our slice
                addItem : (state,action) => { //directly modifying the exisiting state
                    state.items.push(action.payload);       
                },
                removeItem : (state) => {
                    state.item.pop();
                },
                clearCart: (state) => {
                    state.items.length = 0;
                }
            }
        })
        export default cartSlice.reducer;
        export const {addItem, removeItem, clearCart} = cartSLice.actions;
    - `Add` this slice to store that we created in step 1
        import cartReducer from ./cartSlice
        const reduxstore = configurestore({
            reducer: {          //this is the whole big reducer of our entire cart
                cart: cartReducer 
            }
        })

4) Dispatch the action: 
    - We use `useDispatch` hook import from react-redux library
    - useDispatch takes in the action as the parameter.
    - whatever we pass in to the action of this dispatch would got to the reducer function action and inside the payload
        const dispatch = useDispatch(addItem)
        <button className="button" 
            onClick={()=>{
                //dispatch an actions
                dispatch(addItem(item))
                console.log(item)
                }}> Add +
        </button> 



5) creating a selector to reflect this data on our UI:
    - We use `useSelector` hook import from react-redux library
    - this hook will give us the access to our store i.e `we are subscribing to our store using selector`
    - we need to tell it which part of the store we need the access to or which specific portion we need to subscribe to,for our project that would be items
        const cartItems = useSelector((store)=>store.cart.items) which gives us access to items



## How to optimize our App while using a `selector`?
A: instead of subscribing to the whole store and then extracting the data that we require. instead subscribe to the specific data that we need. Because when we subscribe to the store when there are updates to the store to some other slice we wont be needing our slices to reload.Hence we subscribe to the very specific small portion of the store.



## Difference between `reducer` and `reducers`?
A: when we create the store it uses `reducer` which is the outside big reducer and it consists of `reducers` of the slices. but while exporting the reducers of the slice we export the `slice.reducer`