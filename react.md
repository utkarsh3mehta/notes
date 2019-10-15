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

