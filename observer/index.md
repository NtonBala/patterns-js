# Observer Pattern

[Observer pattern](https://monsterlessons.com/project/lessons/observer-pattern-v-javascript) is quite similar to [Pub/Sub](../pubSub/index.md), but its idea is a little different.

A common problem during development that we face is when different parts of application have to respond to various events. E.g. the user has entered some text and we need to change some components. And all this is quite difficult to synchronize.

Observer pattern can help us with this. It allows to create _one-to-many relation_ between components.

Let's say we want to implement a class that will have next methods:

```js
const observer = new EventObserver();

observer.subscribe((data) => {
  console.log('subscriber was fired', data);
});
observer.broadcast({ someData: 'hello' });
```

We create one observer and then we subscribe to its events in various places using `subscribe` method. So when we call `observer.broadcast`, it will notify all subscribers.

Let's implement this pattern:

```js
class EventObserver {
  constructor() {
    this.subscribers = [];
  }

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.subscribers.forEach((subscriber) => subscriber(data));
  }
}
```

Our `EventObserver` class stores an array of subscribers and has `subscribe`, `unsubscribe` and `broadcast` methods.

Now let's check that this code works:

```js
const observer = new EventObserver();

observer.subscribe((data) => {
  console.log('subscribe for module 1 fired', data);
});
observer.subscribe((data) => {
  console.log('subscribe for module 2 fired', data);
});
observer.broadcast({ someData: 'hello' });
// -> subscribe for module 1 fired { someData: 'hello' }
// -> subscribe for module 2 fired { someData: 'hello' }
```
