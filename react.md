# React Notes
###### Cource by Maximillian in Udemy

- To add conditional components in JSX, prefer using ternary operators.
- To add complex conditional components in JSX, use if-else conditions outside of the return function. *Shown below*

```javascript
render () {
  let person = null;
  if(someBoolean) {
    person = (
      // JSX code comes here
    );
  }
  
  return () {
    <div className="App">
      {person}
    </div>
  };
}
```
 
- To execute loops in the react, use Vanilla JS `.map()` function. *Shown below*

```javascript
{this.persons.map(person => {
  return <Person 
    name={person.name}
    age={person.age}
  />
})}
```
**You might get a 'key' warning if you run the above code.**

- When you run loops, the `map()` function also allows you the index of each array element. For e.g.:
```javascript
{this.persons.map((person, index) => {
  return <Person 
    click={() => this.someEventHandler(index)}
    name={person.name}
    age={person.age}
  />
})}
```

- Always save the original array to another variable. Let's say that personList is an array. 
- `persons = personList` is only a passing of reference values.
- It is a better idea to `persons = personList.slice()` or `persons = [...personList]`

**This still does not solve the key issue**

**This does**
**Keep in mind that the key should always be the attribute of the highest parent class**
- To solve the key issue, simple create an ID to each element in the array or object and pass it as key attributes.

```javascript
<Person key={person.id} />
```

- To remove elements from an array, use simple vanillaJS `.splice()` function.

```javascript
array.splice(indexNumber, 1); // delete only 1 element starting from this index number
```

- To edit only a single element from an array, the code is a bit complex. Hence, refer the comments written:

```javascript
changeHandler = (event, id) => { // take inputs the event that changed the elements and id of the element
  const elementIndex = this.state.array.findIndex(a => p.id === id); // search for the element where the 'id' matches

  const element = [...this.state.array[elementIndex]] // get all the properties of the element at the 'elementIndex'
  element.value = event.target.value; // change the desired value of the element to the one received via the event

  const elementList = [...this.state.array] // get the list of elements in the state variable
  elementList[elementIndex] = element; // change the element at the 'elementIndex' to the one updated
  this.setState({array: elementList}); // set the state up to date
}
```

### Assignment II
- Create an input text and take text input
- Show each character below the input box
- Clicking on any character will remove the character from the input box and from the character list.

###### UserInput.js
```javascript
const userInput = (props) => {

    let output = null;

    if(props.length < 5) {
        output = "Text too short";
    } else {
        output = "Text long enough";
    }

    return (
        <div>
            <input type='text' onChange={props.change} value={props.string} />
            <p>{props.length} | {output}</p>
        </div>
    );

    // This will render something like this
    //   _______________
    //  |asfkldld_______|
    //   8 | Text long enough
}
export default userInput;
```

###### UserOutput.js
```javascript
const charStyle = {
    display: 'inline-block',
    border: '1px solid black',
    padding: '6px',
    margin: '2px',
}

const userOutput = (props) => {
    return (
        <p style={charStyle} onClick={props.click}>{props.content}</p>
    );
    
    // This will render something like this
    //
    // _  _  _ _  _  _  _  _
    //|a||s||f|k||l||d||l||d|
}
export default userOutput;
```

###### app.js
```javascript
state = {
    characters: [],
  }

  inputChangeHandler = (event) => {
    this.setState({characters: event.target.value.split('')});  // split every input text into character elements
  }

  hideCharHandler = (event, chIndex) => { // take event and character index as arguments
    const characterList = [...this.state.characters] // spread the characters in 'state' and use the complete array rather than just a reference to the array
    characterList.splice(chIndex, 1); // remove the element from the index of the input character
    this.setState({characters: characterList}); // save the state
  }

  render () {

    let charSet = null;

    charSet = (
      <div>
        {this.state.characters.map((c, index) => { // dynamically create boxes for each character in the input box
          return <UserOutput 
          content={c} 
          click={(event) => this.hideCharHandler(event, index)} // run 'hideCharHandler' for each character
          />
        })}
      </div>
    );

    return (
      <div className='App'>
        <p>Hi There</p>
        <UserInput 
        change={this.inputChangeHandler} 
        length={this.state.characters.length}
        string={this.state.characters.join('')} // double bind the input box and the character list
        />
        {charSet}
      </div>
    );
  }
}
```

