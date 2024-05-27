'use strict';

import { EventObserver } from '../../index.js';

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
