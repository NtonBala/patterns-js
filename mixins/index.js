'use strict';

// * Mixins in JS
const Track = function (name) {
  this.name = name;
};
const Playlist = function (name) {
  this.name = name;
};

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

$.extend(Track.prototype, nameMixin, controlsMixin);
$.extend(Playlist.prototype, nameMixin, controlsMixin);

const superTrack = new Track('Super track');
const coolPlaylist = new Playlist('Cool playlist');

console.log(superTrack.getName());
console.log(coolPlaylist.getName());
superTrack.play();
coolPlaylist.play();

console.log(Track, superTrack);
