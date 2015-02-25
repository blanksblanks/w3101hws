(function () {
  'use strict';

  // dependency injection function constructor
  var ModuleCreator = function(name, dependencies) {
    var self = this;
    self.registeredFuncs = {};

    // register functions with a given module
    function register(name, func) {
      self.registeredFuncs[name] = func;
    }

    // inject registered functions into other functions
    function inject(func) {
      var funcString = func.toString();
      var matches = funcString.match(/^function\s+?.*?\((.*?)\)/);
      var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });

      // if the module has any dependencies, register their functions
      if (dependencies) {
        var depFuncs = dependencies.getRegisteredFunc();
        for (var key in depFuncs) {
          if (depFuncs.hasOwnProperty(key)) {
            register(key, depFuncs[key]);
          }
        }
      }

      return function () {
        var cachedFuncs = [];

        argsNames.map(function(el) {
          if (el) {
            cachedFuncs.push(self.registeredFuncs[el]);
          }
        });

        return func.apply(this, cachedFuncs);
      };
    }

    // get registered functions from a given module
    function getRegisteredFunc() {
      return self.registeredFuncs;
    }

    // use revealing module pattern to return module object
    self.module = {
      name: name,
      dependencies: dependencies,
      register: register,
      inject: inject,
      getRegisteredFunc: getRegisteredFunc
    };

    return self.module;
  };

  module.exports = {
    modules: {},
    module: function (name, dependencies) {
      var ds = this.modules[dependencies]; // load dependencies as modules
      var mod = new ModuleCreator(name, ds); // create new modules
      this.modules[name] = mod;
      return mod;
    }
  };

})();
