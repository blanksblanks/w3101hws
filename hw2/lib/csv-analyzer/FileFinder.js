(function() {
  'use strict';

  var fs = require('fs');

  function FileFinder(pathToDirectory, fileType, fx) {
    var stop = false;
    fs.readdir(pathToDirectory, function(err, data) {
      if (err) {
        callbackError(err);
      } else {
        data.forEach(function(el, idx) {
          if (data[idx].indexOf(fileType) !== -1) {
            returnFileText(data[idx]); // async call
            stop = true; //  w/o this callbackError returns before file has been returned
          } else if (!stop && idx === data.length -1 && el.indexOf(fileType) === -1) {
            callbackError('Unable to find ' + fileType + ' file');
          }
        });
      }
    });

    function returnFileText(file) {
      var fileToRead = pathToDirectory + file;
      fs.readFile(fileToRead, function(err, data) {
        if (err) {
          callbackError(err);
        } else {
          fx(null, data.toString());
        }
      });
    }

    function callbackError(err) {
      fx(err, null);
    }

  };

  module.exports = FileFinder;

})();
