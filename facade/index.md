# Facade Pattern

[Facade pattern](https://monsterlessons.com/project/lessons/facade-pattern-v-javascript) is about creating a simple interface for a large, complex piece of code in order to hide its complexity. This is a very common pattern.

Instead of knowing everything about the complex part, we only know a couple of methods that will do what we need with the complex part and we do not know what is happening inside there at all. This is the facade.

Let's say we have personal data coming from several sources: bank, credit history and account balance.

So we have `Bank` class with `verify` method checking whether a loan can be given or not:

```js
class Bank {
  verify(amount) {
    return amount < 999;
  }
}
```

This is a very simplified example. In a real world app we would pass there user and would check his data before decide whether to give a loan or not.

Also we have `CreditHistory` class that checks whether our user has a good credit history:

```js
class CreditHistory {
  check(name) {
    return true;
  }
}
```

And `Balance` class that checks whether user balance is positive or negative:

```js
class Balance {
  check(name) {
    return tru;
  }
}
```

Now we want to have the load result in the form of a message. And, in order not to write every time the logic for working with three classes at once and all the checks, we can create an additional class that will be a facade and will give us a simple API for obtaining the loan result.

We want to use it like this:

```js
class Balance {
  check(name) {
    return tru;
  }
}

const credit = new Credit('John');
const creditSmall = credit.applyFor(99);
const creditMedium = credit.applyFor(199);
const creditLarge = credit.applyFor(99999);

console.log('creditSmall', creditSmall);
console.log('creditMedium', creditMedium);
console.log('creditLarge', creditLarge);
```

We create a new instance of the `Credit` class and it has an `applyFor` method, to which we pass the credit amount that we need. And the result will be a message.

If we create such a facade, then we can easily find out the result of the loan without knowing what exactly is being checked inside and how complex the logic is. We simply call `applyFor` and get the result.

So let's create `Credit` class which will be our facade:

```js
class Credit {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    const isApproved = new Bank().verify(amount);
    const bankResult = isApproved ? 'approved' : 'denied';
    const isPositiveBalance = new Balance().check(this.name);
    const balance = isPositiveBalance ? 'positive balance' : 'negative balance';
    const isGoodCreditHistory = new CreditHistory().check(this.name);
    const creditHistory = isGoodCreditHistory ? 'good' : 'poor';

    return `${this.name} has been ${bankResult} for the ${amount} credit. With a ${creditHistory} credit standing and having a ${balance}.`;
  }
}
```

In the `applyFor` method we've created new instances of classes and called the necessary methods to obtain user, credit and credit history results. Then we generated a loan result message.

**So what are the pros and cons of this pattern?**

> The advantage is that when providing a simple interface to a complex code it is easier to work with and to reuse. But by creating a facade we create another abstraction and perhaps it is not always needed.

## Summing-up

Facade pattern is about creating a simple interface to a large, complex piece of code in order to hide it's complexity.
