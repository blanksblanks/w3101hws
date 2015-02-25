(function () {
  'use strict';
  // var that = this;

  var ModuleCreator = function(name, dependencies) {
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
      // console.log("ds regfunc", dependencies.registeredFuncs);
    }

    function inject(func) {
      var funcString = func.toString();
      var matches = funcString.match(/^function\s+?.*?\((.*?)\)/);
      var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });

      if (dependencies) {
        var depFuncs = dependencies.getRegisteredFunc();
        console.log('\n\ndep funcs', depFuncs);
        for (var key in depFuncs) {
          if (depFuncs.hasOwnProperty(key)) {
            register(key, depFuncs[key]);
          }
        }
      }

      // console.log('fs', funcString);
      // console.log('ms', matches);
      // console.log('aN', argsNames);
      // console.log('func', func);
      //*console.log('\n\nlogging from within DI object...');
      //*console.log('\ndependencies', dependencies);

      // console.log('DI Modules', that);
      // console.log('self.modules', self.modules);

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
      //*console.log('module function in exports getting called for arguments', arguments);
      // console.log('this modules', this.modules);
      var ds = this.modules[dependencies];
      //*console.log('\n\nthis dependencies', ds);
      // console.log('this.module[' + dependencies + ']', this.module[dependencies]);
      // console.log('creating new DI object...', name, dependencies);
      var mod = new ModuleCreator(name, ds);
      this.modules[name] = mod;
      //*console.log('this.modules[' + name + ']=', this.modules[name]);
      return mod;
    }
  };

})();
