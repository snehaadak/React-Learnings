## Testing

# Topics Covered:

- Types of Testing? 
- Types of testing a developer can do for React Application?




# Answers:


## Types of Testing? 
A: Manual 



## Types of testing a developer can do for React Application?
A: Unit Testing, Integration Testing, End to End Testing (E2E)

- `Unit Testing`: To test your react component in isolation
    for eg: If i want to test just the Header component of the app i will just render and test if it rendered properly or not. That is testing one single unit at a time i.e Header.

- `Integration Testing`: Verifying that multiple units or components within an application work correctly together as a cohesive whole. i.e checking the integration of react components with each other. how the chain of one component works upto the end.
    for eg: we can consider the working of event handlers or event listeners how they work and effect the further rendering porocess is known as integration testing.How this components are connected to eachother.

- `End to End Testing`: Testing a react application from the time the user lands on the page upto the time it leaves our page and testing all te flows that user might use during whole process.
    E2E testing requires tools like Selenium, Cypress, Puppeteer