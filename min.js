var uhtml=function(e){"use strict";function s(){return{sub:[],stack:[],wire:null}}function i(e,t,n){return r.test(t)?e:"<".concat(t).concat(n.replace(a,""),"></").concat(t,">")}function f(n,a){for(var o=[],e=function(r,e){var t=n[r];d.test(t)&&function(e,t){for(;t--;){var n=e[t];if(h.test(n))return!0;if(v.test(n))return!1}return!1}(n,r+1)?o.push(t.replace(d,function(e,t,n){return"".concat(a).concat(r,"=").concat(n||'"').concat(t).concat(n?"":'"')})):r+1<e?o.push(t,"\x3c!--".concat(a).concat(r,"--\x3e")):o.push(t)},t=0,r=n.length;t<r;t++)e(t,r);return o.join("").trim().replace(p,i)}function l(e,t,n,r,a){for(var o=n.length,i=t.length,c=o,u=0,l=0,f=null;u<i||l<c;)if(i===u)for(var s=c<o?l?r(n[l-1],-0).nextSibling:r(n[c-l],0):a;l<c;)e.insertBefore(r(n[l++],1),s);else if(c===l)for(;u<i;)f&&f.has(t[u])||e.removeChild(r(t[u],-1)),u++;else if(t[u]===n[l])u++,l++;else if(t[i-1]===n[c-1])i--,c--;else{if(i-u==1&&c-l==1){f&&f.has(t[u])?e.insertBefore(r(n[l],1),r(c<o?n[c]:a,0)):e.replaceChild(r(n[l],1),r(t[u],-1));break}if(t[u]===n[c-1]&&n[l]===t[i-1]){var d=r(t[--i],-1).nextSibling;e.insertBefore(r(n[l++],1),r(t[u++],-1).nextSibling),e.insertBefore(r(n[--c],1),d),t[i]=n[c]}else{if(!f){f=new Map;for(var h=l;h<c;)f.set(n[h],h++)}if(f.has(t[u])){var v=f.get(t[u]);if(l<v&&v<c){for(var p=u,g=1;++p<i&&p<c&&f.has(t[p])&&f.get(t[p])===v+g;)g++;if(v-l<g)for(var m=r(t[u],0);l<v;)e.insertBefore(r(n[l++],1),m);else e.replaceChild(r(n[l++],1),r(t[u++],-1))}else u++}else e.removeChild(r(t[u++],-1))}}return n}var t,o,c,n,u=new WeakMap,d=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,h=/<[a-z][^>]+$/i,v=/>[^<>]*$/,p=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,a=/\s+$/,g=Array.isArray,m=[],b=m.indexOf,w=m.slice,y=(t=document,o="fragment",n="content"in x(c="template")?function(e){var t=x(c);return t.innerHTML=e,t.content}:function(e){var t=x(o),n=x(c),r=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;n.innerHTML="<table>"+e+"</table>",r=n.querySelectorAll(a)}else n.innerHTML=e,r=n.childNodes;return N(t,r),t},function(e,t){return("svg"===t?function(e){var t=x(o),n=x("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",N(t,n.firstChild.childNodes),t}:n)(e)});function N(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function x(e){return e===o?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",e)}function C(e,t){return e.childNodes[t]}function L(e){for(var t=[],n=e.parentNode;n;)t.unshift(b.call(n.childNodes,e)),n=(e=n).parentNode;return t}function k(e,t){return 111===e.nodeType?1/t<0?t?e.remove():e.lastChild:t?e.valueOf():e.firstChild:e}var A=document,E=A.createTreeWalker,T=A.importNode,M=1!=T.length,O=M?function(e,t){return T.call(document,y(e,t),!0)}:y,S=M?function(e){return E.call(document,e,129,null,!1)}:function(e){return E.call(document,e,129)};function $(e){var t,n,r,a,o,i,c=e.type,u=e.path.reduce(C,this);return"node"===c?(r=u,a=[],i=document.createTextNode(""),function e(t){switch(typeof t){case"string":case"number":case"boolean":o!==t&&(o=t,i.textContent=t,a=l(r.parentNode,a,[i],k,r));break;case"object":case"undefined":if(null==t){a=l(r.parentNode,a,[],k,r);break}default:if(g(o=t))if(0===t.length)a=l(r.parentNode,a,[],k,r);else switch(typeof t[0]){case"string":case"number":case"boolean":e(String(t));break;default:a=l(r.parentNode,a,t,k,r)}else"ELEMENT_NODE"in t&&(a=l(r.parentNode,a,11===t.nodeType?w.call(t.childNodes):[t],k,r))}}):"attr"===c?function(n,e){if("ref"===e)return function(e){e.current=n};if("."===e.slice(0,1)){var t=e.slice(1);return function(e){n[t]=e}}var r;if("on"===e.slice(0,2)){var a=e.slice(2);return!(e in n)&&e.toLowerCase()in n&&(a=a.toLowerCase()),function(e){var t=g(e)?e:[e,!1];r!==t[0]&&(r&&n.removeEventListener(a,r,t[1]),(r=t[0])&&n.addEventListener(a,r,t[1]))}}var o=!0,i=document.createAttribute(e);return function(e){r!==e&&(null==(r=e)?o||(n.removeAttributeNode(i),o=!0):(i.value=e,o&&(n.setAttributeNode(i),o=!1)))}}(u,e.name):(t=u,function(e){n!==e&&(n=e,t.textContent=null==e?"":e)})}function j(e,t){var n=z(e,t);return{type:e,template:t,content:n.content,updates:n.updates,wire:null}}function B(e,t){var n=e.sub,r=e.stack,a={a:0,aLength:n.length,i:0,iLength:r.length},o=_(e,t,a),i=a.a,c=a.i,u=a.iLength;return i<a.aLength&&n.splice(i),c<u&&r.splice(c),o}var H="isµ",W=new WeakMap,z=function(e,t){var n=W.get(t)||D(e,t),r=n.content,a=n.nodes,o=T.call(document,r,!0);return{content:o,updates:a.map($,o)}},D=function(e,t){var n=function(e,t){for(var n=f(t,H),r=O(n,e),a=S(r),o=[],i=t.length-1,c=0,u="".concat(H).concat(c);c<i;){var l=a.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===u&&(o.push({type:"node",path:L(l)}),u="".concat(H).concat(++c));else{for(;l.hasAttribute(u);)o.push({type:"attr",path:L(l),name:l.getAttribute(u)}),l.removeAttribute(u),u="".concat(H).concat(++c);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(u,"--\x3e")&&(o.push({type:"text",path:L(l)}),u="".concat(H).concat(++c))}}return{content:r,nodes:o}}(e,t);return W.set(t,n),n},_=function(e,t,n){var r=e.stack,a=n.i,o=n.iLength,i=t.type,c=t.template,u=t.values,l=a===o;l&&(n.iLength=r.push(j(i,c))),n.i++,R(e,u,n);var f=r[a];l||f.template===c&&f.type===i||(r[a]=f=j(i,c));for(var s=f.content,d=f.updates,h=f.wire,v=0,p=d.length;v<p;v++)d[v](u[v]);return h||(f.wire=function(t){var n=t.childNodes,r=n.length;if(1===r)return n[0];var a=w.call(n,0),o=a[0],i=a[r-1];return{ELEMENT_NODE:1,nodeType:111,firstChild:o,lastChild:i,remove:function(){var e=document.createRange();return e.setStartAfter(o),e.setEndAfter(i),e.deleteContents(),o},valueOf:function(){if(n.length!==r)for(var e=0;e<r;)t.appendChild(a[e++]);return t}}}(s))},R=function(e,t,n){for(var r=0,a=t.length;r<a;r++){var o=t[r];if("object"==typeof o&&o)if(o instanceof q)t[r]=_(e,o,n);else if(g(o))for(var i=0,c=o.length;i<c;i++){var u=o[i];if("object"==typeof u&&u&&u instanceof q){var l=e.sub,f=n.a;f===n.aLength&&(n.aLength=l.push(s())),n.a++,o[i]=B(l[f],u)}}}};function q(e,t,n){this.type=e,this.template=t,this.values=n}function F(o){var r=new WeakMap;return G(function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new q(o,e,n)},{for:{value:function(e,t){var a,n=r.get(e)||r.set(e,P(null)).get(e);return n[t]||(n[t]=(a=s(),function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return B(a,new q(o,e,n))}))}},node:{value:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return B(s(),new q(o,e,n))}}})}var P=Object.create,G=Object.defineProperties,I=F("html"),J=F("svg");return e.html=I,e.render=function(e,t){var n,r,a="function"==typeof t?t():t,o=u.get(e)||(n=e,r=s(),u.set(n,r),r),i=a instanceof q?B(o,a):a;return i!==o.wire&&(o.wire=i,e.textContent="",e.appendChild(i.valueOf())),e},e.svg=J,e}({});