(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    this.start = start; // this is ONLY instantiated when we create new object
    this.swap = function swap() {
      if (Object.prototype.toString.call(swaps) === '[object Array]') {
        // important note: this.start within the scope of this swap function
        // is not accessible in the BallFollower function so we need to return value
        // local can access outside values, but outside cannot see local scope
        var position = this.start;
        swaps.forEach(
          function followBall(el) {
          if (el[0] === position) {
            position = el[1];
          } else if (el[1] === position) {
            position = el[0];
          }
        });
        return position;
      }
    };
  };

  // test: // need the new when you return a function with this property
  // console.log(new BallFollower(2, [[0, 2], [1, 0]]));

  module.exports = BallFollower; // DON'T ALTER THIS
})();
