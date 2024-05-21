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

Let's create `nameMixin` object and add to it `getName` method that will return `this.name`. And another object - `controlsMixin` that will hold all the methods that control both `Track` and `Playlist` simultaneously:

```js
const nameMixin = {
  getName: function () {
    return this.name;
  },
};

const controlsMixin = {
  play: function () {
    console.log(this.name + ' started playing');
  },
};
```

In order to apply our mixins to classes `extend` function is used. As first parameter it accepts an object that we want to extend (in our case it will be class prototype), then we pass a sequence of objects that we want to mix to the first parameter.

So, now we can remove previous code where we added `getName` and `play` to prototypes and use `extend` function e.g. from JQuery library:

```js
$.extend(Track.prototype, nameMixin, controlsMixin);
$.extend(Playlist.prototype, nameMixin, controlsMixin);
```

The code works the same, but now we've extracted the code that is duplicated to mixins. If we check `superTrack` object we'll see that it has only one own property `name`. `getName` and `play` are mixed to its prototype that allows `Track` instance to call them.
