(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Velocity","description":"The ridiculously scalable, flexible Minecraft proxy.","author":"Velocity Contributors"}}}}')},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,o=r("q1tI"),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},Bl7J:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var n=r("wTIg"),o=r("q1tI"),i=r.n(o),a=r("qKvR"),c=r("Wbzz"),s=r("upwP"),l=Object(n.a)("footer",{target:"e1qs4nzh0"})("position:fixed;bottom:0;background:",s.a.colors.navbg,";font-size:.8rem;width:100%;"),u=Object(n.a)("div",{target:"e1qs4nzh1"})({name:"q5fqw0",styles:"padding:1rem;"});function f(e){var t=e.jumbotron;return Object(a.d)(l,{style:{borderTop:t?"none":"1px solid "+s.a.colors.navbgBorder}},Object(a.d)(u,null,"Copyright © 2018-2020 Velocity Contributors. This wouldn't be possible without our ",Object(a.d)(c.a,{to:"/sponsors"},"generous sponsors"),"."))}var d=r("aZ2d"),p=r.n(d),y=r("FMhr"),h=r.n(y),m=Object(n.a)("ul",{target:"eqhgp4d0"})("list-style-type:none;margin:0;padding:0;position:fixed;top:0;width:100%;background-color:",s.a.colors.navbg,";z-index:100;"),g=Object(n.a)("li",{target:"eqhgp4d1"})({name:"1w1834a",styles:"display:inline;float:left;padding:15px;"}),b=Object(n.a)("li",{target:"eqhgp4d2"})("display:inline;float:right;padding:18px 10px;a{color:",s.a.colors.foreground," !important;}");function v(e){var t=e.jumbotron;return Object(a.d)("nav",null,Object(a.d)(m,{style:{borderBottom:t?"none":"1px solid "+s.a.colors.navbgBorder}},Object(a.d)(g,null,Object(a.d)(c.a,{to:"/",style:{display:"flex",flexDirection:"row",alignItems:"center",color:s.a.colors.foreground,fontWeight:"bold"}},Object(a.d)("img",{src:"blue"===s.a.logoVariant?h.a:p.a,alt:"Velocity",height:"30",style:{paddingRight:".3rem"}}),Object(a.d)("span",null,"Velocity"))),Object(a.d)(b,null,Object(a.d)(c.a,{to:"https://discord.gg/8cB9Bgf"},"Discord")),Object(a.d)(b,null,Object(a.d)(c.a,{to:"https://forums.velocitypowered.com"},"Forums")),Object(a.d)(b,null,Object(a.d)(c.a,{to:"/downloads"},"Downloads")),Object(a.d)(b,null,Object(a.d)(c.a,{to:"/wiki"},"Documentation"))))}r("rMck");var A=Object(n.a)("main",{target:"e1xfnwwh0"})({name:"1o3oomb",styles:"margin-top:60px;"});function T(e){var t=e.jumbotron,r=e.children;return Object(a.d)(i.a.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("body{background:",s.a.colors.background,";color:",s.a.colors.foreground,";}a,a:visited{color:",s.a.colors.primary,";text-decoration:none;}")}),Object(a.d)(v,{jumbotron:t}),Object(a.d)(A,null,r),Object(a.d)(f,{jumbotron:t}))}},FMhr:function(e,t,r){e.exports=r.p+"static/velocity-blue-cropped-3d34dfa8be83311d5b9a3c0cd6013cb4.png"},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},Wbzz:function(e,t,r){"use strict";r("xfY5"),r("q1tI");var n=r("+ZDr"),o=r.n(n);r.d(t,"a",(function(){return o.a}));r("lw3w");var i=r("emEt");r("qKvR"),i.default.enqueue},aZ2d:function(e,t){e.exports="data:image/png;base64,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"},bmMU:function(e,t,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(o&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!r.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],r.get(s.value[0])))return!1;return!0}if(i&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!r.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(t[s]!==r[s])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],r[l[s]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},"dZ+Y":function(e,t,r){"use strict";var n=r("XKFU"),o=r("CkkT")(3);n(n.P+n.F*!r("LyE8")([].some,!0),"Array",{some:function(e){return o(this,e,arguments[1])}})},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),i=r("aCFj"),a=r("EemH"),c=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=i(e),s=a.f,l=o(n),u={},f=0;l.length>f;)void 0!==(r=s(n,t=l[f++]))&&c(u,t,r);return u}})},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},mQtv:function(e,t,r){var n=r("kJMx"),o=r("JiEa"),i=r("y3w9"),a=r("dyZX").Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(i(e)),r=o.f;return r?t.concat(r(e)):t}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,o,i,a,c=r("17x9"),s=r.n(c),l=r("8+s/"),u=r.n(l),f=r("bmMU"),d=r.n(f),p=r("q1tI"),y=r.n(p),h=r("MgzW"),m=r.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(A).map((function(e){return A[e]})),"charset"),w="cssText",O="href",k="http-equiv",j="innerHTML",S="itemprop",C="name",E="property",x="rel",P="src",I="target",q={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",F="defer",M="encodeSpecialCharacters",N="onChangeClientState",L="titleTemplate",D=Object.keys(q).reduce((function(e,t){return e[q[t]]=t,e}),{}),V=[A.NOSCRIPT,A.SCRIPT,A.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=_(e,A.TITLE),r=_(e,L);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,R);return t||n||void 0},Y=function(e){return _(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===x&&"canonical"===e[r].toLowerCase()||s===x&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==j&&c!==w&&c!==S||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=m()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;se(A.BODY,n),se(A.HTML,o),ce(f,d);var p={baseTag:le(A.BASE,r),linkTags:le(A.LINK,i),metaTags:le(A.META,a),noscriptTags:le(A.NOSCRIPT,c),scriptTags:le(A.SCRIPT,l),styleTags:le(A.STYLE,u)},y={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(A.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},le=function(e,t){var r=document.head||document.querySelector(A.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===j)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[y.a.createElement(A.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=ue(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+J(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=q[e]||e;if(r===j||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),y.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===j||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(A.BASE,t,n),bodyAttributes:de(g,r,n),htmlAttributes:de(b,o,n),link:de(A.LINK,i,n),meta:de(A.META,a,n),noscript:de(A.NOSCRIPT,c,n),script:de(A.SCRIPT,s,n),style:de(A.STYLE,l,n),title:de(A.TITLE,{title:f,titleAttributes:d},n)}},ye=u()((function(e){return{baseTag:Q([O,I],e),bodyAttributes:Z(g,e),defer:_(e,F),encode:_(e,M),htmlAttributes:Z(b,e),linkTags:G(A.LINK,[x,O],e),metaTags:G(A.META,[C,T,k,E,S],e),noscriptTags:G(A.NOSCRIPT,[j],e),onChangeClientState:Y(e),scriptTags:G(A.SCRIPT,[P,j],e),styleTags:G(A.STYLE,[w],e),title:W(e),titleAttributes:Z(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return H(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case A.TITLE:return K({},o,((t={})[n.type]=a,t.titleAttributes=K({},i),t));case A.BODY:return K({},o,{bodyAttributes:K({},i)});case A.HTML:return K({},o,{htmlAttributes:K({},i)})}return K({},o,((r={})[n.type]=K({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(z(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=K({},r);return t&&(n=this.mapChildrenToProps(t,n)),y.a.createElement(o,n)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(y.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind}).call(this,r("yLpj"))},rMck:function(e,t,r){},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("q1tI"),o=r.n(n),i=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?o.a.createElement(i.a,Object.assign({location:t,pageResources:r},r.json)):null}},upwP:function(e,t,r){"use strict";t.a={logoVariant:"white",colors:{background:"#111",foreground:"#eee",jumbotron:"#222",navbgBorder:"#212426",navbg:"#111",primary:"#29b6f6",gray:"#e1e1e1"}}},vrFN:function(e,t,r){"use strict";var n=r("51K9"),o=(r("q1tI"),r("qhky")),i=r("qKvR");function a(e){var t=e.description,r=e.lang,a=e.meta,c=e.title,s=n.data.site,l=t||s.siteMetadata.description;return Object(i.d)(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}a.defaultProps={lang:"en",meta:[],description:""},t.a=a},wTIg:function(e,t,r){"use strict";r("f3/d"),r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("lSNA"),o=r.n(n),i=r("q1tI"),a=r("4qRI"),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(a.a)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=r("qKvR"),u=r("SIPS"),f=r("MiSq"),d=s,p=function(e){return"theme"!==e&&"innerRef"!==e},y=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:p};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function e(t,r){var n,o,a;void 0!==r&&(n=r.label,a=r.target,o=t.__emotion_forwardProp&&r.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&r.shouldForwardProp(e)}:r.shouldForwardProp);var c=t.__emotion_real===t,s=c&&t.__emotion_base||t;"function"!=typeof o&&c&&(o=t.__emotion_forwardProp);var d=o||y(s),p=!d("as");return function(){var h=arguments,g=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&g.push("label:"+n+";"),null==h[0]||void 0===h[0].raw)g.push.apply(g,h);else{0,g.push(h[0][0]);for(var b=h.length,v=1;v<b;v++)g.push(h[v],h[0][v])}var A=Object(l.e)((function(e,t,r){return Object(i.createElement)(l.b.Consumer,null,(function(n){var c=p&&e.as||s,l="",h=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=n}"string"==typeof e.className?l=Object(u.a)(t.registered,h,e.className):null!=e.className&&(l=e.className+" ");var v=Object(f.a)(g.concat(h),t.registered,m);Object(u.b)(t,v,"string"==typeof c);l+=t.key+"-"+v.name,void 0!==a&&(l+=" "+a);var A=p&&void 0===o?y(c):d,T={};for(var w in e)p&&"as"===w||A(w)&&(T[w]=e[w]);return T.className=l,T.ref=r||e.innerRef,Object(i.createElement)(c,T)}))}));return A.displayName=void 0!==n?n:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",A.defaultProps=t.defaultProps,A.__emotion_real=A,A.__emotion_base=s,A.__emotion_styles=g,A.__emotion_forwardProp=o,Object.defineProperty(A,"toString",{value:function(){return"."+a}}),A.withComponent=function(t,n){return e(t,void 0!==n?m({},r||{},{},n):r).apply(void 0,g)},A}}},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),o=r("aagx"),i=r("LZWt"),a=r("Xbzi"),c=r("apmT"),s=r("eeVq"),l=r("kJMx").f,u=r("EemH").f,f=r("hswa").f,d=r("qncB").trim,p=n.Number,y=p,h=p.prototype,m="Number"==i(r("Kuth")(h)),g="trim"in String.prototype,b=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,i=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var a,s=t.slice(2),l=0,u=s.length;l<u;l++)if((a=s.charCodeAt(l))<48||a>o)return NaN;return parseInt(s,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(m?s((function(){h.valueOf.call(r)})):"Number"!=i(r))?a(new y(b(t)),r,p):b(t)};for(var v,A=r("nh4g")?l(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;A.length>T;T++)o(y,v=A[T])&&!o(p,v)&&f(p,v,u(y,v));p.prototype=h,h.constructor=p,r("KroJ")(n,"Number",p)}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-396292c0e6a7eead987d.js.map