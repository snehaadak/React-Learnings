## All about NPM 

# Topics Covered

- What is `NPM`?
- How to `initialize NPM`?
- What is `package.json`?
- What is `Caret(^)` and `Tilde(~)`?
- What is `package-lock.json`? What is `difference` between package.json & package-lock.json?
- What is `Bundler`?
- What are two types of `dependencies` used for React?
- How to install any `Package`?
- What are `Node modules`?
- What is `Transitive Dependency`?
- What is `.gitignore`? What should we include or exclude in .gitignore?
- What is `npx`?
- How to `include` react in project using NPM?
- Why using NPM way to include React to our Project preferred and a best practise?
- What does `Parcel` do?
- What is `HMR`? 
- What is `.parcel-cache`?
- What is `Differential bundling`?
- What is `Tree Shaking`?
- What is `dist` folder?
- What is `Browsers List`? what is advantage of using it?



# Answers: 

## What is `NPM`?
A: We cannot create a full fledge app just using a simple react we will require alot of different and additional packages to it. NPM provides us with whole set of different packages. It is a standard repository for all the packages. Basically NPM is the package manager. it doesnt have any specific abbrievation but in general it is responsible for installing and including the packages (Libraries and utilies required to run the React further and make it faster). It is responsible to manage this. 


## How to `initialize NPM`?
A:   npm init
    `npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.


# What is `package.json`?
A: We can get the overview about our project. like defining project properties, description, author & license information, scripts, etc. It also keeps track of which all packages and which versions of it are installed to our App. 


# What is `Caret(^)` and `Tilde(~)`?
A: Presence of caret indicates the minor upgrades to the versions i.e 2.8.6 --> 2.8.9
   Presence of tilde indicates the major updates to the versions i.e 2.6.1 --> 2.9.5


# What is `package-lock.json`? What is `difference` between package.json & package-lock.json?
A: package-lock.json has very specific and particular information regarding the packages. package.json has the approx info with presence of caret i.e it tells if there are any minor upgrades consider them in this (eg: ^2.8.3 --> 2.8.5)


# What is `Bundler`?
A: We have different project files i.e HTML, CSS, Javascript code files etc. Our code needs to be minified, cached, compressed before it is sent to production or hosted, Bundler helps to do ll this basically as the name says it helps us bundle our application neatly before it is pushed to prod. There are different bundlers available, for e.g. Vite, Parcel,Webpack.


# What are two types of `dependencies` used for React?
A: `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.


# How to install any `Package`?
A: Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependency.


# What are `Node modules`?
A: When we fetch a package from NPM the code for this particular packages are fetched into our systems to be used and they are wrapped up in this folder called node_modules


# What is `Transitive Dependency`?
A: When our normal dependency (package) have its own some dependency, if this dependency have a dependency further, again if these dependency have some more dependency ahead. these forms an interlink of dependencies and this chain is known as Transitive Dependency


# What is `.gitignore`? What should we include or exclude in .gitignore?
A: While pushing our codes to git repository we cant everytime push all the folders like nodemodules and everything so we have this folder called .gitignore in which we mention all the folders that needs to be excluded from pushing onto remote. We have to exclude all the folders that can be regenerated on single comands on servers as well. 


# What is `npx`?
A: npx command is used for executing a package. just like we use npm for installing and using a package we use npx for executing a package
    Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>
  ```


# How to `include` react in project using NPM?
A: To include react in our project via npm we firstly need to instaal `react` and `react-dom` packages through npm command.
    ```
    npm install react
    npm install react-dom
    ```
This installs the packages now to use it in our project we import this packages to our Javascript file. mentioning
    ```
    import React from "react"
    import ReactDOM from "react-dom/client"  ------> because the reactDOM's code is fetched from the file react-dom/client
    ```
    As for our initial HTML file where we have included this javascript file in script tag this file is normal JS file which doesn't understand what is import because JS doesnt have anything called as import in it so in the script tag we will give the type attribute as "module".

# Why using NPM way to include React to our Project preferred and a best practise?
A: Fetching it from some xyz.com is a costly operation and it would be ask us to call some other network to use react indirec6tly we have to be dependent on that network. Also when we include the link everytime if there are any updates to the Versions we would be required to change the url accordingly which would be the repetitive task. so when we have it installed we can directly manage this dependencies from the package.json.


# What does `Parcel` do?
A: references: [parceljs.og](https://parceljs.org/)
    - Has a seperate `dev build` which makes our build and execution faster.
    - Creates a local server (that hosts our app inj dev region)
    - Automatically refreshes our page on saving it i.e called as `HMR (Hot Module Replacement)`
    - Faster builds due to `caching` 
    - Image optimization
    - Minification
    - Bundling
    - Compressing our Files
    - `Differential Bundling`
    - Better Error handling UI
    - `Tree shaking`

# What is `HMR`? 
A: Parcel uses something called as File watching Alogorithm that allows it to automatically refresh our page on each save. This is called Hot Module Replacement (HMR)


# What is `.parcel-cache`?
A: The faster build for parcel is possible due to caching. i.e when we build our app it creates a initial folder of the build where all build files are cached (stored). this files are stored into folder called parcel-cache.


# What is `Differential bundling`?
A: We can open our App onto any browser be it Internet explorer, mozilla firefox, chrome etc. This each browser has its own number of versions. Parcel takes care of running our app over all the browsers smoothly.


# What is `Tree Shaking`?
A: It is removal of unused part of our code. For e.g. if we have 100 functions in a particular code but if we are using just 5 to 10 of them. parcel itslef removes the unused code for us.


# What is `dist` folder?
A: When we execute a parcel i.e. do npx parcel it generates a development build of our project. When it creates our built it creates a new modified version of our files that are minified, compressed, optimized and this files are stored in the folder called dist.


# What is `Browsers List`? what is advantage of using it?
A: To make our app more compatible for different browsers and its all versions we add `browsersList` to our package.json. which takes in array for which all browsers and its versions we have make our app comaptible. There might be a question why do we even need it we can make our app compatible for every browser and its every version but its not ideal because it adds up unnecessary things to our code and makes it heavy. To keep our code more fast and light we include Browsers List.  

