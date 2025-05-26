## Everything in react is a component
## A component just returns a JSX 

## component composition putting 2 components in one is called c. composition

## we can inject any js code in our curly braces

## jsx takes care of injected variables

## 	JSX automatically escapes user-generated content.

### we put our jsx inside () because babel converts it to react.createElement
### JSX => Babel transpiles it to React.createElement => 

### we make our component like modular when we want to use it often

# Config Driven UI
## when UI is rendered based on the config data and backend sends data accordingly 
## a good senior frotned is someone who is good UI and data layer engineer

## Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect to store to our app
 - Slice (cartSlice)
 - dispatch (action)
 - Selector (read the data)

1. creating a store comes from redux/toolkit that's why configureStore is imported from there
2. but the bridge between our app and the store is set up by provider which comes from react/redux
3. actions are like small api to communicate with the store
4. but it is the reducer function which actually changes the data in your store
5. a slice has intial state and actions
6. there can be multiple reducer slices and all of em will be imported in the big one app reducer
7. mutating the state means directly modifying the state 
8. selector is nothing but a hook inside the react-redux this gives us access to the store
9. when we dispatch an action redux takes an payload and passes as a second argument to the dispatch
10. when using selector make sure you use the right portion of slice

# Setting up Testing in our app
 - Installed React Testing Library
 - Installed Jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - jest configuration 
 - npx jest --init
 - installed jsdom library
 - Installed @babel/preset-react - to make JSX work in test cases
 - Installed @babel/preset-react inside my babel config
 - Installed @testing-library/jest-dom
