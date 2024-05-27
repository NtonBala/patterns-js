'use strict';

import { EventObserver } from '../../index.js';

class ObserverTimer extends EventObserver {
  constructor() {
    super();
    this.secondsPassed = 0;
  }

  increase() {
    this.secondsPassed += 1;
    this.broadcast(this);
  }

  reset() {
    this.secondsPassed = 0;
    this.broadcast(this);
  }
}

const myTimer = new ObserverTimer();

const firstBtn = document.querySelector('.firstBtn');
firstBtn.innerHTML = `Seconds passed: ${myTimer.secondsPassed}`;
firstBtn.addEventListener('click', () => {
  myTimer.reset();
});

const secondBtn = document.querySelector('.secondBtn');
secondBtn.innerHTML = `Seconds passed: ${myTimer.secondsPassed}`;
secondBtn.addEventListener('click', () => {
  myTimer.reset();
});

myTimer.subscribe((timer) => {
  firstBtn.innerHTML = `Seconds passed: ${timer.secondsPassed}`;
});
myTimer.subscribe((timer) => {
  secondBtn.innerHTML = `Seconds passed: ${timer.secondsPassed}`;
});

setInterval(() => {
  myTimer.increase();
}, 1000);
