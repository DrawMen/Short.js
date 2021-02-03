# Short.js
Just some shorter function calls for commonly used JavaScrips functions.


## Functions
### Finding elements

Find the first element matching the query in the specified element. If no element is specified, the entire document is searched.
```
function Find(query : string, element = null : element)
```

Find all the elements matching the query in the specified element. If no element is specified, the entire document is searched.
```
function FindAll(query : string, element = null : element)
```


### Adding event listeners

Add the specified listener on the element, the callback is executed when the event occurs. The useCapture bool specifies if capturing is used (default: false).
```
function OnEvent(element : element, event : string, callback : function, useCapture = false : bool)
```


### HTTP requests

Send a GET request to the specified URL. When the request is ready, the callback is executed with the responseText as the first parameter.
```
function Get(url : string, callback : function)
```

Send a POST request to the specified URL, containing the specified data in its body. When the request is ready, the callback is executed with the responseText as the first parameter. By default the 'application/json' Content-type is used.
```
function Post(url : string, data : string, callback : function, type = 'application/json' : string)
```

### Much more to come