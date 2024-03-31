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

const blogObserver = new EventObserver();

const textField = document.querySelector('.textField');
const countField = document.querySelector('.countField');

const getWordsCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

blogObserver.subscribe((text) => {
  countField.innerHTML = getWordsCount(text);
});

textField.addEventListener('keyup', () => {
  blogObserver.broadcast(textField.value);
});
