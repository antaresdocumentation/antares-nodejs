# Antares NodeJS
This is a NodeJS library to simplify the connection to Antares IoT Platform. For more information about the platform itself, please visit the [official site](https://antares.id).  

## Installation
Make sure you have NodeJS and npm installed.
```
npm install antares-http --save
```

### Usage Example
```js
var antares = require('antares-http');

var myData = {
  temperature: 30,
  humidity: 78
}

antares.setAccessKey('your-access-key-here');

antares.send(myData, 'your-project-name', 'your-device-name')
.then(function(response) {
  console.log(response);
});
```

### API Reference
TODO
