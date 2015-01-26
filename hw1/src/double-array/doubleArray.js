(function() {
    'use strict';

    var doubleArray = function(arrayToDouble) {
        // IMPLEMENT YOUR FUNCTION HERE
        // MAKE SURE TO USE ARRAY'S MAP METHOD!
        return arrayToDouble.map(double);

        // map is only a fx for arrays -
        // calls a fx on each el and returns new array
    };

    function double(el) {
        return el * 2;
    }

    module.exports = doubleArray;

})();
