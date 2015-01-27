(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    // IMPLEMENT YOUR SOLUTION HERE!
    // MAKE SURE TO USE REDUCE!
    // console.log('HEY WE GOT VALUES: ');
    // console.log(values);
    return values.reduce(sum); // (sum, 0) not necessary
    // place function inside scope of var sumArray

    function sum(prev, curr) {
      // console.log(prev + ' + ' + curr);
      return prev + curr;
    }

  };
  // run node src/sum-array/sumArray.js to test console output
  // console.log(sumArray([11, 2, 3]));
  // Ex: var sum = [11, 2, 3].reduce( function(total, num){ return total + num }, 0)
  // HEY WE GOT VALUES:
  // [ 11, 2, 3 ]
  // 0 + 11
  // 11 + 2
  // 13 + 3
  // 16

  module.exports = sumArray; // DON'T CHANGE THIS
})();
