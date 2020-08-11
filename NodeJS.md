# Node JS

To import a module

```js
require('mongoose') // simply import a module
var http = require('http'); // import a module and save it to a variable
```

To create a module

```js
// This exports a module named myDateTime which when used, gives the date

exports.myDateTime = function () {
    return Date();
};
```

To import a self-created module

```jsx
var myDT = require('<file_path_of_the_module>'); // don't add .js

// using the function
myDT.myDateTime(); // gives the date
```

## The HTTP module

```js
var http = require('http');
```

The HTTP module has the functionality to create a server.
The function for it is:

```js
http.createServer(function(req, res) {
    // do some thing here
}).listen("<port_without_quotes>");
/* The create server function takes a function as an input and the port number to listen on.
The function takes two inputs.
1. Request(req)
2. Response(res)
And the body of the function is anything you may want to do.
*/
```

### Things you can do with the createServer function

#### The response

```js
res.writeHead(200, { 'Content-Type': 'text/html' }); // set the header of response with a status code and a content type
res.write('Write something directly on the requestor\'s screen');
res.end(); // end the response
```

#### The request

```js
res.write(req.url); // write the URL after domain
```
