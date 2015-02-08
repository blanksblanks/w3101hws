(function () {
  'use strict';

  function cache(fx) {
    var cached = {};
    return function() {
      if (cached[JSON.stringify(arguments)] !== undefined) {
        return cached[JSON.stringify(arguments)];
      } else {
        var result = fx.apply(this, arguments);
        cache[JSON.stringify(arguments)] = result;
        return result;
      }
    };
  }

  module.exports = cache;

})();
