"use strict";(self.webpackChunk_datalayer_examples_jupyter_react_cra=self.webpackChunk_datalayer_examples_jupyter_react_cra||[]).push([[6006],{67154:function(e,r,t){var n=this&&this.__values||function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),r.MathJax=r.combineWithMathJax=r.combineDefaults=r.combineConfig=r.isObject=void 0;var a=t(49629);function o(e){return"object"===typeof e&&null!==e}function i(e,r){var t,a;try{for(var s=n(Object.keys(r)),c=s.next();!c.done;c=s.next()){var l=c.value;"__esModule"!==l&&(!o(e[l])||!o(r[l])||r[l]instanceof Promise?null!==r[l]&&void 0!==r[l]&&(e[l]=r[l]):i(e[l],r[l]))}}catch(u){t={error:u}}finally{try{c&&!c.done&&(a=s.return)&&a.call(s)}finally{if(t)throw t.error}}return e}r.isObject=o,r.combineConfig=i,r.combineDefaults=function e(r,t,a){var i,s;r[t]||(r[t]={}),r=r[t];try{for(var c=n(Object.keys(a)),l=c.next();!l.done;l=c.next()){var u=l.value;o(r[u])&&o(a[u])?e(r,u,a[u]):null==r[u]&&null!=a[u]&&(r[u]=a[u])}}catch(d){i={error:d}}finally{try{l&&!l.done&&(s=c.return)&&s.call(c)}finally{if(i)throw i.error}}return r},r.combineWithMathJax=function(e){return i(r.MathJax,e)},"undefined"===typeof t.g.MathJax&&(t.g.MathJax={}),t.g.MathJax.version||(t.g.MathJax={version:a.VERSION,_:{},config:t.g.MathJax}),r.MathJax=t.g.MathJax},5778:function(e,r,t){var n,a,o=this&&this.__values||function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),r.CONFIG=r.MathJax=r.Loader=r.PathFilters=r.PackageError=r.Package=void 0;var i=t(67154),s=t(33313),c=t(33313);Object.defineProperty(r,"Package",{enumerable:!0,get:function(){return c.Package}}),Object.defineProperty(r,"PackageError",{enumerable:!0,get:function(){return c.PackageError}});var l,u=t(25241);if(r.PathFilters={source:function(e){return r.CONFIG.source.hasOwnProperty(e.name)&&(e.name=r.CONFIG.source[e.name]),!0},normalize:function(e){var r=e.name;return r.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)||(e.name="[mathjax]/"+r.replace(/^\.\//,"")),e.addExtension&&!r.match(/\.[^\/]+$/)&&(e.name+=".js"),!0},prefix:function(e){for(var t;(t=e.name.match(/^\[([^\]]*)\]/))&&r.CONFIG.paths.hasOwnProperty(t[1]);)e.name=r.CONFIG.paths[t[1]]+e.name.substr(t[0].length);return!0}},function(e){var t=i.MathJax.version;e.versions=new Map,e.ready=function(){for(var e,r,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];0===t.length&&(t=Array.from(s.Package.packages.keys()));var a=[];try{for(var i=o(t),c=i.next();!c.done;c=i.next()){var l=c.value,u=s.Package.packages.get(l)||new s.Package(l,!0);a.push(u.promise)}}catch(d){e={error:d}}finally{try{c&&!c.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}return Promise.all(a)},e.load=function(){for(var t,n,a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];if(0===a.length)return Promise.resolve();var c=[],l=function(t){var n=s.Package.packages.get(t);n||(n=new s.Package(t)).provides(r.CONFIG.provides[t]),n.checkNoLoad(),c.push(n.promise.then((function(){r.CONFIG.versionWarnings&&n.isLoaded&&!e.versions.has(s.Package.resolvePath(t))&&console.warn("No version information available for component ".concat(t))})))};try{for(var u=o(a),d=u.next();!d.done;d=u.next()){l(d.value)}}catch(f){t={error:f}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return s.Package.loadAll(),Promise.all(c)},e.preLoad=function(){for(var e,t,n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];try{for(var i=o(n),c=i.next();!c.done;c=i.next()){var l=c.value,u=s.Package.packages.get(l);u||(u=new s.Package(l,!0)).provides(r.CONFIG.provides[l]),u.loaded()}}catch(d){e={error:d}}finally{try{c&&!c.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},e.defaultReady=function(){"undefined"!==typeof r.MathJax.startup&&r.MathJax.config.startup.ready()},e.getRoot=function(){var e="//../../es5";if("undefined"!==typeof document){var r=document.currentScript||document.getElementById("MathJax-script");r&&(e=r.src.replace(/\/[^\/]*$/,""))}return e},e.checkVersion=function(n,a,o){return e.versions.set(s.Package.resolvePath(n),t),!(!r.CONFIG.versionWarnings||a===t)&&(console.warn("Component ".concat(n," uses ").concat(a," of MathJax; version in use is ").concat(t)),!0)},e.pathFilters=new u.FunctionList,e.pathFilters.add(r.PathFilters.source,0),e.pathFilters.add(r.PathFilters.normalize,10),e.pathFilters.add(r.PathFilters.prefix,20)}(l=r.Loader||(r.Loader={})),r.MathJax=i.MathJax,"undefined"===typeof r.MathJax.loader){(0,i.combineDefaults)(r.MathJax.config,"loader",{paths:{mathjax:l.getRoot()},source:{},dependencies:{},provides:{},load:[],ready:l.defaultReady.bind(l),failed:function(e){return console.log("MathJax(".concat(e.package||"?","): ").concat(e.message))},require:null,pathFilters:[],versionWarnings:!0}),(0,i.combineWithMathJax)({loader:l});try{for(var d=o(r.MathJax.config.loader.pathFilters),f=d.next();!f.done;f=d.next()){var h=f.value;Array.isArray(h)?l.pathFilters.add(h[0],h[1]):l.pathFilters.add(h)}}catch(p){n={error:p}}finally{try{f&&!f.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}}r.CONFIG=r.MathJax.config.loader},33313:function(e,r,t){var n=this&&this.__extends||function(){var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},e(r,t)};return function(r,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),a=this&&this.__values||function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},o=this&&this.__read||function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i},i=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.Package=r.PackageError=void 0;var s=t(5778),c=function(e){function r(r,t){var n=e.call(this,r)||this;return n.package=t,n}return n(r,e),r}(Error);r.PackageError=c;var l=function(){function e(r,t){void 0===t&&(t=!1),this.isLoaded=!1,this.isLoading=!1,this.hasFailed=!1,this.dependents=[],this.dependencies=[],this.dependencyCount=0,this.provided=[],this.name=r,this.noLoad=t,e.packages.set(r,this),this.promise=this.makePromise(this.makeDependencies())}return Object.defineProperty(e.prototype,"canLoad",{get:function(){return 0===this.dependencyCount&&!this.noLoad&&!this.isLoading&&!this.hasFailed},enumerable:!1,configurable:!0}),e.resolvePath=function(e,r){void 0===r&&(r=!0);var t={name:e,original:e,addExtension:r};return s.Loader.pathFilters.execute(t),t.name},e.loadAll=function(){var e,r;try{for(var t=a(this.packages.values()),n=t.next();!n.done;n=t.next()){var o=n.value;o.canLoad&&o.load()}}catch(i){e={error:i}}finally{try{n&&!n.done&&(r=t.return)&&r.call(t)}finally{if(e)throw e.error}}},e.prototype.makeDependencies=function(){var r,t,n=[],c=e.packages,l=this.noLoad,u=this.name,d=[];s.CONFIG.dependencies.hasOwnProperty(u)?d.push.apply(d,i([],o(s.CONFIG.dependencies[u]),!1)):"core"!==u&&d.push("core");try{for(var f=a(d),h=f.next();!h.done;h=f.next()){var p=h.value,y=c.get(p)||new e(p,l);this.dependencies.indexOf(y)<0&&(y.addDependent(this,l),this.dependencies.push(y),y.isLoaded||(this.dependencyCount++,n.push(y.promise)))}}catch(v){r={error:v}}finally{try{h&&!h.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}return n},e.prototype.makePromise=function(e){var r=this,t=new Promise((function(e,t){r.resolve=e,r.reject=t})),n=s.CONFIG[this.name]||{};return n.ready&&(t=t.then((function(e){return n.ready(r.name)}))),e.length&&(e.push(t),t=Promise.all(e).then((function(e){return e.join(", ")}))),n.failed&&t.catch((function(e){return n.failed(new c(e,r.name))})),t},e.prototype.load=function(){if(!this.isLoaded&&!this.isLoading&&!this.noLoad){this.isLoading=!0;var r=e.resolvePath(this.name);s.CONFIG.require?this.loadCustom(r):this.loadScript(r)}},e.prototype.loadCustom=function(e){var r=this;try{var t=s.CONFIG.require(e);t instanceof Promise?t.then((function(){return r.checkLoad()})).catch((function(t){return r.failed("Can't load \""+e+'"\n'+t.message.trim())})):this.checkLoad()}catch(n){this.failed(n.message)}},e.prototype.loadScript=function(e){var r=this,t=document.createElement("script");t.src=e,t.charset="UTF-8",t.onload=function(e){return r.checkLoad()},t.onerror=function(t){return r.failed("Can't load \""+e+'"')},document.head.appendChild(t)},e.prototype.loaded=function(){var e,r,t,n;this.isLoaded=!0,this.isLoading=!1;try{for(var o=a(this.dependents),i=o.next();!i.done;i=o.next()){i.value.requirementSatisfied()}}catch(l){e={error:l}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}try{for(var s=a(this.provided),c=s.next();!c.done;c=s.next()){c.value.loaded()}}catch(u){t={error:u}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}this.resolve(this.name)},e.prototype.failed=function(e){this.hasFailed=!0,this.isLoading=!1,this.reject(new c(e,this.name))},e.prototype.checkLoad=function(){var e=this;((s.CONFIG[this.name]||{}).checkReady||function(){return Promise.resolve()})().then((function(){return e.loaded()})).catch((function(r){return e.failed(r)}))},e.prototype.requirementSatisfied=function(){this.dependencyCount&&(this.dependencyCount--,this.canLoad&&this.load())},e.prototype.provides=function(r){var t,n;void 0===r&&(r=[]);try{for(var o=a(r),i=o.next();!i.done;i=o.next()){var c=i.value,l=e.packages.get(c);l||(s.CONFIG.dependencies[c]||(s.CONFIG.dependencies[c]=[]),s.CONFIG.dependencies[c].push(c),(l=new e(c,!0)).isLoading=!0),this.provided.push(l)}}catch(u){t={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}},e.prototype.addDependent=function(e,r){this.dependents.push(e),r||this.checkNoLoad()},e.prototype.checkNoLoad=function(){var e,r;if(this.noLoad){this.noLoad=!1;try{for(var t=a(this.dependencies),n=t.next();!n.done;n=t.next()){n.value.checkNoLoad()}}catch(o){e={error:o}}finally{try{n&&!n.done&&(r=t.return)&&r.call(t)}finally{if(e)throw e.error}}}},e.packages=new Map,e}();r.Package=l},16006:function(e,r,t){var n=this&&this.__values||function(e){var r="function"===typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")},a=this&&this.__read||function(e,r){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,a,o=t.call(e),i=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(s){a={error:s}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i},o=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,a=0,o=r.length;a<o;a++)!n&&a in r||(n||(n=Array.prototype.slice.call(r,0,a)),n[a]=r[a]);return e.concat(n||Array.prototype.slice.call(r))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.RequireConfiguration=r.options=r.RequireMethods=r.RequireLoad=void 0;var s=t(2135),c=t(69851),l=i(t(71476)),u=t(67154),d=t(33313),f=t(5778),h=t(52229),p=t(47767),y=u.MathJax.config;function v(e,r){var t,a=e.parseOptions.options.require,o=e.parseOptions.packageData.get("require").required,i=r.substr(a.prefix.length);if(o.indexOf(i)<0){o.push(i),function(e,r){var t,a;void 0===r&&(r=[]);var o=e.parseOptions.options.require.prefix;try{for(var i=n(r),s=i.next();!s.done;s=i.next()){var c=s.value;c.substr(0,o.length)===o&&v(e,c)}}catch(l){t={error:l}}finally{try{s&&!s.done&&(a=i.return)&&a.call(i)}finally{if(t)throw t.error}}}(e,f.CONFIG.dependencies[r]);var c=s.ConfigurationHandler.get(i);if(c){var l=y[r]||{};c.options&&1===Object.keys(c.options).length&&c.options[i]&&((t={})[i]=l,l=t),e.configuration.add(i,e,l);var u=e.parseOptions.packageData.get("require").configured;c.preprocessors.length&&!u.has(i)&&(u.set(i,!0),h.mathjax.retryAfter(Promise.resolve()))}}}function g(e,r){var t=e.options.require,n=t.allow,a=("["===r.substr(0,1)?"":t.prefix)+r;if(!(n.hasOwnProperty(a)?n[a]:n.hasOwnProperty(r)?n[r]:t.defaultAllow))throw new l.default("BadRequire",'Extension "%1" is not allowed to be loaded',a);d.Package.packages.has(a)?v(e.configuration.packageData.get("require").jax,a):h.mathjax.retryAfter(f.Loader.load(a))}r.RequireLoad=g,r.RequireMethods={Require:function(e,r){var t=e.GetArgument(r);if(t.match(/[^_a-zA-Z0-9]/)||""===t)throw new l.default("BadPackageName","Argument for %1 is not a valid package name",r);g(e,t)}},r.options={require:{allow:(0,p.expandable)({base:!1,"all-packages":!1,autoload:!1,configmacros:!1,tagformat:!1,setoptions:!1}),defaultAllow:!0,prefix:"tex"}},new c.CommandMap("require",{require:"Require"},r.RequireMethods),r.RequireConfiguration=s.Configuration.create("require",{handler:{macro:["require"]},config:function(e,r){r.parseOptions.packageData.set("require",{jax:r,required:o([],a(r.options.packages),!1),configured:new Map});var t=r.parseOptions.options.require,n=t.prefix;if(n.match(/[^_a-zA-Z0-9]/))throw Error("Illegal characters used in \\require prefix");f.CONFIG.paths[n]||(f.CONFIG.paths[n]="[mathjax]/input/tex/extensions"),t.prefix="["+n+"]/"},options:r.options})}}]);