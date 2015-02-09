(function () {
  'use strict';

  // implement your csv-analyzer here
  // make sure to require in only the helper modules that you have
  // created in this directory.  The fs and path modules should be
  // used only inside those helper directories.

  var FileFinder = require('./FileFinder'),
       CsvParser = require('./CsvParser');

  var CsvAnalyzer = function(dir, options, fx) {
     new FileFinder(dir, 'csv', function(err, data) {
      if (err) {
        // console.error('Error!', err);
        return fx (err, null);
      }
      var csvfile = data;
      // console.log(csvfile);
      var csv = new CsvParser(csvfile);
      var result = csv.compute(options.cells, options.func);
      // console.log(csv);
      // console.log(options);
      // console.log('result! ' + result);
      fx(null, result);
    });
   };

  module.exports = CsvAnalyzer;

    // Testing
    //   var dir = process.cwd() + '/',
    //     a = {row: 1, col: 1},
    //     b = {row: 2, col: 0},
    //     cells = [a, b],
    //     computeOptions = {
    //       cells: cells,
    //       func: add
    //     };

    // function add(a, b) { return parseFloat(a) + parseFloat(b); }

    // CsvAnalyzer(dir, computeOptions, function(err, data) {
    // 	console.log(data);
    // });

})();
