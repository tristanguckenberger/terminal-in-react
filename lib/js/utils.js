(function(global,factory){if('function'==typeof define&&define.amd)define(['exports','react','react-object-inspector','platform'],factory);else if('undefined'!=typeof exports)factory(exports,require('react'),require('react-object-inspector'),require('platform'));else{var mod={exports:{}};factory(mod.exports,global.React,global.reactObjectInspector,global.platform),global.utils=mod.exports}})(this,function(exports,_react,_reactObjectInspector,_platform){'use strict';function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,'__esModule',{value:!0}),exports.handleLogging=function(method,addToOutput){console[method]=function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];try{var _console;(_console=console).oldLog.apply(_console,['['+method+']'].concat(args))}catch(e){throw new Error('Terminal was loaded more than once check script tags')}var res=[].concat(args).slice(0,15).map(function(arg,i){switch('undefined'==typeof arg?'undefined':_typeof(arg)){case'object':return _react2.default.createElement(_reactObjectInspector2.default,{data:arg,key:'object-'+i});case'function':return''+arg;default:return arg;}});addToOutput(res)},Object.defineProperty(console[method],'name',{value:method,writable:!1})},exports.isServer=function(){return!('undefined'!=typeof window&&window.document)},exports.getOs=function(){var os=_platform2.default.os;return null!==os.family&&0===os.family.indexOf('Windows')?'win':null!==os.family&&-1<linuxPlatforms.indexOf(os.family)?'linux':null!==os.family&&-1<darwinPlatforms.indexOf(os.family)?'darwin':'unknown'};var _react2=_interopRequireDefault(_react),_reactObjectInspector2=_interopRequireDefault(_reactObjectInspector),_platform2=_interopRequireDefault(_platform),_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&'function'==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj};(function(){console.oldLog=console.log})();var linuxPlatforms=['Ubuntu','Debian','Fedora','Red Hat','SuSE','Android'],darwinPlatforms=['OS X','iOS']});
//# sourceMappingURL=utils.js.map