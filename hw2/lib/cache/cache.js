(function () {
  'use strict';

  function cache(fx) {
    var cached = {};
    return function() {
      var key;
      if (arguments === undefined) {
        key = JSON.stringify('undefined');
      } else {
        key = JSON.stringify(arguments);
      }

      if (cached[key] !== undefined) {
        return cached[key];
      } else {
        var result = fx.apply(this, arguments);
        cached[key] = result;
        return result;
      }
    };
  }

  module.exports = cache;

  // Testing
  // var someComplexFunction = function(arg1, arg2) {
  //   return arg1 + arg2;
  // };

  // var cachedFunction = cache(someComplexFunction);

  // console.log(cachedFunction('a', 'b'));
  // console.log(cachedFunction('a', 'b'));
  // console.log(cachedFunction('a', 'c'));

})();
