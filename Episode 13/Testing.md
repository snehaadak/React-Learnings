## Testing

# Topics Covered:

- Types of Testing? 
- Types of testing a developer can do for React Application?
- `React Testing Library`
- Setting up `Testing Libraries`




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


## What is `React Testing Library`?
A: It is the most standard library used in market for react testing. It is built on the top of `DOM Testing Library`. When we use createReactApp we  have react testing library already integrated to it. React testing library uses something known as `Jest` behind the scenes. Hence we require to install the react testing library as well as jest.


## Setting up `Testing Libraries`.
A: - Install React Testing Library: npm install -D @testing-library/react
   - Install jest: npm install -D jest
   - Install Babel dependencies: npm install --save-dev babel-jest @babel/core @babel/preset-env
   - Configure babel in file babel.config.js
   - Change parcel's behaviour to accomodate the babel's configuration for Jest. because as parcel has its own babel configuration for babel and hence for using jest we have our separate config which would be overridden. hence we need to change the parcel's behaviour as well. For this create .parcelrc and add the configuration to disable babel transpilation. 

 