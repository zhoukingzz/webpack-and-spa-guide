webpackJsonp([3,4],[,function(n,e,t){function o(n){var e=r[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var r={"./views/bar/index.js":[5,1],"./views/foo/index.js":[6,0]};o.keys=function(){return Object.keys(r)},n.exports=o,o.id=1},,function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(0),u=o(r);new u.default({onNavigate:function(n){t(1)("./views"+n.path+"/index.js").then(function(n){var e=n.default,t=new e;t.mount(document.body)})}})}],[3]);