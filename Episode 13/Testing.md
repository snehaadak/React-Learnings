## Testing

# Topics Covered:

- Types of Testing? 
- Types of testing a developer can do for React Application?
- `React Testing Library`
- Setting up `Testing Libraries`.
- What is `jsdom test environment`?
- How to run our test cases?
- Where to write testcases?
- How to test a UI component?
- How the UI Component testing works backend?




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
   - Create a jest configuration by `npx jest --init` this is the old method to do it the new one is `npx create-jest@latest`
   - Install jsdom library separately if you are using jest version >28 by `npm install --save-dev jest-environment-jsdom`
   - we cannot directly test thte jsx code with our jest for that we will install a new library `@babel/preset-react` and include @babel/preset-react inside our babel config and give the runtime to be automatic (if we dont give automatic runtime this will take default or any random values and throw errors)
   - Install one more library `@testing-library/jest-dom` which is installed for using `toBeInTheDocument`


## What is `jsdom test environment`?
A: When we run the test cases there is no server running there is no browser where this test cases are actually tested i.e. testcases don't actually run on any browser. Hence they will need an environment to run (runtime) where this testing code will be executed. This is where jsdom is used. It is a library which parses and interacts with assembeled HTML just like a browser. Hence we can say `jsdom` is the testing environment that is like a browser which provides us the features of the browser without the server running.


## How to run our test cases?
A: To run our created test cases do `npm run test`. we can do this in very start when we do it right after setup we get message "No tests found" hence we can conclude that our jest library was setup perfectly.


## Where to write testcases?
A: We write the testcases inside files of the folder with name `__tests__` anywhere in our folder structure. Jest tracks all the files that are present inside of this folder. All the files created with extension .js or .ts they are considered as the testfiles. even files ending in .test.js , .test.ts or .spec.js | .spec.ts. in the naming convetion of `__test__` the two underscores together is known as dunder hence it can be also called as dunder tests.


## How do we write a TestCase?
A: we use a function called as `test`. and this function basically takes in two arguments 1st being the string that is the description of the testcase and second to be the callback function that is the actual implementation of the testcase.
    syntax:    test( " ", ()=>{
                        const result = call your function to be tested
                        expect(result).toBe(ur manually calculated answer or something that we know is gonna be the result)
                })
                the above mentioned `expect().toBe()` part is known as `Assertion`


## How to test a UI component?
A: 
To test a React UI component that component should be rendered to the jsdom (testing environment/browser). to render we wiil use the `render` menthod provided by testing-library/react. Everything that is rendered on the jsdom is on `screen`. so basically whatever is getting rendered we can view it via object screen this object can be used to find, or get anything that is rendered on it. for eg: findByTitle,getByrole, etc. `toBeInTheDocument()` function checks whether the expected thing is inside that document or not.

    syntax: test("Should render XYZ component", ()=>{
                render(<XYZ/>)
                const heading = screen.getByRole("heading")    //here we are fetching the heading and storing it in var
                expect(heading).toBeInTheDocument()  
            })


## How the UI Component testing works backend?
A: Every Test case has common three basic Steps that it follows: 
    1) Render
    2) Query
    3) Assert
    When we render some component on the jsdom first. The `screen.getXYZ` we do the known as `quering` gets us the JSX element, or react element for us. and to this query we give the `assertion` by `expect().toBeXYZ`