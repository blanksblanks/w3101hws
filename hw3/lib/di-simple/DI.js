(function () {
  'use strict';

  var DI = function DI(name, dependencies) {
    this.name = name;
    this.dependencies = dependencies;
    this.registeredFuncs = {};
  };

  DI.prototype.register = function(name, func) {
    this.registeredFuncs[name] = func;
  };

  DI.prototype.inject = function(func) {
    var funcString = func.toString();
    var matches = funcString.match(/^function\s+?.*?\((.*?)\)/);
    var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });
    var dependencies = this.dependencies;
    var self = this;

    // console.log('fs', funcString);
    // console.log('ms', matches);
    // console.log('aN', argsNames);
    // console.log('ds', dependencies);

    return function () {
      var cachedFuncs = [];

      argsNames.map(function(el) {
        if (el) {
          cachedFuncs.push(self.registeredFuncs[el]);
        }
      });

      return func.apply(this, cachedFuncs); ///.apply(this, args);
    };
  };

  module.exports = {
    modules: {},
    module: function (name, dependencies) {
      var module = new DI(name, dependencies);
      return module;
    }
  };
})();
