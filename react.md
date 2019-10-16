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