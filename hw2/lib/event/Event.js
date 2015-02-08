(function () {
  'use strict';

  // module.exports = Event;

  var Event = function Event() {
    this.observerList = [];
  };


  Event.prototype.subscribe = function(obj) {
    console.log(obj + ' subscribed!');
    this.observerList.push(obj);
  };

  Event.prototype.unsubscribe = function(obj) {
    console.log(obj + ' unsubscribed');
    for (var i = 0; i < this.observerList.length; i++) {
      if (this.observerList[i] === obj) {
        this.observerList.splice(i, 1);
      }
    }
  };

  Event.prototype.emit = function(obj) {
    // console.log(arguments + ' should emit');
    for (var i = 0; i < this.observerList.length; i++) {
      this.observerList[i].apply(this, arguments);
      console.log('Result : ' + this.observerList[i].apply(this, arguments));
    }
  };

  module.exports = Event;

})();

  // Test cases:
  // var event = new Event();
  // var someFunction = function (a, b) { return a + b; };

  // console.log('Event prototype: ' + Object.prototype.toString.call(Event));
  // console.log('typeof Event: ' + typeof Event);

  // event.subscribe(someFunction);
  // event.emit(1, 2); // someFunction will be called with these args
  // event.unsubscribe(someFunction); // some function no longer subscribed