### Dynamic styling

#### To enter styles, there are two ways:

1. Write the styling in a `.css` file and import it.
1. Create a `const` variable and add JSON based styling, like below:

```javascript
  const buttonStyle = {
    color: 'white',
    padding: '10px',
    margin: '0 0 10px 0',
    backgroundColor: 'green',
    border: '1px solid blue',
  }
```
**Keep in mind, this is javascript and not css. We need to make sure that we write javascript code.**

- To make changes to a style, write a function that does something and in it update the style. Since it a JSON object, changing it is just like any other object.

```javascript
buttonStyle.backgroundColor: 'red';
```

#### To update classes:

1. Initialize an array
```javascript
  const classes = []
```

1. Push into the array all the classes you wish using the `push()` method.
1. Use the array in the `className` attributes like this,

```javascript
<div className={classes.join(' ')}></div>
```

#### To use psuedo codes in styling

- Install radium
`npm install --save radium`
- Radium allows us to use psuedo code in styling just like JSON objects. For e.g.:
```javascript
const buttonStyle = {
    color: 'white',
    padding: '10px',
    margin: '0 0 10px 0',
    backgroundColor: 'green',
    border: '1px solid blue',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black',
    }
  }
```
- To refer to the psuedo codes, like `:hover `, `:after` and others:
```javascript
  buttonStyle[':hover'] = {
    //new styles
  }
```
- **Don't forget to encapsulate the final export `App` inside the `Radium()` block too.**

- To use @media queries,
```javascript
  const style = {
    '@media (min-width:500px)': {
      width: '450px',
    }
  };
```

- **Use a hook provided my Radium to successfully execute media queries**
```javascript
import Radium, { StyleRoot } from 'radium';
...

render() {
  return (
    <StyleRoot>
    <div>...</div>
    </StyleRoot>
  );
}
```

### CSS Moduling

- To make sure that a `.css` file is assigned to only one `.js` file, we should `eject` the scripts.
- `Eject` explodes the scripts and webpacks. This allows us to make configuration changes.
- Using this, we shall make the necessary changes to assign respective `.css` files to their `.js` files.

###### webpack.config.dev.js | Under 'module' object, inside test: /\.css$/ object
```javascript
use: [
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      module: true, // add this line
      localIdentName: '[name]__[local]__[hash:base64:5]', // add this line
    },
  },
```

###### webpack.config.prod.js | Under 'module' object, inside test: /\.css$/ object
```javascript
use: [
  {
    loader: require.resolve('css-loader'),
    options: {
      importLoaders: 1,
      module: true, // add this line
      localIdentName: '[name]__[local]__[hash:base64:5]', // add this line
      minimize: true,
      sourceMap: shouldUseSourceMap,
    },
  },
```

By doing this, we make sure that a `.css` file is used by only the respective `.js` file.

- Keep in mind, to use the styles now, we need to import a variable from the `.css` files now.
- Or else, the styles, imported from external files, will not apply

###### App.js
```javascript
import styles from './App.css';
...
...
// To call any style or class mentioned in the .css file, refer it via the 'styles' object
<div className={styles.Bold}> </div>
```

**With this in place, we do not need 'Radium' class**

*To make a css style global, you can even mark it as `:global`*
```css
:global .ClassName {}
```

*No need to worry about @media queries. Write them inside the `.css` file and everything works fine.*

### Debugging

- For functional errors, refer official documents
- For logical errors, prefer using the Chrome browser.
  - The dev tools in it.
  - The source map in the dev tools
    - The source map allows you to add break point on the running code on the browser.

**Install the 'React Developer Tool' Chrome extension**

