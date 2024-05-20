'use strict';

// * Mixins in JS
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

const superTrack = new Track('Super track');
const coolPlaylist = new Playlist('Cool playlist');

console.log(superTrack.getName());
console.log(coolPlaylist.getName());
superTrack.play();
coolPlaylist.play();
