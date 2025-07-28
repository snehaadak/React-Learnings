## Higher Order Components

# Topics Covered

- What are `Higher Order Components`?
- 
- 
- 
- 
- 
- 


# Answers

## What are `Higher Order Components`?
A: It is a function that takes in a component and returns a component i.e it takes a component as input and then enhances that component (adds in some features) to that component and returns back. It acts as a enhancer.
    ```
        const HOC = (Comp) =>{
            return () => {
                <>
                    <></>
                </>
            }
        }
    ```
where HOC is a higher Order Component which takes in Comp as an input and returns some other component