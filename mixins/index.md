# Mixins

We need [mixins](https://monsterlessons.com/project/lessons/primiesi-v-javascript-funktsiia-extend) when we have several classes, that differ by logic. They cannot be related or inherited in any way but they have, for example, some identical methods.

Let's see how mixins look like in JavaScript, how they can be implemented and what is `extend` function.

Let's say we have two classes: `Track` and `Playlist`. They both accept `name` as parameter:

```js
const Track = function (name) {
  this.name = name;
};

Track.prototype.getName = function () {
  return this.name;
};
Track.prototype.play = function () {
  console.log(this.name + ' started playing');
};

const Playlist = function (name) {
  this.name = name;
};

Playlist.prototype.getName = function () {
  return this.name;
};
Playlist.prototype.play = function () {
  console.log(this.name + ' started playing');
};
```

As we can see, both classes implement very similar logic: they assign `name` parameter, return `this.name` and output same message to the console. But in fact, it's difficult to inherit them from each other logically. E.g. if we have some kind of extended track then we could inherit from `Track`, but it's not our case. So the question is: How to refactor our classes so that we could extract the code that is duplicated? _Mixins_ is appropriate technique for such a case.
