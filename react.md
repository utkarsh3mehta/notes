## React Notes
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