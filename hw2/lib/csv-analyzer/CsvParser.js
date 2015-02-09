(function () {
  'use strict';

  var CsvParser = function CsvParser(csvString) {
    var lineSplit = csvString.split('\n');
    console.log('ls', lineSplit);

    this.csv = lineSplit.map(function(arr) {
      return arr.split(',');
    });

    // console.log(finalSplit);
    this.compute = function(cells, fx) {
      console.log('csv1', csv, 'cells', cells);
      cells.forEach(function(el, idx) {
        // var curr = el;
        console.log('el', el);
        var item1 = csv[el.row][el.col];
        var item2 = csv[el.row][el.col];
      });

      return fx(item1, item2);
    };

  };
  var input = '"some","set","of","comma separated values"\n"using"' +
            ',"newline","as","row delimiter\n"';
  var csv = new CsvParser(input);
  console.log(csv); // the array of arrays of each row
// var cells = [
//   {row: 0, col: 1},
//   {row: 1, col: 0}
// ];
// console.log(csv.compute(cells, concat));

// function concat (a, b) { return a + b; }

  module.exports = CsvParser;

  // var csvfile = '1,2\n3,4\n5,6';
  // var csv = new CsvParser('1,2\n3,4\n5,6');
  // console.log('csv.csv', csv.csv);
  // var csv = new CsvParser(csvfile);
  // var a = {row: 1, col: 1},
  // b = {row: 2, col: 0};
  // expect(csv.compute([a, b], add)).to.equal(9);

  // function add(a, b) {
  //   return parseFloat(a) + parseFloat(b);
  // }

  // console.log('csv compute', csv.compute([a, b], add));

})();
