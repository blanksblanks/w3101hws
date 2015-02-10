(function () {
  'use strict';

  var CsvParser = function CsvParser(csvString) {
    var lineSplit = csvString.split('\n'); // split str at delimiter and return arr
    var lastArr = lineSplit[lineSplit.length - 1];

    if (lastArr.length < 2) {
      lineSplit.pop();
    }

    this.csv = lineSplit.map(function(arr) {
      return arr.split(',');
    });

    this.compute = function(cells, fx) {
      var item1 = this.csv[cells[0].row][cells[0].col];
      var item2 = this.csv[cells[1].row][cells[1].col];
      return fx(item1, item2);
    };
  };

  module.exports = CsvParser;

})();
