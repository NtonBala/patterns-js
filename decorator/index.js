'use strict';

// * Decorator pattern

class Coffee {
  cost() {
    return 5;
  }
}

const sugar = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};

const small = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost - 1;
};

const large = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};

const withMilk = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};

const largeWithMilk = (coffee) => {
  large(coffee);
  withMilk(coffee);

  const cost = coffee.cost();
  coffee.cost = () => cost;
};

const coffee = new Coffee();

largeWithMilk(coffee);
console.log(coffee.cost()); // -> 7
