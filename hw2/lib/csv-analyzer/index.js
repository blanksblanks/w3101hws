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
        return fx (err, null);
      }
      var csvfile = data;
      var csv = new CsvParser(csvfile);
      var result = csv.compute(options.cells, options.func);
      fx(null, result);
    });
   };

  module.exports = CsvAnalyzer;

})();
