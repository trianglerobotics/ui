"use strict";(self.webpackChunk_datalayer_examples_jupyter_react_cra=self.webpackChunk_datalayer_examples_jupyter_react_cra||[]).push([[2077],{22077:(t,e,n)=>{var r;function a(t,e){return r=e,t}function u(t,e){var n,r,i,c=t.next();if("<"!=c||!t.eat("!")){if("<"==c&&t.eat("?"))return e.tokenize=(r="meta",i="?>",function(t,e){for(;!t.eol();){if(t.match(i)){e.tokenize=u;break}t.next()}return r}),a("meta",c);if("#"==c&&t.eatWhile(/[\w]/))return a("atom","tag");if("|"==c)return a("keyword","separator");if(c.match(/[\(\)\[\]\-\.,\+\?>]/))return a(null,c);if(c.match(/[\[\]]/))return a("rule",c);if('"'==c||"'"==c)return e.tokenize=(n=c,function(t,e){for(var r,l=!1;null!=(r=t.next());){if(r==n&&!l){e.tokenize=u;break}l=!l&&"\\"==r}return a("string","tag")}),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var s=t.current();return null!==s.substr(s.length-1,s.length).match(/\?|\+/)&&t.backUp(1),a("tag","tag")}return"%"==c||"*"==c?a("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),a(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=l,l(t,e)):t.eatWhile(/[\w]/)?a("keyword","doindent"):void 0}function l(t,e){for(var n,r=0;null!=(n=t.next());){if(r>=2&&">"==n){e.tokenize=u;break}r="-"==n?r+1:0}return a("comment","comment")}n.r(e),n.d(e,{dtd:()=>i});const i={name:"dtd",startState:function(){return{tokenize:u,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),a=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==a?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var a=t.stack.length;return"]"===e.charAt(0)?a--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?a--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?a--:"tag"==r?a++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?a--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?a-=1:">"===e||(a-=1)))),null!=r&&"]"!=r||a--),t.baseIndent+a*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);