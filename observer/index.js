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
    this.subscribers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.subscribers.forEach((subscriber) => subscriber(data));
  }
}

class TextField {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.__setupKeyUpObserver();
  }

  __setupKeyUpObserver() {
    this.__keyUpObserver = new EventObserver();
    this.keyUpBroadcaster = {
      subscribe: (fn) => {
        this.__keyUpObserver.subscribe(fn);
      },
      unsubscribe: (fn) => {
        this.__keyUpObserver.unsubscribe(fn);
      },
    };

    this.element.addEventListener('keyup', () => {
      this.__keyUpObserver.broadcast(this.element.value);
    });
  }
}

class WordsCounter {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  setWordsCount = (text) => {
    this.element.innerHTML = text ? text.trim().split(/\s+/).length : 0;
  };

  subscribeToCountBroadcaster(broadcaster) {
    this.countBroadcaster = broadcaster;
    this.countBroadcaster.subscribe(this.setWordsCount);
  }
}

const textField = new TextField('.textField');

const wordsCounter = new WordsCounter('.wordsCounter');
wordsCounter.subscribeToCountBroadcaster(textField.keyUpBroadcaster);
