"use strict";(self.webpackChunk_datalayer_examples_jupyter_react_cra=self.webpackChunk_datalayer_examples_jupyter_react_cra||[]).push([[5389],{5389:(e,t,r)=>{function n(e,t,r){return t(r),r(e,t)}r.r(t),r.d(t,{elm:()=>g});var a=/[a-z]/,i=/[A-Z]/,o=/[a-zA-Z0-9_]/,u=/[0-9]/,f=/[0-9A-Fa-f]/,s=/[-&*+.\\/<>=?^|:]/,l=/[(),[\]{}]/,c=/[ \v\f]/;function p(){return function(e,t){if(e.eatWhile(c))return null;var r=e.next();if(l.test(r))return"{"===r&&e.eat("-")?n(e,t,m(1)):"["===r&&e.match("glsl|")?n(e,t,_):"builtin";if("'"===r)return n(e,t,x);if('"'===r)return e.eat('"')?e.eat('"')?n(e,t,k):"string":n(e,t,h);if(i.test(r))return e.eatWhile(o),"type";if(a.test(r)){var p=1===e.pos;return e.eatWhile(o),p?"def":"variable"}if(u.test(r)){if("0"===r){if(e.eat(/[xX]/))return e.eatWhile(f),"number"}else e.eatWhile(u);return e.eat(".")&&e.eatWhile(u),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(u)),"number"}return s.test(r)?"-"===r&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(s),"keyword"):"_"===r?"keyword":"error"}}function m(e){return 0==e?p():function(t,r){for(;!t.eol();){var n=t.next();if("{"==n&&t.eat("-"))++e;else if("-"==n&&t.eat("}")&&0===--e)return r(p()),"comment"}return r(m(e)),"comment"}}function k(e,t){for(;!e.eol();){if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(p()),"string"}return"string"}function h(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function x(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(p()),"string"):(e.skipToEnd(),t(p()),"error")}function _(e,t){for(;!e.eol();){if("|"===e.next()&&e.eat("]"))return t(p()),"string"}return"string"}var d={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const g={name:"elm",startState:function(){return{f:p()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return d.hasOwnProperty(n)?"keyword":r},languageData:{commentTokens:{line:"--"}}}}}]);