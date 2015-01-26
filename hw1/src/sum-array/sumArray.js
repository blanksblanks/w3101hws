(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
    return values.reduce(sum, 0);
  }; 

function sum(prev, curr) {
	return prev + curr;
}

// [1, 2, 3] prev = 1, curr = 2
// return 3
// prev = 3

// var sum = [1, 2, 3].reduce( function(total, num){ return total + num }, 0)


  module.exports = sumArray; // DON'T CHANGE THIS
})();
