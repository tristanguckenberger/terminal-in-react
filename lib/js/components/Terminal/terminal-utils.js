(function(global,factory){if('function'==typeof define&&define.amd)define(['exports','../../args/index','../../utils'],factory);else if('undefined'!=typeof exports)factory(exports,require('../../args/index'),require('../../utils'));else{var mod={exports:{}};factory(mod.exports,global.index,global.utils),global.terminalUtils=mod.exports}})(this,function(exports,_index,_utils){'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.os=void 0,exports.pluginMap=function(plugins,eachHandler){return plugins.map(function(plugin){return'function'==typeof plugin&&(plugin={class:plugin,config:void 0}),plugin}).forEach(function(pluginObj){return eachHandler(pluginObj.class,pluginObj.config)})},exports.uuidv4=function(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=0|16*Math.random(),v='x'===c?r:8|3&r;return v.toString(16)})},exports.getShortcuts=function(shortcuts,obj){return'object'===('undefined'==typeof obj?'undefined':_typeof(obj))&&Object.keys(obj).forEach(function(key){var split=key.toLowerCase().replace(/\s/g,'').split(',');split.forEach(function(osName){osName===os&&(shortcuts=_extends({},shortcuts,obj[key]))})}),shortcuts},exports.modCommands=function(commands){var newCommands={};return Object.keys(commands).forEach(function(name){var needsInstance=!1,definition=commands[name],method=definition,parse=function(i){return i};if('undefined'!=typeof definition){if('object'===('undefined'==typeof definition?'undefined':_typeof(definition))){var cmd=new _index2.default;if('undefined'!=typeof definition.options)try{cmd.options(definition.options)}catch(e){throw new Error('options for command wrong format')}parse=function(i){return cmd.parse(i,{name:name,help:!0,version:!1})},method=definition.method,needsInstance=definition.needsInstance||!1}newCommands[name]={parse:parse,method:method,needsInstance:needsInstance}}}),newCommands};var _index2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_index),_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i],source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target},_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&'function'==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?'symbol':typeof obj},os=exports.os=(0,_utils.getOs)()});
//# sourceMappingURL=terminal-utils.js.map