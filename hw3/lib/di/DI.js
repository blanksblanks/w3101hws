(function () {
  'use strict';

  var DI = (function(name, dependencies) {
    var self = this;
    self.registeredFuncs = {};

    var module = {
      name: name,
      dependencies: dependencies,
      register: register,
      inject: inject,
      getRegisteredFunc: getRegisteredFunc
    }

    function register(name, func) {
      self.registeredFuncs[name] = func;
    };

    function inject(func) {
      var funcString = func.toString();
      var matches = funcString.match(/^function\s+?.*?\((.*?)\)/);
      var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });
      // var dependencies = this.dependencies;
      // var self = this;

      // console.log('fs', funcString);
      // console.log('ms', matches);
      // console.log('aN', argsNames);
      console.log('func', func);
      console.log('ds', dependencies);

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

    function getRegisteredFunc(func) {
      return this.registeredFuncs;
    };

    return module;
  });

  module.exports = {
    modules: {},
    module: function (name, dependencies) {
      if (arguments.length === 1) {
        for (var i = 0; i < this.modules.length; i++) {
          if (this.modules[i].name === name) {
            return this.module[i];
          }
        }
        // throw 'DI', name, 'is not available';
      } else {
        var module = new DI(name, dependencies);
        return module;
      }
    }
  };
})();
