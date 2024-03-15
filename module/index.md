# Module Pattern

[Module pattern](https://monsterlessons.com/project/lessons/module-pattiern-v-javascript) allows to implement object private properties and methods.

## Problem

The problem with global variables is that they can be changed by any developer, even accidentally and without even knowing it:

```js
var counter = 0;

var increaseCounter = function () {
  counter++;
};

var getCounter = function () {
  return counter;
};

increaseCounter();
console.log(getCounter()); // 1

counter = 'counter';

increaseCounter();
console.log(getCounter()); // NaN
```

## Solution

When we use _module pattern_ we create anonymous "self-invoking" function that allows to preserve all the data inside it and make for it simple public API:

```js
var counterModule = (function () {
  var counter = 0;

  var increaseCounter = function () {
    counter++;
  };

  var getCounter = function () {
    return counter;
  };

  return { getCounter, increaseCounter };
})();

counterModule.increaseCounter();
console.log(counterModule.getCounter()); // 1
console.log(counter); // ReferenceError: counter is not defined
```

Now we don't have any access to counter variable (neither outside of, nor on `counterModule`).

> Module pattern allows us to isolate functions and objects protecting code from breaking.

### Fixed Dependencies

Another advantage of module pattern is that we can strictly indicate it's dependencies. In order to do it we just need to pass dependency as parameter:

```js
var xxxModule = (function (jQ) {
  // Use jQ...
})(jQuery);
```

Notice, that we can define any name for our dependency. E.g. if `$` variable is already in use.

## Summing-up

Module pattern allows to isolate functions, variables and objects protecting code from breaking (isolated entities are unreachable from outside). Module also allows to strictly indicate its dependencies.