#### Error Boundary

- ErrorBoundary is a functionality that is provided along with React v16+.
- ErrorBoundary allows us to use custom error messages for any component on the page.
- In the development environment, the error will be shown just like that. But in the production environment, the error will be shown only at the component that has the error. All other components, that do not have any error will load perfectly.

1. To use this functionality, we need to create a class for ErrorBoundary, in a new a `.js` file.
1. ErrorBoundary is well defined class in React-16 and has a fixed format.
1. Refer [here](https://reactjs.org/docs/error-boundaries.html) for the official documentation.
1. [*Check here for a live demo*](https://codepen.io/gaearon/pen/wqvxGa?editors=0010)

##### Details about the class
1. ErrorBoundary is a class that helps react maintain the component tree even if one component breaks.
1. The class extends the Component class
1. If there is no error in the component, the elements inside the component are passed on to the ErrorBoundary class as the `props.children`. You can use it to show the elements, if there is no error.
1. The class is created when there is atleast one of the following methods:
`static getDerivedStateFromError()` or `componentDidCatch()`
1. These methods are responsible for maintaining the state of the class:
```javascript
state = {
  hasError: true,
  errorMessage: '',
}
```
1. `static getDerivedStateFromError(error)`:
```javascript
static getDerivedStateFromError(error) {
  // this method is responsible for setting the state to error ready
  return {hasError: true};
}
```
1. `componentDidCatch(error, errorInfo)`:
```javascript
componentDidCatch(error, errorInfo) {
  // this method is responsible for doing the things you'd want to do when an error occurs
  // you may return a fallback UI back to the component tree
  // you may log the error to any log file
  // you may change the state of the class to save the errorInfo as the errorMessage
}
```
1. Once all the above step have been completed, you may use the class as a component and wrap and breakable components inside it
```html
<ErrorBoundary>
<breakableAppComponent />
</ErrorBoundary>
```

###### ErrorBoundary/ErrorBoundary.js
```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  }

  componentDidCatch(error, errorInfo) {
    this.state({
      hasError: true,
      errorMessage: error,
    });
  }

  render () {
    if (this.state.hasError) {
      return <p>{this.state.errorMessage}</p>
    } else {
      return <p>{this.props.children}</p>
    }
  }
}

export default ErrorBoundary;
```

## Deep Dive
### Proper file structuring

- It is better to place the files in a proper folder structure
- Only keep the files related to `index` in the `src` folder.
- Everything else must be in some folder inside the `src` folder.
- Keep your final `App.js` or `Root.js` file and its dependencies in the `container` folder
- Keepy your stateful components in the `container` folder
- Keep your presentational components (stateless components) inside the `components` folder
- For each component, create a new folder inside the `components` folder
- Keep your images, videos and other files in the Assets folder

Something like this:

![Image of the file structure](react-file-structure.PNG)

Why is folder structuring important?
- It is important to keep the `App.js` file concise and short.
- Breaking components into smaller components makes it easy to re-use the components else where.
- Structuring the folder helps in finding a component.

**Difference between class based and functional components**

Class Based | Functional
----------- | ----------
class based components extend the components class | they are initialized as a normal function or an arrow function
can have the variable state and work on it | need to hook `{useState}` component for React-v16 to use state functionality
`this.state, this.props` | `props.attributeName`

### Component Lifecycle for class based components
#### Component Lifecycle for creation
*Lifecycle hooks not to be confused with React hooks*

- **Stage 1**
  - When a new component is created, the constructor of the component is created. The props of the components are also passed.
  ```javascript
  constructor(props) {
    super(props); // <-- This is important to supercede the default constructor of the component
  }
  ```
    - Do's
      - Set up state variable
    - Don'ts
      - Cause side-effects
      - Meaning not to make Http calls or API calls

- **Stage 2**
  - When the new component is created, it's parts are completed by placing the values received from props.
  - A desired output of the component is created.
  ```javascript
  static getDerivedStateFromProp(props, state)
  ```
    - Do's
      - Sync the state
    -Don'ts
      - Cause side-effects
      - Meaning make any out of application calls

- **Stage 3**
  - Once completely created, the JSX code is executed and the component is then rendered.
  ```javascript
  render()
  ```
    - Do's
      - Prepare the structure of the component in JSX code

- **Stage 4**
  - Render child component
  - In this stage, the components inside the parent component go through the same lifecycle

- **Stage 5**
  - Once rendered, the component is then mounted onto the entire component tree of the web app.
  ```javascript
  componentDidMount()
  ```
    - Do's
      - Cause side-effect
      - Make calls outside the application
    - Don'ts
      - Change the state of the component. Or else, this will lead to re-rendering the component

#### Component lifecycle for updation

- **Stage 1**
  - Get the current state of the component from a function that also helps in component creation.
  ```javascript
     static getDerivedStateFromProps(props, state)
  ```
    - Do's
      - Sync the state
    - Don'ts
      - Cause side-effects

- **Stage 2**
  - Check if the update activity of the component should happen
  ```javascript
    shouldComponentUpdate(nextProps, nextState) {
      // example code
      //// do this for the one thing that matters the most
      if(nextProps.propName !== this.props.propName) {
        return true; // true only if the props have changed
      } else {
        return false; // don't update as there is no change
      }
    }
  ```
    - Do's
      - Decide whether the component should be re-rendered
    - Don'ts
      - Cause side-effects

- **Stage 3**
  - Render the  component
  ```javascript
    render() {
      return (); // Add JSX code here
    }
  ```
    - Do's
      - Structure the component using JSX code

- **Stage 4**
  - Render the children in the component

- **Stage 5**
  - Get the version of the component before the update happens
  - Get a snapshot of the component
  ```javascript
    getSnapshotBeforeUpdate(prevProps, prevState) {
      return null; // return a snapshot value for componentDidUpdate to use
    }
  ```
    - Do's
      - Last-minute DOM changes or operations
    - Don'ts
      - Cause side-effect

- **Stage 6**
  - Update the component using the latest props, state
  ```javascript
    componentDidUpdate(prevProps, prevState, snapshot) // use any argument
    // snapshot is received from the 'getSnapshotBeforeUpdate' function
  ```
    - Do's
      - Cause side-effects
    - Don'ts
      - Make changes to the state

#### Deleting a component (Component Unmounting)
- We can run special tasks when a component is removed from the React DOM.
```jsx
componentWillUnmount()
```

### Component lifecycle for function based component
#### The `useEffect` hook

- The useEffect is another hook provided by the React library.
- It is the second most commonly used hook, after useState
- This hook is a part of the lifecycle and is run every time there is a render on the component
- This hook is used when we need to manage component lifecycles in a stateless component
```jsx
import React, { useEffect } from 'react';
const functionName = () => {
  useEffect(() => {
    console.log('[FunctionName.js] useEffect runs every time this component is rendered');
  });
}
```
- Let's say we want to run useEffect only when a component changes. 
- We can do this by adding a second argument.
- The second argument is the list of components, values that we want to monitor
- We can use different useEffect functions for different values
```jsx
  useEffect(() => {
    // do something
  }, []); // this function does something only when nothing changes, which means, that it run only for the first time

  useEffect(() => {
    // do something
  }, [props.varName]); // this function does something only when varName changes

  useEffect(() => {
    // do something
  }, [props.varName1, varName2]); // do something when varName1, varName2 change
```

**How do you stop component re-rendering for function based components?**
- React has the feature of memoing components
- This makes the component keep track of its state
```jsx
export default React.memo(variable)
```

##### Deleting a component
Stateless functions need to use `{useEffect}` to manage the lifecycle of the component
- To run special tasks when a component is removed
```jsx
useEffect(() => {
  // do  creation activities
  return () => {
    // do cleanup activities
  }
}, [])
```
- The first time useEffect is run, only creation activities take place
- Everytime from the next iteration, first the clean up activities happen and then the component is re-rendered