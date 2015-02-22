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
    // var params = funcString.match(/(\[.*\])/)[0].replace(/\[\]/g, '')
    //   .split('), ').map(function(el) {
    //     console.log('el', el.match(/\d/g));
    //     return el.match(/\d/g);
    //   });
    var argsNames = matches[1].split(',').map(function (arg) { return arg.trim(); });
    var dependencies = this.dependencies;

    console.log('fs', funcString);
    console.log('ms', matches);
    console.log('aN', argsNames);
    console.log('ds', dependencies);

	var self = this;
	var func = func;

    return function () {

	  console.log('return argnames', argsNames);
	  var cachedFuncs = [];

	  argsNames.map(function(el, idx) {
	  	console.log('registry', self.registeredFuncs);
        cachedFuncs.push(self.registeredFuncs[el]);
      })
	  console.log('func()', func.apply(this, cachedFuncs));
      // var args = argsNames.map(function (el, idx) {
      // 	console.log('mapEl', el);
      // 	if (this.registeredFuncs[el]){
      // 		this.registeredFuncs[el].apply(this, params[idx]);
      // 	}
      // 	return
      //   // argName && args.push(dependencies[argName]);
      //   // return args;
      // }, []);

      // console.log('FUNC', func);
      // console.log('args', args);
      return func.apply(this, cachedFuncs); ///.apply(this, args);
    };
    // var definition = ' ' + func.prototype.constructor;
    // var funcs;
    // var args = '';

    // for (var i = 0; i < definition.length; i++) {
    //   if (definition.charAt(i) === '(') {
    //     i++;
    //     while (definition.charAt(i) !== ')') {
    //       args = args + definition.charAt(i);
    //       i++;
    //     }
    //   }
    // }

    // funcs = args.split(',');
    // console.log('funcs', funcs);
    // console.log('defs', definition);
    // for (var j = 0; j < definition.length; j++) {
    // }
  };

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
