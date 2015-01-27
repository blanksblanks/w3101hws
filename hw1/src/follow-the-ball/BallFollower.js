(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    // IMPLEMENT YOUR SOLUTION WITHIN THIS FUNCTION

    console.log('Parameters: ' + start + ", [" + swaps + ']');

    var end = start;
    if (Object.prototype.toString.call(swaps) === '[object Array]'){
	  	swaps.forEach( // had to remove end =
	  		function followBall(el) {
	  			console.log('ball in: ' + end + ' bfr swap: [' + el[0] + ',' + el[1] + ']');
	  			if (el[0] == end) {
	  				end = el[1];
	  			} else if (el[1] == end) {
	  				end = el[0];
	  			}
	  			console.log('ball in: ' + end + ' aft swap: [' + el[0] + ',' + el[1] + ']');
	  		});
  	}

	function swap(){
		console.log('final ball position: ' + end);
	  	return end;
	}

	// because specs expect values for follower.start and follower.swap()
	// BallFollower.swap = function swap()
  	// BallFollower.start = end
  	return {
  		swap : swap,
  		start : end
  	}
  	
  };

  console.log(BallFollower(2, [[0, 2], [1, 0]]));
  
  module.exports = BallFollower; // DON'T ALTER THIS
})();
