(function () {
  'use strict';

  var Event = function Event() {
    this.observerList = [];
  };


  Event.prototype.subscribe = function(obj) {
    this.observerList.push(obj);
  };

  Event.prototype.unsubscribe = function(obj) {
    for (var i = 0; i < this.observerList.length; i++) {
      if (this.observerList[i] === obj) {
        this.observerList.splice(i, 1);
      }
    }
  };

  Event.prototype.emit = function(obj) {
    for (var i = 0; i < this.observerList.length; i++) {
      this.observerList[i].apply(this, arguments);
    }
  };

  module.exports = Event;

})();

