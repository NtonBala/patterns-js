'use strict';

// * Observer pattern
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
