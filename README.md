# Installing

```sh
meteor add imajus:helpers-core
```

# Purpose

This Meteor package provides `Template.helpers` method which takes an object as the only argument. It simply iterates trought the object properties and calls `Template.registerHelper(key, wrapper<value>)` where `wrapper` is a function which transforms helper aruments before passing to helper function.

Original `Template.registerHelper` appended object with `hash` property as the last item to the helper function arguments. The wrapper removes that last argument, extracts `hash` value and if it's not empty, appends to the helper arguments.

So, to demonstrate how it works see the following helper example.

JavaScript:
```js
// Old way
Template.registerHelper('something', (...args) => console.dir(args));
// New way
Template.helpers({
  something(...args) {
    console.dir(args);
  },
});
```

HTML:
```
{{something 'greetings'}}
{{something 'hello' name='john'}}
```

With original `Template.registerHelper` the following console output is expected:
```
['greetings', { hash: {} }]
['hello', { hash: { name: 'john' } }]
```

Using `Template.helpers`, the output will be as following:
```
['greetings']
['hello', { name: 'john' }]
```

## I still don't get it

Simply put, the main purpose of the wrapper is to eliminate using `_.isObject(_.last(args))` in the beginning of each helper function which relies on using optional hashes.

Additionaly it provides handy `Template.helpers` method for registering global helpers in batch.