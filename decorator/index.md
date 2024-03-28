# Decorator Pattern

Like [mixin](../mixins/index.md), [decorator pattern](https://monsterlessons.com/project/lessons/decorator-pattern-v-javascript) is an alternative to class inheritance.

Decorator allows to dynamically add new properties and methods to objects. That is, we kind of wrap our object in a decorator, like in a superclass.

A common example when we benefit from using decorators is if we need a huge number of subclasses for our system.

Let's say we have a base class `Coffee`. And we want to create a child classes: `Espresso`, `Latte`, `Cappuccino`. If we want to make each of them with sugar, we need to create a class `EspressoWithSugar`, which inherits from `Espresso`; `LatteWithSugar` that inherits from `Latte` and so on. Finally we'll end up with a huge number of child classes.

A decorator can solve this problem for us.

Let's try it. So we have a `Coffee` class that creates a coffee for us. And it has a `cost` method that returns the price:

```js
class Coffee {
  cost() {
    return 5;
  }
}

const coffee = new Coffee();

console.log(coffee.cost()); // -> 5
```

Now let's add `sugar` decorator that will add sugar to the coffee changing its price. Our decorator should be called as a function that accepts our object as parameter:

```js
const coffee = new Coffee();

sugar(coffee);
console.log(coffee.cost()); // -> 6
```

> After calling the decorator, `coffee` object will be mutated.

Let's describe this decorator:

```js
const sugar = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};
```

Inside `sugar` function we received the cost and overrided the `cost` method so that it will now return the new cost including sugar.

> The decorator mutated the object passed into it, but we can still create basic class instances since we didn't change the superclass.

Let's add a couple more decorators. For example, the price will change depending on the size of the coffee:

```js
const small = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost - 1;
};

const large = (coffee) => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};

const coffee = new Coffee();

sugar(coffee);
large(coffee);
console.log(coffee.cost()); // -> 7
```

We are able to combine decorators inside each other. E.g. if we want to create large coffee with milk, we may just add and combine `withMilk` and `largeWithMilk` decorators:

```js
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
```

So, with decorator pattern we can add new behavior to our objects without having to modify the default behavior. We also avoid the need to create a huge number of subclasses.
