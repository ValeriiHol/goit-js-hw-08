!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function O(e){return c=e,f=setTimeout(h,t),s?g(e):a}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?b(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=o=void 0,a)}function S(){var e=p(),n=T(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),g(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},S.flush=function(){return void 0===f?a:w(p())},S}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){T={email:w.value,message:S.value},localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),""===w.value||""===S.value)return alert("Всі поля повинні бути заповненні.");localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),T={}}));var T=JSON.parse(localStorage.getItem("feedback-form-state"))||{},h=O.elements,w=h.email,S=h.message;T&&(w.value=T.email||"",S.value=T.message||"")}();
//# sourceMappingURL=03-feedback.8d43f4f1.js.map
