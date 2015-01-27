(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION
    var end = start;
    if (Object.prototype.toString.call(swaps) === '[object Array]'){
	  	swaps.forEach( // had to remove end =
	  		function followBall(el) {
	  			if (el[0] == end) {
	  				end = el[1];
	  			} else if (el[1] == end) {
	  				end = el[0];
	  			}
	  			// console.log("Inside for each: " + end);
	  		});
  	}

  	// console.log("Outside for each: " + end);
	function swap(){
	  	return end;
	}

	// BallFollower.swap === function swap()
  	// BallFollower.start === end
  	return {
  		swap : swap,
  		start : end
  	}

  	// var ballPosition = start;
  	// swaps.forEach(function(el, idx, arr){
  	// 	// var orig 	= el[0];
  	// 	// el[0] 		= el[1];
  	// 	// el[1] 		= orig;
  	// 	// console.log(ballPosition, el);
  	// 	if (el.indexOf(ballPosition) !== -1){
  	// 		ballPosition = el[];
  	// 		console.log(ballPosition);
  	// 	}
  	// });
  	// start = console.log('Parameters: ' + start + ", " + swaps);
  	// function followBall(start, cups) { // element, index, array
  	//   console.log(start + ' ' + cups);
  	//   if (start == cups[0]) {
  	//     start = cups[1];
  	//   } else if (start == cups[1]) {
  	//     start = cups[0];
  	//   }
  	//   console.log('new: ' + start);
  	//   return start;
    //  }
    //  return swaps.forEach(followBall(start, swaps), 0);
  };

  // console.log(BallFollower(2, [[0, 2], [1, 0]]));

  // start = 2
  // swap1 = 0 and 2 switch

  module.exports = BallFollower; // DON'T ALTER THIS
})();
