webpackJsonp([2],{2:function(e,t){"use strict";function n(e){return"[object Array]"===x.call(e)}function r(e){return"[object ArrayBuffer]"===x.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function u(e){return"number"==typeof e}function s(e){return"undefined"==typeof e}function l(e){return null!==e&&"object"==typeof e}function c(e){return"[object Date]"===x.call(e)}function f(e){return"[object File]"===x.call(e)}function d(e){return"[object Blob]"===x.call(e)}function p(e){return"[object Function]"===x.call(e)}function m(e){return l(e)&&p(e.pipe)}function h(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function b(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(null,e[a],a,e)}function v(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=v(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}var x=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:r,isFormData:o,isArrayBufferView:a,isString:i,isNumber:u,isObject:l,isUndefined:s,isDate:c,isFile:f,isBlob:d,isFunction:p,isStream:m,isURLSearchParams:h,isStandardBrowserEnv:g,forEach:b,merge:v,trim:y}},10:function(e,t){"use strict";function n(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e}function r(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?Math.min(document.body.clientHeight,document.documentElement.clientHeight):Math.max(document.body.clientHeight,document.documentElement.clientHeight)}function o(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}Object.defineProperty(t,"__esModule",{value:!0});var a={};a.formatDate=function(e){var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"},a.localItem=function(e,t){return 1==arguments.length?localStorage.getItem(e):localStorage.setItem(e,t)},a.removeLocalItem=function(e){return e?localStorage.removeItem(e):localStorage.removeItem()},a.reachBottom=function(){return(n()+r())/o()>=.98},t.Tool=a},20:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Header=t.UserHeadImg=t.TipMsgSignin=t.TabIcon=t.DataLoad=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),l=r(s),c=n(31),f=n(10);n(38);var d=t.DataLoad=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.loadingData,n=e.loadFailed,r=e.msg;return l["default"].createElement("div",null,l["default"].createElement("div",{className:"data-load data-load-"+t}),l["default"].createElement("p",{className:"data-tips-"+n},r))}}]),t}(s.Component);d.propTypes={loadingData:l["default"].PropTypes.bool,loadFailed:l["default"].PropTypes.bool,msg:l["default"].PropTypes.string};var p=t.TabIcon=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.tab,n=e.top,r=e.good;return n?t="top":r&&(t="good"),l["default"].createElement("i",{className:"iconfont icon-"+t})}}]),t}(s.Component);p.propTypes={tab:l["default"].PropTypes.string,top:l["default"].PropTypes.bool,good:l["default"].PropTypes.bool};var m=(t.TipMsgSignin=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"tip-msg-signin"},"你还未登录，请先",l["default"].createElement(c.Link,{to:"/login"},"登录"))}}]),t}(s.Component),t.UserHeadImg=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.url;return l["default"].createElement("div",{className:"user-headimg",style:{backgroundImage:"url("+e+")"}})}}]),t}(s.Component));m.propTypes={url:l["default"].PropTypes.string};var h=t.Header=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftTo,r=e.leftIcon,o=e.rightTo,a=e.rightIcon,i=e.rightClick,u=null;n&&r?u=l["default"].createElement(c.Link,{to:n},l["default"].createElement("i",{className:"iconfont icon-"+r})):"fanhui"===r&&(u=l["default"].createElement("a",{onClick:this.context.router.goBack},l["default"].createElement("i",{className:"iconfont icon-"+r})));var s=null;return o&&a?s=l["default"].createElement(c.Link,{to:o},l["default"].createElement("i",{className:"iconfont icon-"+a})):i&&a&&(s=l["default"].createElement("div",{onClick:i},l["default"].createElement("i",{className:"iconfont icon-"+a}))),l["default"].createElement("header",{className:"common-header"},l["default"].createElement("div",{className:"icon"},u),l["default"].createElement("h2",{className:"title"},t),l["default"].createElement("div",{className:"icon"},s))}}]),t}(s.Component);h.contextTypes={router:l["default"].PropTypes.object.isRequired};var y=t.Footer=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=JSON.parse(f.Tool.localItem("User")),t=e&&e.loginname?"/user/"+e.loginname:"/login",n=[];return n[this.props.index]="on",l["default"].createElement("footer",{className:"common-footer"},l["default"].createElement("div",{className:"zhanwei"}),l["default"].createElement("ul",{className:"menu"},l["default"].createElement("li",{className:n[0]},l["default"].createElement(c.Link,{to:"/"},l["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),l["default"].createElement("li",{className:n[1]},l["default"].createElement(c.Link,{to:"/topic/create"},l["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),l["default"].createElement("li",{className:n[2]},l["default"].createElement(c.Link,{to:"/my/messages"},l["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),l["default"].createElement("li",{className:n[3]},l["default"].createElement(c.Link,{to:t},l["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(s.Component);y.propTypes={index:l["default"].PropTypes.string},y.defaultProps={index:0}},21:function(e,t,n){"use strict";var r=n(2),o=n(48),a=n(54),i=n(22),u=n(52),s="undefined"!=typeof window&&window.btoa||n(47),l=n(55);e.exports=function(e,t,c){var f=c.data,d=c.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||u(c.url)||(p=new window.XDomainRequest,m="onload",h=!0,p.onprogress=function(){},p.ontimeout=function(){}),c.auth){var y=c.auth.username||"",g=c.auth.password||"";d.Authorization="Basic "+s(y+":"+g)}if(p.open(c.method.toUpperCase(),o(c.url,c.params,c.paramsSerializer),!0),p.timeout=c.timeout,p[m]=function(){if(p&&(4===p.readyState||h)&&0!==p.status){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r=c.responseType&&"text"!==c.responseType?p.response:p.responseText,o={data:i(r,n,c.transformResponse),status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:c,request:p};l(e,t,o),p=null}},p.onerror=function(){t(new Error("Network Error")),p=null},p.ontimeout=function(){var e=new Error("timeout of "+c.timeout+"ms exceeded");e.timeout=c.timeout,e.code="ECONNABORTED",t(e),p=null},r.isStandardBrowserEnv()){var b=n(50),v=c.withCredentials||u(c.url)?b.read(c.xsrfCookieName):void 0;v&&(d[c.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),c.withCredentials&&(p.withCredentials=!0),c.responseType)try{p.responseType=c.responseType}catch(x){if("json"!==p.responseType)throw x}c.progress&&("post"===c.method||"put"===c.method?p.upload.addEventListener("progress",c.progress):"get"===c.method&&p.addEventListener("progress",c.progress)),void 0===f&&(f=null),p.send(f)}},22:function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},28:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n={method:"get",type:"json",timeout:5e3,url:"",needLoad:!0,data:null,success:null,error:null};for(var r in t)n[r]=t[r];return e(i.setloadFail(!1)),n.needLoad&&e(i.setload(!0)),function(e,t){return(0,s["default"])({method:t.method,responseType:t.type,timeout:t.timeout,data:t.data,url:t.url})}(e,n).then(function(t){return e(i.setload(!1)),200===t.status?t.data.success?(n.success&&n.success(t),t):(e(i.setloadMsg("系统繁忙，请稍后再试！")),e(i.setloadFail(!0)),!1):(e(i.setloadMsg("请求失败，请稍后再试！")),e(i.setloadFail(!0)),!1)})["catch"](function(t){return n.error&&n.error(t),e(i.setloadMsg("网络异常，请稍后再试！")),e(i.setloadFail(!0)),e(i.setload(!1)),!1})};var a=n(57),i=o(a),u=n(41),s=r(u)},37:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".data-load-true{margin:20px auto;position:relative;-webkit-animation:rotate-forever 1s infinite linear;animation:rotate-forever 1s infinite linear;height:30px;width:30px;border:4px solid #80bd01;border-right-color:transparent;border-radius:50%}.data-tips-false{display:none}.data-tips-true{display:block;text-align:center;height:60px;line-height:60px}.icon-top{background:red}.icon-job{background:#00b38a}.icon-share{background:green}.icon-ask{background:blue}.icon-good{background:violet}.icon-undefined{display:none}.tip-msg-signin{padding:30px 30px 50px;text-align:center}.tip-msg-signin a{color:#80bd01}.user-headimg{width:38px;height:38px;margin-right:10px;border-radius:50%;border:1px solid #ddd;background-size:cover;background-color:#eee}.common-header{z-index:999;position:relative;background:#80bd01;-webkit-animation:move-down .3s ease-out;animation:move-down .3s ease-out}.common-header,.common-header .icon{height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.common-header .icon{width:50px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.common-header .icon a{display:block;color:#fff}.common-header .iconfont{font-size:24px;color:#fff}.common-header .title{line-height:50px;text-align:center;color:#fff;font-size:16px;margin:0;white-space:nowrap;text-overflow:ellipsis;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .zhanwei{height:50px}.common-footer .menu{position:fixed;right:0;bottom:0;left:0;height:50px;z-index:999;background:#80bd01;display:-webkit-box;display:-ms-flexbox;display:flex}.common-footer .menu li{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.common-footer .menu a{padding:5px 0;font-size:14px;display:block;line-height:20px;color:#fff;opacity:.8;text-align:center}.common-footer .menu .on{background:#a2f001}.common-footer .menu .on ad{opacity:1;color:#c9fe59}.common-footer .menu .iconfont{display:block}",""])},38:function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.id,r,""]]),n(19)(r,{}),r.locals&&(e.exports=r.locals)},41:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";function r(e){this.defaults=a.merge({},e),this.interceptors={request:new u,response:new u}}var o=n(45),a=n(2),i=n(44),u=n(43),s=n(51),l=n(49),c=n(46),f=n(22);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!s(e.url)&&(e.url=l(e.baseURL,e.url)),e.withCredentials=e.withCredentials||this.defaults.withCredentials,e.data=f(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n};var d=new r(o),p=e.exports=c(r.prototype.request,d);p.request=c(r.prototype.request,d),p.Axios=r,p.defaults=d.defaults,p.interceptors=d.interceptors,p.create=function(e){return new r(e)},p.all=function(e){return Promise.all(e)},p.spread=n(56),a.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))},p[e]=c(r.prototype[e],d)}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))},p[e]=c(r.prototype[e],d)})},43:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},44:function(e,t,n){(function(t){"use strict";e.exports=function(e){return new Promise(function(r,o){try{var a;"function"==typeof e.adapter?a=e.adapter:"undefined"!=typeof XMLHttpRequest?a=n(21):"undefined"!=typeof t&&(a=n(21)),"function"==typeof a&&a(r,o,e)}catch(i){o(i)}})}}).call(t,n(66))},45:function(e,t,n){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(2),a=n(53),i=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"};e.exports={transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(i,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:o.merge(u),post:o.merge(u),put:o.merge(u)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},46:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},47:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,a=String(e),i="",u=0,s=o;a.charAt(0|u)||(s="=",u%1);i+=s.charAt(63&t>>8-u%1*8)){if(r=a.charCodeAt(u+=.75),r>255)throw new n;t=t<<8|r}return i}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},48:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(e.indexOf("?")===-1?"?":"&")+a),e}},49:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},50:function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(a)&&u.push("domain="+a),i===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},51:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},52:function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},53:function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},54:function(e,t,n){"use strict";var r=n(2);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},55:function(e,t){"use strict";e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(n):e(n)}},56:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},57:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return{type:s.SET_DATALOAD,data:e}}function a(e){return{type:s.SET_LOADFAIL,data:e}}function i(e){return{type:s.SET_LOADMSG,data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setload=o,t.setloadFail=a,t.setloadMsg=i;var u=n(12),s=r(u)},85:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t,n){return function(r,o){return(0,f["default"])(r,{method:"get",url:l.ACTION_PREFIX+"/api/v1/topics?tab="+n+"&page="+e+"&limit="+t,data:null,success:function(e){r(i(e.data.data))},error:function(e){alert(e.data.error_msg)}})}}function i(e){return{type:l.SET_INDEXLIST,data:e}}function u(){return{type:l.CLEAR_INDEXLIST}}Object.defineProperty(t,"__esModule",{value:!0}),t.getIndexList=a,t.setIndexList=i,t.clearIndexList=u;var s=n(12),l=o(s),c=n(28),f=r(c)},86:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return{type:u.SET_CURRENTPAGE,data:e}}function a(e){return{type:u.SET_SCROLL_POSITION,data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCurrPage=o,t.setScrollPos=a;var i=n(12),u=r(i)},275:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e){return function(t,n){return(0,c["default"])(t,{method:"get",url:s.ACTION_PREFIX+"/api/v1/user/"+e,success:function(e){t(i(e.data.data))},error:function(e){alert(e.data.error_msg)}})}}function i(e){return{type:s.SET_USERINFO,data:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getUserInfo=a,t.setUserInfo=i;var u=n(12),s=o(u),l=n(28),c=r(l)},285:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeList=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),l=r(s),c=n(10),f=n(31),d=t.HomeList=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.list,n=e.display;return l["default"].createElement("ul",{className:"list",style:{display:n}},t.map(function(e,t){var n=e.id,r=e.title,o=e.last_reply_at;return l["default"].createElement("li",{key:t},l["default"].createElement(f.Link,{to:"/topic/"+n},l["default"].createElement("div",{className:"tit"},r),l["default"].createElement("time",{className:!0},c.Tool.formatDate(o))))}))}}]),t}(s.Component);d.propTypes={display:l["default"].PropTypes.string,list:l["default"].PropTypes.array}},286:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),l=r(s),c=n(10),f=n(285),d=n(20);n(640);var p=t.Home=function(e){function t(){var e,n,r,i;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={tabIndex:0},i=n,a(r,i)}return i(t,e),u(t,[{key:"changeTab",value:function(e){this.state.tabIndex!==e&&this.setState({tabIndex:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.avatar_url,r=t.loginname,o=t.score,a=t.recent_topics,i=t.recent_replies,u=t.create_at,s=this.state.tabIndex,p=[],m=[];return p[s]="on",m[s]="block",l["default"].createElement("div",{className:"user-index"},l["default"].createElement("div",{className:"headimg"},l["default"].createElement(d.UserHeadImg,{url:n}),l["default"].createElement("div",{className:"name"},r),l["default"].createElement("div",{className:"score"},"积分：",o,"      注册于：",c.Tool.formatDate(u))),l["default"].createElement("ul",{className:"tab-nav"},l["default"].createElement("li",{onClick:function(){return e.changeTab(0)},className:p[0]},"主题"),l["default"].createElement("li",{onClick:function(){return e.changeTab(1)},className:p[1]},"回复")),l["default"].createElement(f.HomeList,{list:a,display:m[0]}),l["default"].createElement(f.HomeList,{list:i,display:m[1]}))}}]),t}(s.Component);p.propTypes={avatar_url:l["default"].PropTypes.string,loginname:l["default"].PropTypes.string,score:l["default"].PropTypes.number,recent_topics:l["default"].PropTypes.array,recent_replies:l["default"].PropTypes.array,create_at:l["default"].PropTypes.string}},293:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),c=o(l),f=n(81),d=n(70),p=n(275),m=r(p),h=n(85),y=r(h),g=n(86),b=r(g),v=n(20),x=n(286),w=n(10),E=function(e){function t(e,n){return a(this,t),i(this,Object.getPrototypeOf(t).call(this,e,n))}return u(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.actions,n=e.dispatch,r=this.props.params.loginname;t.getUserInfo(r).then(function(e){}),n(t.clearIndexList()),n(t.setCurrPage(0))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.params,r=e.loadState,o=e.loadFailed,a=e.msg,i=JSON.parse(w.Tool.localItem("User"));i=i?i:{};var u=r||o?c["default"].createElement(v.DataLoad,{loadingData:r,loadFailed:o,msg:a}):c["default"].createElement(x.Home,t),s=n.loginname==i.loginname?"个人中心":n.loginname+"的个人中心",l=n.loginname==i.loginname?c["default"].createElement(v.Footer,{index:"3"}):null,f=n.loginname==i.loginname?null:"fanhui",d=n.loginname==i.loginname?"tuichu":null;return c["default"].createElement("div",null,c["default"].createElement(v.Header,{title:s,leftIcon:f,rightIcon:d,rightTo:"/loginout"}),u,l)}}]),t}(l.Component),O=function(e){return{data:e.user.userInfo,loadState:e.load.loadState,loadFailed:e.load.loadFailed,msg:e.load.msg}},T=function(e){return{actions:(0,d.bindActionCreators)(Object.assign({},m,y,b),e),dispatch:e}};e.exports=(0,f.connect)(O,T)(E),E.contextTypes={router:c["default"].PropTypes.object}},499:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".user-index .headimg{padding:20px;background:#87c701;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.user-index .headimg .user-headimg{width:80px;height:80px}.user-index .name{padding-top:10px;line-height:24px;font-size:16px;color:#fff}.user-index .score{font-size:12px;color:#eee}.user-index .tab-nav{text-align:center;background:#eee;display:-webkit-box;display:-ms-flexbox;display:flex}.user-index .tab-nav li{line-height:38px;border-bottom:3px solid transparent;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}.user-index .tab-nav .on{border-bottom:3px solid #80bd01}.user-index .list{display:none}.user-index .list a{overflow:hidden;height:28px;padding:5px 10px;line-height:28px;border-bottom:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex}.user-index .list a .tit{font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.user-index .list a time{padding-left:20px;font-size:12px;color:#aaa;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}",""])},640:function(e,t,n){var r=n(499);"string"==typeof r&&(r=[[e.id,r,""]]),n(19)(r,{}),r.locals&&(e.exports=r.locals)}});