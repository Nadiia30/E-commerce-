function initMobile(){console.log("is-mobile")}function initDesktop(){console.log("is-desktop")}!function(t,n,i,e){"function"==typeof define&&define.amd?define(function(){return e(t,n,i)}):"object"==typeof exports?module.exports=e:t.ssm=e(t,n,i)}(window,document,void 0,function(t,n,i){"use strict";function e(t){this.id=t.id||function(){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<10;i++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),this.query=t.query||"all",delete t.id,delete t.query;return this.options=s({onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},t),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once")?(this.valid=!1,!1):(this.valid=!0,this.active=!1,void this.init())}function o(n){this.states=[],this.resizeTimer=null,this.configOptions=[],t.addEventListener("resize",function(t,n,i){var e;return function(){var o=this,s=arguments,r=i&&!e;clearTimeout(e),e=setTimeout(function(){e=null,i||t.apply(o,s)},n),r&&t.apply(o,s)}}(this.resizeBrowser.bind(this),a),!0)}function s(t,n){var i={};for(var e in t)i[e]=t[e];for(var o in n)i[o]=n[o];return i}function r(t){for(var n=t.length,i=0;i<n;i++)t[i]()}var a=25,h=function(){};return e.prototype={init:function(){this.test=t.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(t){var n=!1;t.matches?this.testConfigOptions("match")&&(this.enterState(),n=!0):(this.leaveState(),n=!0),n&&h()}.bind(this),this.test.addListener(this.listener)},enterState:function(){r(this.options.onFirstRun),r(this.options.onEnter),this.options.onFirstRun=[],this.active=!0},leaveState:function(){r(this.options.onLeave),this.active=!1},resizeState:function(){this.testConfigOptions("resize")&&r(this.options.onResize)},destroy:function(){this.test.removeListener(this.listener)},attachCallback:function(t,n,i){switch(t){case"enter":this.options.onEnter.push(n);break;case"leave":this.options.onLeave.push(n);break;case"resize":this.options.onResize.push(n)}"enter"===t&&i&&this.active&&n()},testConfigOptions:function(t){for(var n=this.configOptions.length,i=0;i<n;i++){var e=this.configOptions[i];if(void 0!==this.options[e.name]&&e.when===t&&!1===e.test.bind(this)())return!1}return!0},configOptions:[]},o.prototype={addState:function(t){var n=new e(t);return n.valid&&this.states.push(n),n},addStates:function(t){for(var n=t.length-1;n>=0;n--)this.addState(t[n]);return this},getState:function(t){for(var n=this.states.length-1;n>=0;n--){var i=this.states[n];if(i.id===t)return i}},isActive:function(t){return(this.getState(t)||{}).active||!1},getStates:function(t){var n,i=[];if(void 0===t)return this.states;n=t.length;for(var e=0;e<n;e++)i.push(this.getState(t[e]));return i},removeState:function(t){for(var n=this.states.length-1;n>=0;n--){var i=this.states[n];i.id===t&&(i.destroy(),this.states.splice(n,1))}return this},removeStates:function(t){for(var n=t.length-1;n>=0;n--)this.removeState(t[n]);return this},removeAllStates:function(){for(var t=this.states.length-1;t>=0;t--){this.states[t].destroy()}this.states=[]},addConfigOption:function(t){""!==(t=s({name:"",test:null,when:"resize"},t)).name&&null!==t.test&&e.prototype.configOptions.push(t)},removeConfigOption:function(t){for(var n=e.prototype.configOptions,i=n.length-1;i>=0;i--)n[i].name===t&&n.splice(i,1);e.prototype.configOptions=n},getConfigOption:function(t){var n=e.prototype.configOptions;if("string"!=typeof t)return n;for(var i=n.length-1;i>=0;i--)if(n[i].name===t)return n[i]},getConfigOptions:function(){return e.prototype.configOptions},resizeBrowser:function(){for(var t=function(t,n,i){for(var e=t.length,o=[],s=0;s<e;s++){var r=t[s];r[n]&&r[n]===i&&o.push(r)}return o}(this.states,"active",!0),n=t.length,i=0;i<n;i++)t[i].resizeState()},stateChange:function(t){if("function"!=typeof t)throw new function(t){this.message=t,this.name="Error"}("Not a function");h=t}},new o}),ssm.addState({id:"tablet",query:"(max-width: 768px)",onEnter:function(){initMobile()}}),ssm.addState({id:"desktop",query:"(min-width: 768px)",onEnter:function(){initDesktop()}});