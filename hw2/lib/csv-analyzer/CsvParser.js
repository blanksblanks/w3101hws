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

    // console.log(finalSplit);
    this.compute = function(cells, fx) {
      // console.log('csv1', this.csv, 'cells', cells);
      var item1 = this.csv[cells[0].row][cells[0].col];
      var item2 = this.csv[cells[1].row][cells[1].col];

      return fx(item1, item2);
    };

  };

  module.exports = CsvParser;

  // Testing
  // var input = '"some","set","of","comma separated values"\n"using"' +
  //           ',"newline","as","row delimiter\n';
  // var csv = new CsvParser(input);
  // // console.log(csv); // the array of arrays of each row
  // var cells = [
  //   {row: 0, col: 1},
  //   {row: 1, col: 0}
  // ];
  // console.log(csv.compute(cells, concat));

  // function concat (a, b) { return a + b; }

  // var csvfile = '1,2\n3,4\n5,6';
  // var csv = new CsvParser(csvfile);
  // console.log('csv.csv', csv.csv);
  // var a = {row: 1, col: 1},
  //     b = {row: 2, col: 0};

  // function add(a, b) {
  //   return parseFloat(a) + parseFloat(b);
  // }

  // console.log('csv compute', csv.compute([a, b], add));

})();
