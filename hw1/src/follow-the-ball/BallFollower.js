(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
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

  // Original implementation:
  //
  // var BallFollower = function BallFollower(start, swaps) {
  //   // console.log('Parameters: ' + start + ', [' + swaps + ']');

  //   var end = start;
  //   if (Object.prototype.toString.call(swaps) === '[object Array]') {
  //     swaps.forEach( // had to remove end =
  //       function followBall(el) {
  //         // console.log('ball in: ' + end + ' bfr swap: [' + el[0] + ',' + el[1] + ']');
  //         if (el[0] === end) {
  //           end = el[1];
  //         } else if (el[1] === end) {
  //           end = el[0];
  //         }
  //         // console.log('ball in: ' + end + ' aft swap: [' + el[0] + ',' + el[1] + ']');
  //       });
  //   }

  // function swap() {
  //   // console.log('final ball position: ' + end);
  //     return end;
  // }

  // // because specs expect values for follower.start and follower.swap()
  //   return { // so we return a new Object literal {};
  //     swap : swap,
  //     start : end
  //   };

  // };

  // test: // need the new when you return a function with this property
  // console.log(new BallFollower(2, [[0, 2], [1, 0]]));

  module.exports = BallFollower; // DON'T ALTER THIS
})();
