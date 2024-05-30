# Observer Pattern

[Observer pattern](https://monsterlessons.com/project/lessons/observer-pattern-v-javascript) is quite similar to [Pub/Sub](../pubSub/index.md), but its idea is a little different.

A common problem during development that we face is when different parts of application have to respond to various events. E.g. the user has entered some text and we need to change some components. And all this is quite difficult to synchronize.

Observer pattern can help us with this. It allows to create _one-to-many_ relation between components.

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

Let's try it with a real example. We want to have 2 components: in one we will enter data and the other will display the number of words entered.

> [!NOTE]
> To run an example open `./index.html` in the browser.

First let's add a couple of elements to the markup:

```html
<textarea class="textField"></textarea>
<div>
  Words Count:
  <span class="countField"></span>
</div>
```

Now let's create an observer and find both elements:

```js
const blogObserver = new EventObserver();

const textField = document.querySelector('.textField');
const countField = document.querySelector('.countField');
```

Now we need to subscribe to our blogObserver:

```js
blogObserver.subscribe((text) => {
  console.log('broadcast caught');
});
```

And fire `broadcast` when user changes input field:

```js
textField.addEventListener('keyup', () => {
  blogObserver.broadcast(textField.value);
});
```

To count words we can wright a helper function:

```js
const getWordsCount = (text) => (text ? text.trim().split(/\s+/).length : 0);
```

And call it inside our subscriber:

```js
blogObserver.subscribe((text) => {
  countField.innerHTML = getWordsCount(text);
});
```

This small example perfectly shows how observer pattern works. First we create a new instance of the observer class, for example for a field component. Then in various components we can subscribe to broadcast of this observer. Now all our components are synchronized and change simultaneously when data changes.

## Summing-up

Observer pattern allows different parts of application respond to various events. It synchronizes components by creating _one-to-many_ relations between them.
