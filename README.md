# z-container
[![Build Status](https://travis-ci.org/ZeeCoder/z-container.svg?branch=master)](https://travis-ci.org/ZeeCoder/z-container)
[![npm version](https://badge.fury.io/js/z-container.svg)](http://badge.fury.io/js/z-container)

This is a container solution to save and later retrieve object references, and other data.

Since it's a CommonJS module, it must be used alongside with [Browserify](http://browserify.org/), or
something similar, like [WebPacker](http://webpack.github.io/).

## Example, explanation
```js
var container = require('z-container');

container.add('some_object_reference', object_reference);

// Returns the previously saved reference.
// This is useful, when CommonJS modules compiled to the web need to access a
// certain module which was instantiated by the `new` operator.
container.get('some_object_reference');

// The container can save and retrieve other kinds of data too, which is useful
// when you have to pass data at runtime, and cannot simply `require()` data
// from a file.
container.add('some_string', 'string');
container.get('some_string'); // returns "string"
```

## License
[MIT](LICENSE)
