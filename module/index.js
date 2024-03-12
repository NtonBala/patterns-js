'use strict';

// * Module pattern

// * The problem:
// var counter = 0;

// var increaseCounter = function () {
//   counter++;
// };

// var getCounter = function () {
//   return counter;
// };

// increaseCounter();
// console.log(getCounter()); // 1

// counter = 'counter';

// increaseCounter();
// console.log(getCounter()); // NaN

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
