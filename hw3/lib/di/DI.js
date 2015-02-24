(function () {
  'use strict';

  var DI = function(name, dependencies) {
    var self = this;
    self.registeredFuncs = {};

    self.module = {
      name: name,
      dependencies: dependencies,
      register: register,
      inject: inject,
      getRegisteredFunc: getRegisteredFunc
    };

    function register(name, func) {
      self.registeredFuncs[name] = func;
    }

    function inject(func) {
      var funcString = func.toString();
      var matches = funcString.match(/^function\s+?.*?\((.*?)\)/);
      var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });

      // console.log('fs', funcString);
      // console.log('ms', matches);
      // console.log('aN', argsNames);
      // console.log('func', func);
      console.log('logging from within DI object...');
      console.log('dependencies', dependencies);
      console.log('this.modules', this.modules);

      // for (var i in this.dependencies) {
      // }

      return function () {
        var cachedFuncs = [];

        argsNames.map(function(el) {
          if (el) {
            cachedFuncs.push(self.registeredFuncs[el]);
          }
        });

        return func.apply(this, cachedFuncs); ///.apply(this, args);
      };
    }

    function getRegisteredFunc(func) {
      return self.registeredFuncs;
    }

    return self.module;
  }; // wrapping non-IIFE function literals in parens is unnecessary?

  module.exports = {
    modules: {},
    module: function (name, dependencies) {
      console.log('module function in exports getting called for arguments', arguments);
      if (arguments.length === 1) {
        for (var i = 0; i < this.modules.length; i++) {
          if (this.modules[i].name === name) {
            console.log('this.modules in exports', this.module[i]);
            return this.module[i];
          }
        }
        // throw 'DI', name, 'is not available';
      } else {
        // console.log('it always goes here to the else');
        console.log('this.module[' + dependencies + ']', this.module[dependencies]);
        console.log('creating new DI object...', name, dependencies);
        var module = new DI(name, dependencies);
        this.modules[name] = module;
        console.log('this.modules[' + name + ']=', this.modules[name]);
        return module;
      }
    }
  };
})();
