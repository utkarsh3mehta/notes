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

