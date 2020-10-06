(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var na={a:!0},oa={};try{oa.__proto__=na;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function x(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function qa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.v=this.h=null}
function ra(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
qa.prototype.s=function(a){this.g=a};
function sa(a,b){a.h={la:b,X:!0};a.f=a.l||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function y(a,b,c){a.f=c;return{value:b}}
qa.prototype.C=function(a){this.f=a};
function ta(a){a.l=2;a.j=3}
function wa(a){a.l=0;a.h=null}
function xa(a){a.v=[a.h];a.l=0;a.j=0}
function ya(a){var b=a.v.splice(0)[0];(b=a.h=a.h||b)?b.X?a.f=a.l||a.j:void 0!=b.C&&a.j<b.C?(a.f=b.C,a.h=null):a.f=a.j:a.f=4}
function za(a){this.f=new qa;this.g=a}
function Aa(a,b){ra(a.f);var c=a.f.i;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ca(a)}a.f.i=null;d.call(a.f,f);return Ca(a)}
function Ca(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,sa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.X)throw b.la;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ca(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Ba(a,a.f.i["throw"],b,a.f.s):(sa(a.f,b),b=Ca(a));return b};
this["return"]=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function z(a,b){var c=new Da(new za(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.f=0;this.h=void 0;this.g=[];this.m=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ga),reject:g(this.j)}};
b.prototype.ga=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.xa(g):this.l(g)}};
b.prototype.xa=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.ja(h,g):this.l(g)};
b.prototype.j=function(g){this.s(2,g)};
b.prototype.l=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.h=h;2===this.f&&this.ha();this.v()};
b.prototype.ha=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.h)}},1)};
b.prototype.H=function(){if(this.m)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.h;return k(g)};
b.prototype.v=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.ia=function(g){var h=this.i();g.K(h.resolve,h.reject)};
b.prototype.ja=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:q}
var l,m,n=new b(function(r,q){l=r;m=q});
this.K(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.K=function(g,h){function k(){switch(l.f){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.m=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).K(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).K(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
t("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&A(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function La(){}
function Ma(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.La=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function H(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Za(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Za,Error);Za.prototype.name="CustomError";var $a=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=$a(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){return Array.prototype.concat.apply([],arguments)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;var ub=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;
function Cb(a,b){return a<b?-1:a>b?1:0}
;var J;a:{var Db=B.navigator;if(Db){var Eb=Db.userAgent;if(Eb){J=Eb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function Fb(){}
;function Gb(a){Gb[" "](a);return a}
Gb[" "]=La;var Hb=K("Opera"),Ib=K("Trident")||K("MSIE"),Jb=K("Edge"),Kb=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Lb=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge");function Mb(){var a=B.document;return a?a.documentMode:void 0}
var Nb;a:{var Ob="",Pb=function(){var a=J;if(Kb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Jb)return/Edge\/([\d\.]+)/.exec(a);if(Ib)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Lb)return/WebKit\/(\S+)/.exec(a);if(Hb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Pb&&(Ob=Pb?Pb[1]:"");if(Ib){var Qb=Mb();if(null!=Qb&&Qb>parseFloat(Ob)){Nb=String(Qb);break a}}Nb=Ob}var Rb=Nb,Sb={},Tb;if(B.document&&Ib){var Ub=Mb();Tb=Ub?Ub:parseInt(Rb,10)||void 0}else Tb=void 0;var Vb=Tb;var Wb=K("Firefox")||K("FxiOS"),Xb=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),Yb=K("iPad");var Zb={},$b=null;var L=window;function ac(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ic(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,jc[c])c=jc[c];else{c=String(c);if(!jc[c]){var f=/function\s+([^\(]+)/m.exec(c);jc[c]=f?f[1]:"[Anonymous]"}c=jc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function ic(a,b){b||(b={});b[kc(a)]=!0;var c=a.stack||"",d=a.Ma;d&&!b[kc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=ic(d,b));return c}
function kc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var jc={};function lc(a){this.f=a||{cookie:""}}
p=lc.prototype;p.isEnabled=function(){return navigator.cookieEnabled};
p.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ta;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Y}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ub(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Y:0,path:b,domain:c});return d};
p.isEmpty=function(){return!this.f.cookie};
p.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ub(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var mc=new lc("undefined"==typeof document?null:document);function nc(a,b){this.width=a;this.height=b}
p=nc.prototype;p.clone=function(){return new nc(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.isEmpty=function(){return!(this.width*this.height)};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function oc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=$a(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function pc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var rc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function sc(a){return a?decodeURI(a):a}
function tc(a){return sc(a.match(rc)[3]||null)}
function uc(a){var b=a.match(rc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function vc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)vc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function wc(a){var b=[],c;for(c in a)vc(c,a[c],b);return b.join("&")}
var xc=/#|$/;function yc(a){var b=zc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ac(){var a=[];yc(function(b){a.push(b)});
return a}
var zc={ya:"allow-forms",za:"allow-modals",Aa:"allow-orientation-lock",Ba:"allow-pointer-lock",Ca:"allow-popups",Da:"allow-popups-to-escape-sandbox",Ea:"allow-presentation",Fa:"allow-same-origin",Ga:"allow-scripts",Ha:"allow-top-navigation",Ia:"allow-top-navigation-by-user-activation"},Bc=gb(function(){return Ac()});
function Cc(){var a=pc(),b={};I(Bc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Dc(){this.h=this.h;this.i=this.i}
Dc.prototype.h=!1;Dc.prototype.dispose=function(){this.h||(this.h=!0,this.I())};
Dc.prototype.I=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Ec={};function Fc(){}
function Gc(a,b){if(b!==Ec)throw Error("Bad secret");this.f=a}
x(Gc,Fc);Gc.prototype.toString=function(){return this.f};new Gc("about:blank",Ec);new Gc("about:invalid#zTSz",Ec);var Hc=(new Date).getTime();function Ic(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Jc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,q=0;64>q;q+=4)r[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Ya=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ma=F^v&(w^F);var Ja=1518500249}else ma=v^w^F,Ja=1859775393;else 60>q?(ma=v&w|F&(v|w),Ja=2400959708):(ma=v^w^F,Ja=3395469782);ma=((n<<5|n>>>27)&4294967295)+ma+Ya+Ja+r[q]&4294967295;Ya=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ma}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Ya&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],v=0,w=n.length;v<w;++v)q.push(n.charCodeAt(v));n=q}r||(r=n.length);q=0;if(0==l)for(;q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var v=24;0<=v;v-=8)n[r++]=e[q]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ka:function(){for(var n=d(),r="",q=0;q<n.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return r}}}
;function Kc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),Lc(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=Lc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Lc(a){var b=Jc();b.update(a);return b.ka().toLowerCase()}
;function Mc(a){var b=Ic(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new lc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new lc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Kc(Ic(d),
c,a||null)].join(" "):null}return null}
;function Nc(){this.g=[];this.f=-1}
Nc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Nc.prototype.get=function(a){return!!this.g[a]};
function Oc(a){-1==a.f&&(a.f=ab(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Pc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Pc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Qc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Rc(a){B.setTimeout(function(){throw a;},0)}
var Sc;function Tc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=pc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.W;c.W=null;e()}};
return function(e){d.next={W:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Uc(){this.g=this.f=null}
var Wc=new Pc(function(){return new Vc},function(a){a.reset()});
Uc.prototype.add=function(a,b){var c=Wc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Uc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Vc(){this.next=this.scope=this.f=null}
Vc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Vc.prototype.reset=function(){this.next=this.scope=this.f=null};function Xc(a,b){Yc||Zc();$c||(Yc(),$c=!0);ad.add(a,b)}
var Yc;function Zc(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Yc=function(){a.then(bd)}}else Yc=function(){var b=bd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!K("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Sc||(Sc=Tc()),Sc(b)):B.setImmediate(b)}}
var $c=!1,ad=new Uc;function bd(){for(var a;a=ad.remove();){try{a.f.call(a.scope)}catch(b){Rc(b)}Qc(Wc,a)}$c=!1}
;function cd(){this.g=-1}
;function dd(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(dd,cd);dd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function ed(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
dd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)ed(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){ed(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){ed(this,e);f=0;break}}this.h=f;this.j+=b}};
dd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;ed(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var fd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function gd(){}
gd.prototype.next=function(){throw fd;};
gd.prototype.B=function(){return this};
function hd(a){if(a instanceof gd)return a;if("function"==typeof a.B)return a.B(!1);if(Ma(a)){var b=0,c=new gd;c.next=function(){for(;;){if(b>=a.length)throw fd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function id(a,b){if(Ma(a))try{I(a,b,void 0)}catch(c){if(c!==fd)throw c;}else{a=hd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==fd)throw c;}}}
function jd(a){if(Ma(a))return eb(a);a=hd(a);var b=[];id(a,function(c){b.push(c)});
return b}
;function kd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof kd)for(c=ld(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ld(a){md(a);return a.f.concat()}
p=kd.prototype;p.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||nd;md(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function nd(a,b){return a===b}
p.isEmpty=function(){return 0==this.g};
p.clear=function(){this.h={};this.i=this.g=this.f.length=0};
p.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&md(this),!0):!1};
function md(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
p.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
p.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
p.forEach=function(a,b){for(var c=ld(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
p.clone=function(){return new kd(this)};
p.B=function(a){md(this);var b=0,c=this.i,d=this,e=new gd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw fd;var f=d.f[b++];return a?f:d.h[f]};
return e};var od=!Ib||9<=Number(Vb),pd;
if(pd=Ib){var qd;if(Object.prototype.hasOwnProperty.call(Sb,"9"))qd=Sb["9"];else{for(var rd=0,sd=ub(String(Rb)).split("."),td=ub("9").split("."),ud=Math.max(sd.length,td.length),vd=0;0==rd&&vd<ud;vd++){var wd=sd[vd]||"",xd=td[vd]||"";do{var yd=/(\d*)(\D*)(.*)/.exec(wd)||["","","",""],zd=/(\d*)(\D*)(.*)/.exec(xd)||["","","",""];if(0==yd[0].length&&0==zd[0].length)break;rd=Cb(0==yd[1].length?0:parseInt(yd[1],10),0==zd[1].length?0:parseInt(zd[1],10))||Cb(0==yd[2].length,0==zd[2].length)||Cb(yd[2],zd[2]);
wd=yd[3];xd=zd[3]}while(0==rd)}qd=Sb["9"]=0<=rd}pd=!qd}var Ad=pd,Bd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",La,b),B.removeEventListener("test",La,b)}catch(c){}return a}();function Cd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.g=!1}
Cd.prototype.stopPropagation=function(){this.g=!0};
Cd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Dd(a,b){Cd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
G(Dd,Cd);var Ed={2:"touch",3:"pen",4:"mouse"};
Dd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Kb){a:{try{Gb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ed[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&this.preventDefault()};
Dd.prototype.stopPropagation=function(){Dd.A.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Dd.prototype.preventDefault=function(){Dd.A.preventDefault.call(this);var a=this.h;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ad)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Zd="closure_listenable_"+(1E6*Math.random()|0),$d=0;function ae(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.L=e;this.key=++$d;this.G=this.J=!1}
function be(a){a.G=!0;a.listener=null;a.f=null;a.src=null;a.L=null}
;function ce(a){this.src=a;this.listeners={};this.f=0}
ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=de(a,b,d,e);-1<g?(b=a[g],c||(b.J=!1)):(b=new ae(b,this.src,f,!!d,e),b.J=c,a.push(b));return b};
ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=de(e,b,c,d);return-1<b?(be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ee(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function de(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&f.capture==!!c&&f.L==d)return e}return-1}
;var fe="closure_lm_"+(1E6*Math.random()|0),ge={},he=0;function ie(a,b,c,d,e){if(d&&d.once)je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):le(a,b,c,!1,d,e)}
function le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=me(a);h||(a[fe]=h=new ce(a));c=h.add(b,c,d,g,f);if(!c.f){d=ne();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Bd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");he++}}
function ne(){var a=pe,b=od?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else c=ke(c),a&&a[Zd]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):le(a,b,c,!0,d,e)}
function qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=ke(c),a&&a[Zd])?a.f.remove(String(b),c,d,e):a&&(a=me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=de(b,c,d,e)),(c=-1<a?b[a]:null)&&re(c))}
function re(a){if("number"!==typeof a&&a&&!a.G){var b=a.src;if(b&&b[Zd])ee(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);he--;(c=me(b))?(ee(c,a),0==c.f&&(c.src=null,b[fe]=null)):be(a)}}}
function oe(a){return a in ge?ge[a]:ge[a]="on"+a}
function se(a,b,c,d){var e=!0;if(a=me(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.G&&(f=te(f,d),e=e&&!1!==f)}return e}
function te(a,b){var c=a.listener,d=a.L||a.src;a.J&&re(a);return c.call(d,b)}
function pe(a,b){if(a.G)return!0;if(!od){var c=b||C("window.event"),d=new Dd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.g&&0<=g;g--){d.f=c[g];var h=se(c[g],f,!0,d);e=e&&h}for(g=0;!d.g&&g<c.length;g++)d.f=c[g],h=se(c[g],f,!1,d),e=e&&h}return e}return te(a,new Dd(b,this))}
function me(a){a=a[fe];return a instanceof ce?a:null}
var ue="__closure_events_fn_"+(1E9*Math.random()>>>0);function ke(a){if("function"===typeof a)return a;a[ue]||(a[ue]=function(b){return a.handleEvent(b)});
return a[ue]}
;function ve(){Dc.call(this);this.f=new ce(this);this.j=this;this.g=null}
G(ve,Dc);ve.prototype[Zd]=!0;ve.prototype.addEventListener=function(a,b,c,d){ie(this,a,b,c,d)};
ve.prototype.removeEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
ve.prototype.dispatchEvent=function(a){var b=this.g;if(b){var c=[];for(var d=1;b;b=b.g)c.push(b),++d}b=this.j;d=a.type||a;if("string"===typeof a)a=new Cd(a,b);else if(a instanceof Cd)a.target=a.target||b;else{var e=a;a=new Cd(d,b);sb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var g=a.f=c[f];e=we(g,d,!0,a)&&e}a.g||(g=a.f=b,e=we(g,d,!0,a)&&e,a.g||(e=we(g,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)g=a.f=c[f],e=we(g,d,!1,a)&&e;return e};
ve.prototype.I=function(){ve.A.I.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,be(d[e]);delete a.listeners[c];a.f--}}this.g=null};
function we(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.capture==c){var h=g.listener,k=g.L||g.src;g.J&&ee(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var xe=B.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=La)try{var b=this;a.call(void 0,function(c){ye(b,2,c)},function(c){ye(b,3,c)})}catch(c){ye(this,3,c)}}
function ze(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
ze.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Ae=new Pc(function(){return new ze},function(a){a.reset()});
function Be(a,b,c){var d=Ae.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ce(a){if(a instanceof M)return a;var b=new M(La);ye(b,2,a);return b}
function De(a){return new M(function(b,c){c(a)})}
function Ee(a,b,c){Fe(a,b,c,null)||Xc(Wa(b,a))}
function Ge(a){return new M(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],Ee(k,Wa(f,h),g);
else b(e)})}
M.prototype.then=function(a,b,c){return He(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
M.prototype.$goog_Thenable=!0;function Ie(a,b){return He(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new Je(a);Xc(function(){Ke(this,b)},this)}};
function Ke(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Ke(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Le(c),Me(c,e,3,b)))}a.h=null}else ye(a,3,b)}
function Ne(a,b){a.g||2!=a.f&&3!=a.f||Oe(a);a.i?a.i.next=b:a.g=b;a.i=b}
function He(a,b,c,d){var e=Be(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Je?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Ne(a,e);return e.f}
M.prototype.v=function(a){this.f=0;ye(this,2,a)};
M.prototype.H=function(a){this.f=0;ye(this,3,a)};
function ye(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,Fe(c,a.v,a.H,a)||(a.m=c,a.f=b,a.h=null,Oe(a),3!=b||c instanceof Je||Pe(a,c)))}
function Fe(a,b,c,d){if(a instanceof M)return Ne(a,Be(b||La,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(D(a))try{var f=a.then;if("function"===typeof f)return Qe(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Qe(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Oe(a){a.l||(a.l=!0,Xc(a.s,a))}
function Le(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.s=function(){for(var a;a=Le(this);)Me(this,a,this.f,this.m);this.l=!1};
function Me(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Re(b,c,d);else try{b.h?b.g.call(b.context):Re(b,c,d)}catch(e){Se.call(null,e)}Qc(Ae,b)}
function Re(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pe(a,b){a.j=!0;Xc(function(){a.j&&Se.call(null,b)})}
var Se=Rc;function Je(a){Za.call(this,a)}
G(Je,Za);Je.prototype.name="cancel";function N(a){Dc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
G(N,Dc);p=N.prototype;p.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Te(a,b,c){var d=Ue;if(a=d.g[a]){var e=d.f;(a=bb(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.P(a)}}
p.P=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.l?(this.j.push(a),this.f[a+1]=La):(c&&cb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
p.N=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ve(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.P(c)}}return 0!=e}return!1};
function Ve(a,b,c){Xc(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.g[a];b&&(I(b,this.P,this),delete this.g[a])}else this.f.length=0,this.g={}};
p.I=function(){N.A.I.call(this);this.clear();this.j.length=0};function We(a){this.f=a}
We.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,xe(b))};
We.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
We.prototype.remove=function(a){this.f.remove(a)};function Xe(a){this.f=a}
G(Xe,We);function Ye(a){this.data=a}
function Ze(a){return void 0===a||a instanceof Ye?a:new Ye(a)}
Xe.prototype.set=function(a,b){Xe.A.set.call(this,a,Ze(b))};
Xe.prototype.g=function(a){a=Xe.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xe.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $e(a){this.f=a}
G($e,Xe);$e.prototype.set=function(a,b,c){if(b=Ze(b)){if(c){if(c<Date.now()){$e.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}$e.A.set.call(this,a,b)};
$e.prototype.g=function(a){var b=$e.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())$e.prototype.remove.call(this,a);else return b}};function af(){}
;function bf(){}
G(bf,af);bf.prototype.clear=function(){var a=jd(this.B(!0)),b=this;I(a,function(c){b.remove(c)})};function cf(a){this.f=a}
G(cf,bf);p=cf.prototype;p.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
p.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeItem(a)};
p.B=function(a){var b=0,c=this.f,d=new gd;d.next=function(){if(b>=c.length)throw fd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){this.f.clear()};
p.key=function(a){return this.f.key(a)};function df(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(df,cf);function ef(a,b){this.g=a;this.f=null;if(Ib&&!(9<=Number(Vb))){ff||(ff=new kd);this.f=ff.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ff.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
G(ef,bf);var gf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ff=null;function hf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gf[b]})}
p=ef.prototype;p.isAvailable=function(){return!!this.f};
p.set=function(a,b){this.f.setAttribute(hf(a),b);jf(this)};
p.get=function(a){a=this.f.getAttribute(hf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){this.f.removeAttribute(hf(a));jf(this)};
p.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new gd;d.next=function(){if(b>=c.length)throw fd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
p.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);jf(this)};
function jf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function kf(a,b){this.g=a;this.f=b+"::"}
G(kf,bf);kf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
kf.prototype.get=function(a){return this.g.get(this.f+a)};
kf.prototype.remove=function(a){this.g.remove(this.f+a)};
kf.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new gd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var lf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",lf);function mf(a){var b=arguments;1<b.length?lf[b[0]]=b[1]:1===b.length&&Object.assign(lf,b[0])}
function O(a,b){return a in lf?lf[a]:b}
;var nf=[];function of(a){nf.forEach(function(b){return b(a)})}
function pf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){qf(b),of(b)}}:a}
function qf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),mf("ERRORS",b))}
function rf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),mf("ERRORS",b))}
;var sf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++sf});var tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in tf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",jb);var vf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",vf);
function wf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function xf(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
var yf=gb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function zf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=wf(a,b,c,d);if(!e){e=++vf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new uf(h);if(!qc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new uf(h);
h.currentTarget=a;return c.call(a,h)};
g=pf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d]}}}
;function Af(a,b){"function"===typeof a&&(a=pf(a));return window.setTimeout(a,b)}
function Bf(a){"function"===typeof a&&(a=pf(a));return window.setInterval(a,250)}
;function Cf(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Df(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?fb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};qf(h)}}}return b}
function Ef(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Df(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=wc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Ff={};function Gf(a){return Ff[a]||(Ff[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Hf={},If=[],Ue=new N,Jf={};function Kf(){for(var a=u(If),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Lf(a,b){b||(b=document);var c=eb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):oc(d,b);d=eb(d);return db(c,d)}
function P(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Gf(b)]:a.getAttribute("data-"+b):null;return c}
function Mf(a,b){Ue.N.apply(Ue,arguments)}
;function Nf(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function R(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Of(a,b,c){Pf||(Pf={},zf(window,"message",Va(a.i,a)));Pf[c]=b}
Nf.prototype.i=function(a){if(a.origin==R(this,"host")||a.origin==R(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Pf[b.id])a.s=!0,a.s&&(I(a.m,a.V,a),a.m.length=0),a.ea(b)}};
var Pf=null;function S(a){a=Qf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Rf(a,b){var c=Qf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Qf(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function Sf(){}
function Tf(a,b){return Uf(a,0,b)}
;function Vf(){}
x(Vf,Sf);function Uf(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Af(a,c||0)}
Vf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Vf.f=void 0;Vf.g=function(){Vf.f||(Vf.f=new Vf)};
Vf.g();var Wf=B.ytPubsubPubsubInstance||new N,Xf=B.ytPubsubPubsubSubscribedKeys||{},Yf=B.ytPubsubPubsubTopicToKeys||{},Zf=B.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.P;N.prototype.publish=N.prototype.N;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",Wf);E("ytPubsubPubsubTopicToKeys",Yf);E("ytPubsubPubsubIsSynchronous",Zf);E("ytPubsubPubsubSubscribedKeys",Xf);var $f=window,T=$f.ytcsi&&$f.ytcsi.now?$f.ytcsi.now:$f.performance&&$f.performance.timing&&$f.performance.now&&$f.performance.timing.navigationStart?function(){return $f.performance.timing.navigationStart+$f.performance.now()}:function(){return(new Date).getTime()};var ag=Rf("initial_gel_batch_timeout",1E3),bg=Math.pow(2,16)-1,cg=null,dg=0,eg=void 0,fg=0,gg=0,hg=0,ig=!0,jg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",jg);var kg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",kg);function Rg(){window.clearTimeout(fg);window.clearTimeout(gg);gg=0;eg&&eg.isReady()?(Sg(),jg.clear()):Tg()}
function Tg(){S("web_gel_timeout_cap")&&!gg&&(gg=Af(Rg,6E4));window.clearTimeout(fg);var a=O("LOGGING_BATCH_TIMEOUT",Rf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&ig&&(a=ag);fg=Af(Rg,a)}
function Sg(){for(var a=eg,b=Math.round(T()),c=u(jg),d=c.next();!d.done;d=c.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=lb({context:Ug(a.f||Vg())});e.events=f;(f=kg[d])&&Wg(e,d,f);delete kg[d];Xg(e,b);Yg(a,"log_event",e,{retry:!0,onSuccess:function(){dg=Math.round(T()-b)}});
ig=!1}}
function Xg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*bg/2));d++;d>bg&&(d=1);mf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;cg&&dg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:cg,roundtripMs:String(dg)});cg=c;dg=0}}
function Wg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Zg=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Zg);function $g(a){var b=ah;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(bh(b),ch(b));b.ca_type="image";a&&(b.bid=a);return b}
function bh(a){var b={};b.dt=Hc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function ch(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new nc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new nc(-12245933,-12245933)}k=m;m={};l=new Nc;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=Cc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Oc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var ah=new function(){var a=window.document;this.f=window;this.g=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Cf($g(a))});var dh="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function eh(){if(!dh)return null;var a=dh();return"open"in a?a:null}
;var fh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},gh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
hh=!1;
function ih(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(rc)[1]||null,e=tc(a);d&&e?(d=c,c=a.match(rc),d=d.match(rc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?tc(c)==e&&(Number(c.match(rc)[4]||null)||null)==(Number(a.match(rc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in fh)e=O(fh[f]),!e||!c&&tc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!tc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!tc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!tc(a))b["X-YouTube-Ad-Signals"]=Cf($g(void 0));return b}
function jh(a){var b=window.location.search,c=tc(a),d=sc(a.match(rc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Df(b),f={};I(gh,function(g){e[g]&&(f[g]=e[g])});
return Ef(a,f||{},!1)}
function kh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=lh(a,b);var d=mh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.T&&b.T.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ba&&0<b.timeout&&(f=Af(function(){e||(e=!0,window.clearTimeout(f),b.ba.call(b.context||B))},b.timeout))}else nh(a,b)}
function nh(a,b){var c=b.format||"JSON";a=lh(a,b);var d=mh(a,b),e=!1,f=oh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=ph(a,c,k,b.Na);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.T&&b.T.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.M&&0<b.timeout){var g=b.M;var h=Af(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function lh(a,b){b.Ra&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.wa;d&&(d[c]&&delete d[c],a=Ef(a,d||{},!0));return a}
function mh(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Qa||tc(a)&&!b.withCredentials&&tc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Df(e),sb(e,f),e=b.da&&"JSON"==b.da?JSON.stringify(e):wc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!hh&&c&&"POST"!=b.method&&
(hh=!0,qf(Error("AJAX request with postData should use POST")));return e}
function ph(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,rf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?qh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=rh(g)})}d&&sh(e);
return e}
function sh(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===tb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(g){B.console&&B.console.error(g.message)}tb=e}else tb=e}(e=tb)&&e.createHTML(d);a[c]=new Fb}else sh(a[b])}}
function qh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function rh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function oh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&pf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=eh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=jh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ih(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function th(){for(var a={},b=u(Object.entries(Df(O("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function uh(){return"INNERTUBE_API_KEY"in lf&&"INNERTUBE_API_VERSION"in lf}
function Vg(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),ma:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),na:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),pa:O("INNERTUBE_CONTEXT_HL",void 0),oa:O("INNERTUBE_CONTEXT_GL",void 0),qa:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ug(a){var b={client:{hl:a.pa,gl:a.oa,clientName:a.na,clientVersion:a.innertubeContextClientVersion,configInfo:a.ma}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=O("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=O("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=O("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);O("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,th());return b}
function vh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ka||O("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ja:b=Mc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
;function wh(a){a=Object.assign({},a);delete a.Authorization;var b=Mc();if(b){var c=new dd;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ma(b);void 0===c&&(c=0);if(!$b){$b={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Zb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===$b[k]&&($b[k]=h)}}}c=Zb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
function xh(a){a=wh(a);var b=new dd;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function yh(){var a=new df;(a=a.isAvailable()?new kf(a,"yt.innertube"):null)||(a=new ef("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new $e(a):null;this.g=document.domain||window.location.hostname}
yh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(xe(b))}catch(f){return}else e=escape(b);b=this.g;mc.set(""+a,e,{Y:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
yh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=mc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;mc.remove(""+a,"/",void 0===b?"youtube.com":b)};var zh;function Ah(){zh||(zh=new yh);return zh}
function Bh(a,b,c,d){if(d)return null;d=Ah().get("nextId",!0)||1;var e=Ah().get("requests",!0)||{};e[d]={method:a,request:b,authState:wh(c),requestTime:Math.round(T())};Ah().set("nextId",d+1,86400,!0);Ah().set("requests",e,86400,!0);return d}
function Ch(a){var b=Ah().get("requests",!0)||{};delete b[a];Ah().set("requests",b,86400,!0)}
function Dh(a){var b=Ah().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=wh(vh(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Yg(a,d.method,e,{}));delete b[c]}}Ah().set("requests",b,86400,!0)}}
;function Eh(){}
;var Fh=new ve;function Gh(){var a=Error.call(this,"No user identifier specified.");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Gh.prototype)}
x(Gh,Error);var Hh=Xb||Yb;function Ih(){var a=/WebKit\/([0-9]+)/.exec(J);return!!(a&&600<=parseInt(a[1],10))}
function Jh(){var a=/WebKit\/([0-9]+)/.exec(J);return!!(a&&602<=parseInt(a[1],10))}
;function Kh(a){if(!a)throw Error();throw a;}
function Lh(a){return a}
function V(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={F:0};f.F<a.length;f={F:f.F},++f.F)Mh(V.resolve(a[f.F]).then(function(g){return function(h){d[g.F]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Lh,e=null!==b&&void 0!==b?b:Kh;return new V(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Nh(c,c,d,f,g)}),c.onRejected.push(function(){Oh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Nh(c,c,d,f,g):"REJECTED"===c.state.status&&Oh(c,c,e,f,g)})};
function Mh(a,b){a.then(void 0,b)}
function Nh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?Ph(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?Ph(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ph(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?Ph(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Qh(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Qh.prototype)}
x(Qh,Error);function Rh(){var a=Error.call(this,"IndexedDB is not supported.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Rh.prototype)}
x(Rh,Error);function Sh(){var a=Error.call(this,"The current transaction exceeded its quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Sh.prototype)}
x(Sh,Error);function Th(){var a=Error.call(this,"The current transaction may have failed because of exceeding quota limitations.");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Th.prototype)}
x(Th,Error);function Uh(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
function Vh(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Wh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xh(a){return new M(function(b,c){Wh(a,b,c)})}
function W(a){return new V(function(b,c){Wh(a,b,c)})}
;function Yh(a,b){this.f=a;this.options=b}
p=Yh.prototype;p.add=function(a,b,c){return Zh(this,[a],"readwrite",function(d){return $h(d,a).add(b,c)})};
p.clear=function(a){return Zh(this,[a],"readwrite",function(b){return $h(b,a).clear()})};
p.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Zh(this,[a],"readonly",function(c){return $h(c,a).count(b)})};
function ai(a,b,c){a=a.f.createObjectStore(b,c);return new bi(a)}
p["delete"]=function(a,b){return Zh(this,[a],"readwrite",function(c){return $h(c,a)["delete"](b)})};
p.get=function(a,b){return Zh(this,[a],"readwrite",function(c){return $h(c,a).get(b)})};
function ci(a,b){return Zh(a,["databases"],"readwrite",function(c){c=$h(c,"databases");return W(c.f.put(b,void 0))})}
function Zh(a,b,c,d){a=a.f.transaction(b,void 0===c?"readonly":c);a=new di(a);return ei(a,d)}
function bi(a){this.f=a}
p=bi.prototype;p.add=function(a,b){return W(this.f.add(a,b))};
p.clear=function(){return W(this.f.clear()).then(function(){})};
p.count=function(a){return W(this.f.count(a))};
p["delete"]=function(a){return W(this.f["delete"](a))};
p.get=function(a){return W(this.f.get(a))};
p.index=function(a){return new fi(this.f.index(a))};
p.getName=function(){return this.f.name};
function di(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;e?("QuotaExceededError"===e.name?rf(new Sh):"UnknownError"===e.name&&rf(new Th),d(e)):d(new Qh)})})}
function ei(a,b){var c=new M(function(d,e){Mh(b(a).then(function(f){try{a.commit(),d(f)}catch(g){e(g)}}),e)});
return Ge([c,a.done]).then(function(d){return u(d).next().value})}
di.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Qh;};
di.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function $h(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new bi(c),a.g.set(c,d));return d}
function fi(a){this.f=a}
fi.prototype.count=function(a){return W(this.f.count(a))};
fi.prototype.get=function(a){return W(this.f.get(a))};
function gi(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return hi(a).then(function(d){return Vh(d,c)})}
function ii(a,b){this.request=a;this.f=b}
function hi(a){return W(a).then(function(b){return null===b?null:new ii(a,b)})}
ii.prototype["delete"]=function(){return W(this.f["delete"]()).then(function(){})};
ii.prototype.update=function(a){return W(this.f.update(a))};function ji(a,b,c){function d(){n||(n=new Yh(f.result,{closed:m}));return n}
var e=di,f=self.indexedDB.open(a,b),g=c.blocked,h=c.blocking,k=c.Ua,l=c.upgrade,m=c.closed,n;l&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),v=new e(f.transaction);l(q,r.oldVersion,r.newVersion,v)});
g&&f.addEventListener("blocked",function(){g()});
return Xh(f).then(function(r){h&&r.addEventListener("versionchange",function(){h(d())});
k&&r.addEventListener("close",function(){k()});
return d()})}
function ki(a,b,c){c=void 0===c?{}:c;return ji(a,b,c)}
function li(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return Xh(c).then(function(){})}
;var mi,ni,oi=["getAll","getAllKeys","getKey","openKeyCursor"],pi=["getAll","getAllKeys","getKey","openKeyCursor"];function qi(){return H(this,function b(){var c,d;return z(b,function(e){switch(e.f){case 1:if(Hh&&Ih()&&!Jh()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Jb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}ta(e);return y(e,Ie(ki("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.g,!d)return e["return"](!1);case 3:xa(e);if(d)try{d.close()}catch(f){}ya(e);break;case 2:return wa(e),e["return"](!1);case 4:return e["return"](!0)}})})}
function ri(){return void 0!==mi?Ce(mi):new M(function(a){qi().then(function(b){mi=b;a(b)})})}
function si(){return void 0!==ni?Ce(ni):ri().then(function(a){if(!a)return!1;var b=u(oi);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(pi);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return ni=a})}
;function ti(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
;var ui;function vi(){function a(b){b.close();ui=void 0}
ui||(ui=Ie(ki("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&ai(b,"databases",{keyPath:"actualName"})}}),function(b){return Uh(b)?ki("YtIdbMeta",void 0,{blocking:a}):De(b)}));
return ui}
function wi(a){return vi().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return ci(b,a)})})}
function xi(a){return vi().then(function(b){return b["delete"]("databases",a)})}
;function yi(a){return{actualName:a,publicName:a,userIdentifier:void 0,signedIn:!1}}
function zi(a){return yi(a);throw new Gh;}
function Ai(a,b,c){ti(a);var d;try{b?d=yi(a):d=zi(a)}catch(e){return De(e)}return Ie(wi(d).then(function(){return c(d)}),function(e){return Ie(xi(d.actualName),function(){}).then(function(){return De(e)})})}
function Bi(){return ri().then(function(a){if(!a)throw new Rh;})}
function Ci(a,b,c){c=void 0===c?{}:c;return Bi().then(function(){return Ai(a,!1,function(d){return ki(d.actualName,b,c)})})}
function Di(a,b,c){c=void 0===c?{}:c;return Bi().then(function(){return Ai(a,!0,function(d){return ki(d.actualName,b,c)})})}
function Ei(a,b){b=void 0===b?{}:b;ti(a);var c;return Bi().then(function(){c=zi(a);return li(c.actualName,b)}).then(function(){return xi(c.actualName)})}
function Fi(a,b){b=void 0===b?{}:b;ti(a);return Bi().then(function(){return li(a,b)}).then(function(){return xi(a)})}
;function Gi(a){a=Error.call(this,"Object store not created ('"+a+"')");this.message=a.message;"stack"in a&&(this.stack=a.stack);this.name="YtIdbKnownError";Object.setPrototypeOf(this,Gi.prototype)}
x(Gi,Error);function Hi(a,b){for(var c=u(Object.keys(b.ua)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function Ii(a,b){this.name=a;this.options=b;this.g=!1;ti(a)}
Ii.prototype.open=function(){var a=this;if(!this.f){var b=this.options.va?Di:Ci,c=function(){a.f===f&&(a.f=void 0);Fh.f.remove("authchanged",c,void 0,void 0)},d={blocking:function(g){g.close()},
closed:c,upgrade:this.options.upgrade},e=function(){return Ie(b(a.name,a.options.version,d).then(function(g){if(Wb){var h=Hi(g,a.options);if(void 0!==h){if(Wb&&!a.g)return a.g=!0,a["delete"]().then(function(){return e()});
throw new Gi(h);}}return g}),function(g){if(Uh(g))return b(a.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));
c();throw g;})};
var f=e();Fh.f.add("authchanged",c,!0,void 0,void 0);this.f=f}return this.f};
Ii.prototype["delete"]=function(a){a=void 0===a?{}:a;return(this.options.va?Fi:Ei)(this.name,a)};function Ji(){V.call(this,function(){});
throw Error("Not allowed to instantiate the thennable outside of the core library.");}
x(Ji,V);Ji.reject=V.reject;Ji.resolve=V.resolve;Ji.all=V.all;var Ki={},Li=function(a,b){var c;return function(){c||(c=new Ii(a,b));return c}}("LogsDataBase",{ua:(Ki.LogsRequestsStore=!0,Ki.sapisid=!0,Ki),
upgrade:function(a,b){1>b&&(ai(a,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),ai(a,"sapisid"))},
version:1});function Mi(a){return H(this,function c(){var d,e,f;return z(c,function(g){if(1==g.f)return y(g,Ni(),2);if(3!=g.f)return d=g.g,y(g,Li().open(),3);e=g.g;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return g["return"](e.add("LogsRequestsStore",f))})})}
function Oi(){return H(this,function b(){var c,d,e,f,g,h;return z(b,function(k){switch(k.f){case 1:return y(k,Ni(),2);case 2:return c=k.g,d=["NEW",c,0],e=["NEW",c,T()],f=IDBKeyRange.bound(d,e),y(k,Li().open(),3);case 3:return g=k.g,h=void 0,y(k,Zh(g,["LogsRequestsStore"],"readwrite",function(l){return gi($h(l,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(m){m.f.value&&(h=m.f.value,h.status="QUEUED",m.update(h))})}),4);
case 4:return k["return"](h)}})})}
function Pi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](Zh(d,["LogsRequestsStore"],"readwrite",function(f){var g=$h(f,"LogsRequestsStore");return g.get(a).then(function(h){if(h)return h.status="QUEUED",W(g.f.put(h,void 0)).then(function(){return h})})}))})})}
function Qi(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](Zh(d,["LogsRequestsStore"],"readwrite",function(f){var g=$h(f,"LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",h.sendCount+=1,W(g.f.put(h,void 0)).then(function(){return h})):Ji.resolve(void 0)})}))})})}
function Ri(a){return H(this,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Li().open(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function Ni(){return H(this,function b(){var c;return z(b,function(d){if(1==d.f){Eh.f||(Eh.f=new Eh);var e={};var f=Mc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=O("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in lf||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in lf&&(e["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));e=Ce(e);return y(d,e,2)}c=d.g;return d["return"](xh(c))})})}
;var Si=Rf("network_polling_interval",3E4);function Ti(){this.i=0;this.f=Ui();Vi(this);Wi(this)}
function Xi(){Ti.f||(Ti.f=new Ti);return Ti.f}
function Yi(a){a.f!==Ui()&&qf(Error("NetworkStatusManager isOnline does not match window status"));return a.f}
function Zi(a){var b=$i,c=aj;(new M(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)});
bj(a)}
function Ui(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Wi(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function Vi(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function bj(a){a.i||(cj(a),Ui()&&a.g&&a.g())}
function cj(a){a.i=Tf(function(){Ui()?(!1===a.f&&qf(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&qf(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());cj(a)},Si)}
;var dj=Rf("networkless_throttle_timeout")||100,ej=Rf("networkless_retry_attempts")||1,fj=0;function gj(a,b){b=void 0===b?{}:b;hj().then(function(c){var d=Yi(Xi());if(!c||S("networkless_bypass_write")||d&&S("vss_networkless_bypass_write"))nh(a,b);else{var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};Mi(e).then(function(f){e.id=f;f=Xi();Yi(f)&&!S("networkless_always_offline")?ij(e):Zi(f)})["catch"](function(f){ij(e);
qf(f)})}})}
function $i(){var a=this;fj||(fj=Uf(function(){return H(a,function c(){var d;return z(c,function(e){if(1==e.f)return y(e,Oi(),2);if(3!=e.f)return d=e.g,d?y(e,ij(d),3):(aj(),e["return"]());fj=0;$i();e.f=0})})},1,dj))}
function aj(){var a=fj;if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}fj=0}
function ij(a){return H(this,function c(){var d;return z(c,function(e){switch(e.f){case 1:if(!a.id){e.C(2);break}return y(e,Pi(a.id),3);case 3:(d=e.g)?a=d:rf(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.C(4);break}rf(Error("Networkless Logging: Stored logs request expired age limit"));if(!a.id){e.C(5);break}return y(e,Ri(a.id),5);case 5:return e["return"]();case 4:f=a=jj(a);var g,h;if(null===(h=null===(g=null===f||void 0===f?void 0:f.options)||
void 0===g?void 0:g.u)||void 0===h?0:h.requestTimeMs)f.options.u.requestTimeMs=Math.round(T());(a=f)&&nh(a.url,a.options);e.f=0}})})}
function jj(a){var b=this,c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?a.sendCount<ej?y(k,Qi(a.id),6):y(k,Ri(a.id),2):k.C(2);2!=k.f&&Zi(Xi());c(e,f);k.f=0})})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return H(b,function h(){return z(h,function(k){if(1==k.f)return a&&a.id?y(k,Ri(a.id),2):k.C(2);d(e,f);k.f=0})})};
return a}
function hj(){return H(this,function b(){return z(b,function(c){return S("networkless_logging")?(2===Rf("networkless_ytidb_version")&&si().then(function(d){return d}),c["return"](ri())):c["return"](!1)})})}
;function kj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
x(kj,Error);function lj(a){var b=this;this.f=null;a?this.f=a:uh()&&(this.f=Vg());Tf(function(){Dh(b)},5E3)}
lj.prototype.isReady=function(){!this.f&&uh()&&(this.f=Vg());return!!this.f};
function Yg(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&rf(new kj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new kj("innertube xhrclient not ready",b,c,d);qf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,da:"JSON",M:function(){d.M()},
ba:d.M,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
aa:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Sa:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.qa)&&(g=e);var h=a.f.sa||!1,k=vh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ra&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ef(""+g+e,l||{},!0);hj().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var r=Bh(b,
c,k,h);if(r){var q=f.onSuccess,v=f.aa;f.onSuccess=function(w,F){Ch(r);q(w,F)};
c.aa=function(w,F){Ch(r);v(w,F)}}}try{S("use_fetch_for_op_xhr")?kh(m,f):S("networkless_gel")&&d.retry?(f.method="POST",gj(m,f)):(f.method="POST",f.u||(f.u={}),nh(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(Ch(r),r=0),rf(Error("An extension is blocking network request."));
else throw w;}r&&Tf(function(){Dh(a)},5E3)})}
;var mj=[{Z:function(a){return"Cannot read property '"+a.key+"'"},
U:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Z:function(a){return"Cannot call '"+a.key+"'"},
U:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function nj(){this.f=[];this.g=[]}
var oj;var pj=new N;var qj=new Set,rj=0,sj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function tj(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Na(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.v=c;this.H={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?uc(a.src):"https://www.youtube.com"),this.g=new Nf(b),c||(b=uj(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Na(this.f)),Hf[this.f.id]=this,window.postMessage){this.i=new N;vj(this);b=R(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Jf)wj(this,e)}}
p=Y.prototype;p.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
p.ta=function(){return this.f};
p.ea=function(a){this.O(a.event,a)};
p.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);xj(this,a);return this};
function wj(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.v==c[0]&&xj(a,d)}}
p.destroy=function(){this.f.id&&(Hf[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Pf&&(Pf[this.j]=null);this.g=null;a=this.f;for(var c in jb)jb[c][0]==a&&xf(c);this.l=this.f=null};
p.R=function(){return{}};
function yj(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.V(b):a.m.push(b)}
p.O=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.N(a,c);Mf(this.v+"."+a,c)}};
function uj(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+R(a.g,"title"));(d=R(a.g,"width"))&&c.setAttribute("width",d);(d=R(a.g,"height"))&&c.setAttribute("height",d);var h=
a.R();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&I(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(xc);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var q=l.charCodeAt(n-1);if(38==q||63==q)if(q=l.charCodeAt(n+r),!q||61==q||38==q||35==q)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
r-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=R(a.g,"host")+a.S()+"?"+wc(h);return c}
p.ca=function(){this.f&&this.f.contentWindow?this.V({event:"listening"}):window.clearInterval(this.h)};
function vj(a){Of(a.g,a,a.j);a.h=Bf(Va(a.ca,a));zf(a.f,"load",Va(function(){window.clearInterval(this.h);this.h=Bf(Va(this.ca,this))},a))}
function xj(a,b){a.H[b]||(a.H[b]=!0,yj(a,"addEventListener",[b]))}
p.V=function(a){a.id=this.j;a.channel="widget";var b=xe(a),c=this.g,d=uc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Qa){if(Qa.name&&"SyntaxError"==Qa.name){if(!(Qa.message&&0<Qa.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Qa;h=void 0===h?{}:h;h.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(S("console_log_js_exceptions")){var n=k,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=rj)&&0!==k.sampleWeight){var q=void 0,v=k,w=l,F=ac(v),Ya=F.message||"Unknown Error",ma=F.name||"UnknownError",
Ja=F.lineNumber||"Not available",Ej=F.fileName||"Not available",Fj=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var ua=0,bc=0;bc<v.args.length;bc++){var U=v.args[bc],Fa="params."+bc;ua+=Fa.length;if(U)if(Array.isArray(U)){for(var Gj=w,Fd=ua,nb=0;nb<U.length&&!(U[nb]&&(Fd+=tj(nb,U[nb],Fa,Gj),500<Fd));nb++);ua=Fd}else if("object"===typeof U){var cc=void 0,Hj=w,Gd=ua;for(cc in U)if(U[cc]&&(Gd+=tj(cc,U[cc],Fa,Hj),500<Gd))break;ua=Gd}else w[Fa]=String(JSON.stringify(U)).substring(0,
500),ua+=w[Fa].length;else w[Fa]=String(JSON.stringify(U)).substring(0,500),ua+=w[Fa].length;if(500<=ua)break}else if(v.hasOwnProperty("params")&&v.params){var dc=v.params;if("object"===typeof v.params){var lg=0;for(q in dc)if(dc[q]){var mg="params."+q,ng=String(JSON.stringify(dc[q])).substr(0,500);w[mg]=ng;lg+=mg.length+ng.length;if(500<lg)break}}else w.params=String(JSON.stringify(dc)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var Hd={message:Ya,name:ma,
lineNumber:Ja,fileName:Ej,stack:Fj,params:w},og=Number(v.columnNumber);isNaN(og)||(Hd.lineNumber=Hd.lineNumber+":"+og);for(var fa,Ga=Hd,pg=u(mj),Id=pg.next();!Id.done;Id=pg.next()){var Jd=Id.value;if(Jd.U[Ga.name])for(var qg=u(Jd.U[Ga.name]),Kd=qg.next();!Kd.done;Kd=qg.next()){var rg=Kd.value,ec=Ga.message.match(rg.regexp);if(ec){Ga.params["error.original"]=ec[0];for(var Ld=rg.groups,sg={},Ra=0;Ra<Ld.length;Ra++)sg[Ld[Ra]]=ec[Ra+1],Ga.params["error."+Ld[Ra]]=ec[Ra+1];Ga.message=Jd.Z(sg);break}}}fa=
Ga;window.yterr&&"function"===typeof window.yterr&&window.yterr(fa);if(!(qj.has(fa.message)||0<=fa.stack.indexOf("/YouTubeCenter.js")||0<=fa.stack.indexOf("/mytube.js"))){pj.N("handleError",fa);if(S("kevlar_gel_error_routing")){var fc=void 0,tg=m,Q=fa;a:{for(var ug=u(sj),Md=ug.next();!Md.done;Md=ug.next()){var vg=J;if(vg&&0<=vg.toLowerCase().indexOf(Md.value.toLowerCase())){var wg=!0;break a}}wg=!1}if(!wg){var ob={stackTrace:Q.stack};Q.fileName&&(ob.filename=Q.fileName);var ha=Q.lineNumber&&Q.lineNumber.split?
Q.lineNumber.split(":"):[];0!==ha.length&&(1!==ha.length||isNaN(Number(ha[0]))?2!==ha.length||isNaN(Number(ha[0]))||isNaN(Number(ha[1]))||(ob.lineNumber=Number(ha[0]),ob.columnNumber=Number(ha[1])):ob.lineNumber=Number(ha[0]));var Ij=Q.message,Jj=Q.name;oj||(oj=new nj);var xg=oj;a:{for(var yg=u(xg.g),Nd=yg.next();!Nd.done;Nd=yg.next()){var zg=Nd.value;if(Q.message&&Q.message.match(zg.f)){var Od=zg.weight;break a}}for(var Ag=u(xg.f),Pd=Ag.next();!Pd.done;Pd=Ag.next()){var Bg=Pd.value;if(Bg.f(Q)){Od=
Bg.weight;break a}}Od=1}var Qd={level:"ERROR_LEVEL_UNKNOWN",message:Ij,errorClassName:Jj,sampleWeight:Od};"ERROR"===tg?Qd.level="ERROR_LEVEL_ERROR":"WARNING"===tg&&(Qd.level="ERROR_LEVEL_WARNNING");var Kj={isObfuscated:!0,browserStackInfo:ob},Sa={pageUrl:window.location.href};O("FEXP_EXPERIMENTS")&&(Sa.experimentIds=O("FEXP_EXPERIMENTS"));Sa.kvPairs=[];var Rd=Q.params;if(Rd)for(var Cg=u(Object.keys(Rd)),Sd=Cg.next();!Sd.done;Sd=Cg.next()){var Dg=Sd.value;Sa.kvPairs.push({key:"client."+Dg,value:String(Rd[Dg])})}var Eg=
O("SERVER_NAME",void 0),Fg=O("SERVER_VERSION",void 0);Eg&&Fg&&(Sa.kvPairs.push({key:"server.name",value:Eg}),Sa.kvPairs.push({key:"server.version",value:Fg}));var Lj={errorMetadata:Sa,stackTrace:Kj,logMessage:Qd};fc=void 0===fc?{}:fc;var Gg=lj;O("ytLoggingEventsDefaultDisabled",!1)&&lj==lj&&(Gg=null);var Mj=Gg,X=fc;X=void 0===X?{}:X;var pb={};pb.eventTimeMs=Math.round(X.timestamp||T());pb.clientError=Lj;var Nj=String;if(X.timestamp)var Hg=-1;else{var Ig=C("_lact",window);Hg=null==Ig?-1:Math.max(Date.now()-
Ig,0)}pb.context={lastActivityMs:Nj(Hg)};if(S("log_sequence_info_on_gel_web")&&X.fa){var Oj=pb.context,qb=X.fa;Zg[qb]=qb in Zg?Zg[qb]+1:0;Oj.sequence={index:Zg[qb],groupKey:qb};X.Pa&&delete Zg[X.fa]}var Pj=pb,gc=X.Oa,Jg=Mj,Td="";if(gc){var hc=gc,Ud={};hc.videoId?Ud.videoId=hc.videoId:hc.playlistId&&(Ud.playlistId=hc.playlistId);kg[gc.token]=Ud;Td=gc.token}var Vd=jg.get(Td)||[];jg.set(Td,Vd);Vd.push(Pj);Jg&&(eg=new Jg);var Qj=Rf("web_logging_max_batch")||100,Kg=T();Vd.length>=Qj?Rg():10<=Kg-hg&&(Tg(),
hg=Kg);Rg()}}var Wd,Ha=fa,rb=Ha.params||{},va={wa:{a:"logerror",t:"jserror",type:Ha.name,msg:Ha.message.substr(0,250),line:Ha.lineNumber,level:m,"client.name":rb.name},u:{url:O("PAGE_NAME",window.location.href),file:Ha.fileName},method:"POST"};rb.version&&(va["client.version"]=rb.version);if(va.u){Ha.stack&&(va.u.stack=Ha.stack);for(var Lg=u(Object.keys(rb)),Xd=Lg.next();!Xd.done;Xd=Lg.next()){var Mg=Xd.value;va.u["client."+Mg]=rb[Mg]}if(Wd=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Ng=
u(Object.keys(Wd)),Yd=Ng.next();!Yd.done;Yd=Ng.next()){var Og=Yd.value;va.u[Og]=Wd[Og]}var Pg=O("SERVER_NAME",void 0),Qg=O("SERVER_VERSION",void 0);Pg&&Qg&&(va.u["server.name"]=Pg,va.u["server.version"]=Qg)}nh(O("ECATCHER_REPORT_HOST","")+"/error_204",va);qj.add(fa.message);rj++}}}}}else throw Qa;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function zj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Aj(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.D={};this.playerInfo={}}
x(Z,Y);p=Z.prototype;p.S=function(){return"/embed/"+R(this.g,"videoId")};
p.R=function(){var a=R(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=R(this.g,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
p.ea=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.D[c]=a[c];break;case "infoDelivery":Bj(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.D={};Cj(this,a.apiInterface);Bj(this,a);break;default:this.O(b,a)}};
function Bj(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function Cj(a,b){I(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:zj(c)?this[c]=function(){this.playerInfo={};
this.D={};yj(this,c,arguments);return this}:Aj(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){yj(this,c,arguments);
return this})},a)}
p.getVideoEmbedCode=function(){var a=parseInt(R(this.g,"width"),10),b=parseInt(R(this.g,"height"),10),c=R(this.g,"host")+this.S();Bb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(vb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(wb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(xb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(yb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(zb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Ab,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
p.getOptions=function(a){return this.D.namespaces?a?this.D[a].options||[]:this.D.namespaces||[]:[]};
p.getOption=function(a,b){if(this.D.namespaces&&a&&b)return this.D[a][b]};
function Dj(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");b&&(b={videoId:b,width:P(a,"width"),height:P(a,"height")},new Z(a,b))}}
;function Rj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
x(Rj,Y);Rj.prototype.S=function(){return"/embed/"+R(this.g,"videoId")};
Rj.prototype.R=function(){return{player:0,thumb_width:R(this.g,"thumbWidth"),thumb_height:R(this.g,"thumbHeight"),thumb_align:R(this.g,"thumbAlign")}};
Rj.prototype.O=function(a,b){Y.prototype.O.call(this,a,b?b.info:void 0)};
function Sj(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");if(b){b={videoId:b,events:{},width:P(a,"width"),height:P(a,"height"),thumbWidth:P(a,"thumb-width"),thumbHeight:P(a,"thumb-height"),thumbAlign:P(a,"thumb-align")};var c=P(a,"onclick");c&&(b.events.onClick=c);new Rj(a,b)}}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Hf[a]});
E("YT.scan",Kf);E("YT.subscribe",function(a,b,c){Ue.subscribe(a,b,c);Jf[a]=!0;for(var d in Hf)wj(Hf[d],a)});
E("YT.unsubscribe",function(a,b,c){Te(a,b,c)});
E("YT.Player",Z);E("YT.Thumbnail",Rj);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ta;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;If.push(function(a){a=Lf("player",a);I(a,Dj)});
If.push(function(){var a=Lf("thumbnail");I(a,Sj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Kf();var Tj=B.onYTReady;Tj&&Tj();var Uj=B.onYouTubeIframeAPIReady;Uj&&Uj();var Vj=B.onYouTubePlayerAPIReady;Vj&&Vj();}).call(this);
